import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({ isToggleOn : !prevState.isToggleOn }))
  }
  render() {
    const switchMode = this.state.isToggleOn ? 'on' : 'off';
    return(
      <div className="toggle-container">
        <div className={`switch-container ${switchMode}`} onClick={ this.handleClick }>
          <div className="switch"></div>
        </div>
        <div className="status-container">
         <h1 className="status">{ switchMode.toUpperCase() }</h1>
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;