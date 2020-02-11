const fs = require('fs');
const randNum = Math.floor(Math.random() * 100);

fs.writeFile('random.txt', randNum, (err)=> {
  if (err) throw err;
});