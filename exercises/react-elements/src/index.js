import React from 'react';
import ReactDOM from 'react-dom';

const h1El = React.createElement('h1', null, 'Hello, World!');
console.log('the react element is: ', h1El);

ReactDOM.render(
  h1El,
  document.getElementById('root')
);
