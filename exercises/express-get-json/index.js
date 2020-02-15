const express = require('express');
const server = express();

const students = [
  {
    id: 1,
    name: 'Shey Maloles',
    course: 'Cross-Stitching',
    grade: 'A'
  },
  {
    id: 2,
    name: 'Seth Yu',
    course: 'Tae Kwon Do',
    grade: 'B+'
  },
  {
    id: 3,
    name: 'Aaron Laton',
    course: 'Running Around',
    grade: 'A+'
  }
];

server.use(express.static(__dirname + '/public'));

server.get('/api/grades', (req, res, next) => {
  res.json(students);
  console.log('Sent students array as json object');
});

server.listen(3000, () => {
  console.log('Express is listening on port 3000');
});
