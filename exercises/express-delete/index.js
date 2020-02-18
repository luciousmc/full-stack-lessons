const express = require('express');
const server = express();

const students = [
  {
    id: 1,
    name: 'Sherielyn Maloles',
    course: 'Tala tala',
    grade: 100
  },
  {
    id: 2,
    name: 'Marlon Clay',
    course: 'Crochet',
    grade: 73
  }
];

server.get('/api/grades', (req, res, next) => {
  res.json(students);
});


server.listen(3000, () => {
  console.log('Exprss is listening on port 3000');
});
