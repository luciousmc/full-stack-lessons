const express = require('express');
const server = express();

const grades =  [];
let nextID =    1;

server.use(express.json(), (req, res, next) => {
  if (req.method === 'POST') {
    req.body.id = nextID++;
    grades.push(req.body);
    res.status(201).json(req.body);
  }
  next();
});

server.get('/api/grades', (req, res, next) => {
  res.json(grades);
});

server.listen(3000, () => {
  console.log('Express is listening on port 3000');
});
