const express = require('express');
const server = express();
const grades = require('./data.json');

server.get('/api/grades', (req, res) => {
  res.json(grades);
});

server.listen(3000, () => {
  console.log('Express is listening on port 3000');
});
