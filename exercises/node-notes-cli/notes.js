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
    readAll();
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
    list.nextId++
}