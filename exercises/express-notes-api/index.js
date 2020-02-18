const express = require('express');
const server = express();
const grades = require('./data.json');

// User can retrieve all notes
server.get('/api/notes', (req, res) => {
  res.json(grades);
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

server.listen(3000, () => {
  console.log('Express is listening on port 3000');
});
