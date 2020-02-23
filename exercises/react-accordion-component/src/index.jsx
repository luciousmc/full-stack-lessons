import React from 'react';
import ReactDOM from 'react-dom';
import AccordionComp from './accordion';

const subjects = [
  {
    id: 1,
    title: 'Casading Style Sheets',
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error pariatur, natus eaque necessitatibus aperiam nam? Accusamus molestias eveniet tempora aut exercitationem facilis suscipit alias aperiam saepe mollitia asperiores dicta dolor ullam repellendus natus, odio illo sapiente ad, neque soluta perferendis sint? Pariatur enim maxime id?",
    isActive: false
  },
  {
    id: 2,
    title: 'Javacript',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore harum, molestias delectus odio, accusamus reprehenderit fugit numquam sequi expedita minus doloremque suscipit optio explicabo. Accusantium enim ab a vel.",
    isActive: false
  },
  {
    id: 3,
    title: 'Ruby',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore harum, molestias delectus odio, accusamus reprehenderit fugit numquam sequi expedita minus doloremque suscipit optio explicabo. Accusantium enim ab a vel.",
    isActive: true
  },
  {
    id: 4,
    title: 'React-Native',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe doloribus ut ea laudantium iure.',
    isActive: false
  },
  {
    id: 5,
    title: 'Sass',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe doloribus ut ea laudantium iure.',
    isActive: false
  }
];

ReactDOM.render(
  <AccordionComp subjects={ subjects }/>,
  document.getElementById('root')
);
