const fs = require('fs');

const cpSource = process.argv[2];
const cpDest = process.argv[3];

fs.readFile(cpSource, 'utf8', (err, data)=> {
  if (err) throw err;
  fs.writeFile(cpDest, data, (err)=> {
    if (err) throw err;
    console.log('Copied!');
  })
});