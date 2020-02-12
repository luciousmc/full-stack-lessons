const fs = require('fs');
const list = require('./data.json');
const inputCmd = process.argv[2];
const inputItem = process.argv[3];

switch (inputCmd) {
  case 'read':
    readAll();
    break;
  case 'create':
    const createTxt = inputItem;
    if (!createTxt) {
      console.error('Error: Please enter text to be saved');
    }
    createItem(createTxt);
    break;
  case 'delete':
    const idToDelete = inputItem;
    if (!idToDelete) {
      console.error('Error: Please enter an ID to be deleted');
    } else if (isNaN(parseInt(idToDelete))) {
      console.error('Error: Please use the ID number of the item you want to remove');
    } else if (!list.notes.hasOwnProperty(idToDelete)) {
      console.error('Error: Invalid ID: ' + idToDelete)
    } else {
      deleteItem(idToDelete);
    }
    break;
  case 'update':
    const idToUpdate = inputItem;
    const updateTxt = process.argv[4];
    if (!idToUpdate || !updateTxt) {
      console.error('Error: Please enter an ID and replacement text to update item');
    } else if (isNaN(parseInt(idToUpdate))) {
      console.error('Error: Please use the ID number of the item you want to update');
    } else if (!list.notes.hasOwnProperty(idToUpdate)) {
      console.error('Error: Invalid ID: ' + idToUpdate)
    } else {
      updateItem(idToUpdate, updateTxt);
    }
    break;
  default:
    console.error('Error: unrecognized command: ' + inputCmd);
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
function deleteItem (id) {
  delete list.notes[id];
  writeJSON();
}
function updateItem(id, itemTxt) {
  list.notes[id] = itemTxt;
  writeJSON();
}