/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promise = takeAChance('Marlon');

promise.then((value)=> {
  console.log(value);
}, (err)=> {
  console.error(err);
});
