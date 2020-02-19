import React from 'react';
import ReactDOM from 'react-dom';

function Button() {
  return <button>button 1</button>
}

const Button2 = () => <button>Button 2</button>;

ReactDOM.render(
  <div>
    <Button /> 
    <Button2 />
  </div>,
  document.getElementById('root')
);
