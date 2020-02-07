/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Bill',
  'Monique',
  'Dan',
  'TJ',
  'Scott',
  'Tim H.',
  'Cody',
  'Brett',
  'Andy',
  'Tim D.'
];

const evenNumbers = numbers.filter((number) => {
  if (number % 2 === 0) {
    return number;
  }
})
console.log('evenNumbers: ', evenNumbers);

const overFive = numbers.filter((number)=> {
  if (number > 5) {
    return number;
  }
})
console.log('overFive: ', overFive);

const startWithT = names.filter((name)=> {
  if (name[0] === 'T') {
    return name;
  }
})
console.log('startWithT: ', startWithT);

const hasD = names.filter(name=> {
   if (name.includes('d') || name.includes('D')) {
     return name;
   }
})
console.log('hasD: ', hasD);