import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      colors: {
        "0": "white",
        "3": "blue",
        "6": "green",
        "9": "purple",
        "12": "orange",
        "15": "red"
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }
  getBgClass() {
    const colorObj = this.state.colors;
    const count = this.state.clicks.toString();

    if (count == 18) {
      this.setState({ clicks: 0 });
    }
    if (colorObj[count]) {
      return colorObj[count];
    }
    return colorObj[count - (count % 3)];
  }
  handleClick () {
    this.setState(prevState=> ({
      clicks: prevState.clicks + 1
    }));
  }
  render() {
    const btnClrClass = this.getBgClass();
    return (
      <div>
        <div className={ 'button ' + btnClrClass } onClick={ this.handleClick }>Clicks: { this.state.clicks }</div>
      </div>
    );
  }
}

export default HotButton;