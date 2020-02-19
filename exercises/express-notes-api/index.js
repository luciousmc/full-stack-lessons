const express = require('express');
const server = express();
const grades = require('./data.json');
const fs = require('fs');

// User can retrieve all notes
server.get('/api/notes', (req, res) => {
  res.json(grades.notes);
});

// User can retrieve 1 note via its ID
server.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  // ERROR if id is not a positive number
  if (isNaN(id) || id < 1) {
    return res.status(400).json({ error: 'ID must be a positive integer'});
  }

  // ERROR if id does not exist in note list
  if (!grades.notes.hasOwnProperty(id)) {
    return res.status(404).json({ error: `Cannot find id ${id}` });
  }
  res.json(grades.notes[id]);
});

// User can DELETE a note using the id of the note
server.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  // ERROR if id is not a positive number
  if (isNaN(id) || id < 1) {
    return res.status(400).json({ error: 'ID must be a positive integer'});
  }

  // ERROR if id does not exist in note list
  if (!grades.notes.hasOwnProperty(id)) {
    return res.status(404).json({ error: `Cannot find id ${id}` });
  }
  delete grades.notes[id];
  fs.writeFile('./data.json', JSON.stringify(grades, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Sorry, an unexpected error occured while trying to delete id ' + id })
    }
    res.sendStatus(204);
  });
});

// User can POST a new note 
// Use express.json() middleware to handle request body
server.post('/api/notes', express.json(), (req, res) => {
  // If there is no content, throw a 400 error
  if (!req.body.content) {
    return res.status(400).json({ error: 'content property is required for POST' }); 
  }
  // Assign the request body the next Id
  req.body.id = grades.nextId++;

  // Add the new item to the object
  grades.notes[req.body.id.toString()] = req.body;

  // Write the new object to the json data file
  fs.writeFile('./data.json', JSON.stringify(grades, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Sorry there was an unexpected error' });
    }
    res.status(201).json(req.body);
  }); 
});

// User can change(PUT) the content of a note
server.put('/api/notes/:id', express.json(), (req, res) => {
  const id = req.params.id;
  // ERROR if id is not a positive number
  if (isNaN(id) || id < 1) {
    return res.status(400).json({ error: 'ID must be a positive integer'});
  }

  // If there is no content, throw a 400 error
  if (!req.body.content) {
    return res.status(400).json({ error: 'content property is required for POST' }); 
  }

  // ERROR if id does not exist in note list
  if (!grades.notes.hasOwnProperty(id)) {
    return res.status(404).json({ error: `Cannot find id ${id}` });
  }
  // Assign the request body the Id to replace
  req.body.id = parseInt(id);

  // Replace the old object with the new one with updated content
  grades.notes[req.body.id] = req.body;

  // Write the changes to the data.json file
  fs.writeFile('./data.json', JSON.stringify(grades, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Sorry, an unexpected error occured while trying to update the object' });
    }
    res.status(200).json(req.body);
  })
});


// Setup listening port for server
server.listen(3000, () => {
  console.log('Express is listening on port 3000');
});
