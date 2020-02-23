import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  'images/pikachu.png',
  'images/squirtle.png',
  'images/charmander.png'
];

ReactDOM.render(
  <Carousel images={ images }/>,
  document.getElementById('root')
);
