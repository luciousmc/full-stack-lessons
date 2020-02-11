const fs = require('fs');

const inputs = process.argv.slice(2);
const inputLen = inputs.length;

for (let i = 0; i < inputLen; i++) {
  fs.readFile(inputs[i], 'utf8', (err, data)=> {
    if (err) throw err;
    console.log(data);
  })
}
