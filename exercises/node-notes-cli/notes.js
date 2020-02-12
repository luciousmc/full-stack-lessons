const fs = require('fs');
const list = require('./data.json');
const inputCmd = process.argv[2];

switch (inputCmd) {
  case 'read':
    readAll();
    break;
  case 'create':
    const inputItem = process.argv[3];
    createItem(inputItem);
    break;
  case 'delete':
    break;
  case 'update':
    break;
  default:
    console.log('Error: unrecognized command: ' + inputCmd);
}
function readAll () {
  for (const key in list.notes) {
    console.log(`${key}: ${list.notes[key]}`)
  }
}
function createItem (item) {
    list.notes[list.nextId.toString()] = item;
    list.nextId++;
    writeJSON();
}
function writeJSON () {
  const json_obj = JSON.stringify(list, null, 2);
  fs.writeFile('data.json', json_obj, (err)=> {
    if (err) throw err;
    readAll();
  })
}