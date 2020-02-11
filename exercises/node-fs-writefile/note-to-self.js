const fs = require('fs');

const input = process.argv[2];

fs.writeFile('notes.txt', input, (err)=> {
  if (err) throw err;
  console.log('Saved!');
})