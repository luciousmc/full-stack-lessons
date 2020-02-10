/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

function calculate(num1, op, num2) {
  switch(op) {
    case '+':
    case 'plus':
      return num1 + num2;
      break;
    default:
      return 'please use \'+\' symbol or plus';
  }
}
const numInput1 = parseInt(process.argv[2]);
const opInput = process.argv[3];
const numInput2 = parseInt(process.argv[4]);
const output = calculate(numInput1, opInput, numInput2);
console.log('Answer: ', output);