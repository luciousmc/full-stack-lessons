import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isClicked: true });
  }
  render() {
    const btnText = this.state.isClicked ? 'Thanks' : 'Click Me';
    return (
      <button onClick={ this.handleClick }>{ btnText }</button>
    )
  }
}

ReactDOM.render (
  <CustomButton />,
  document.getElementById('root')
);
