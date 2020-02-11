/* eslint-disable no-console */
const fs = require('fs');
const userInput = process.argv[2];

fs.readFile(userInput, 'utf8', (err, data)=> {
  if (err) throw err;
  console.log(data);
})