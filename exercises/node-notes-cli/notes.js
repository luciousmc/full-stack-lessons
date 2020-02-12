const fs = require('fs');
const list = require('./data.json');
const inputCmd = process.argv[2];

switch (inputCmd) {
  case 'read':
    for (const key in list.notes) {
      console.log(`${key}: ${list.notes[key]}`)
    }
}