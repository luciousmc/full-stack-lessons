const testArr = [
  {
    title: 'The Land Before Time',
    author: 'Bobby Brown',
    isbn: '100'
  },
  {
    title: 'Monkey See, Monkey Do',
    author: 'Ben Dover',
    isbn: '300'
  },
  {
    title: 'If You Can\'t Pull a Saw Out, Don\'t Push it in',
    author: 'Bolson Colson',
    isbn: '800'
  }
];

const testArrJson = JSON.stringify(testArr);
console.log('The JSON object is: ', testArrJson, '\n and its data type is: ', typeof testArrJson);

const student = '{"name":"Sherielyn","age":24,"subject":"Home Economics"}';

const studentObj = JSON.parse(student);
console.log('The student obj is: ', studentObj, '\n and its data type is: ', typeof studentObj);