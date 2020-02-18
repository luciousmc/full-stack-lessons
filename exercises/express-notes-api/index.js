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

// User can POST a new note 
server.use('/api/notes', express.json(), (req, res) => {
    if (!req.body.content) {
    return res.status(400).json({ error: 'content property is required for POST' }); 
  }
  req.body.id = grades.nextId++;
  grades.notes[req.body.id.toString()] = req.body;
  fs.writeFile('./data.json', JSON.stringify(grades, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Sorry there was an unexpected error' });
    }
    res.status(201).json(req.body);
  }) 
});

server.listen(3000, () => {
  console.log('Express is listening on port 3000');
});
