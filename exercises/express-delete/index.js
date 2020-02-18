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

server.delete('/api/grades/:id', (req, res, next) => {
  const id = req.params.id;
  for (let student = 0; student < students.length; student++) {
    if (id == students[student].id) {
      students.splice(student, 1);
      return res.sendStatus(204);
    } 
  }
  res.send('Student ID of \'' + id + '\' doesn\'t exist');
});

server.listen(3000, () => {
  console.log('Exprss is listening on port 3000');
});
