import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    }
  }
  render() {
    return(
      <div className="toggle-container">
        <div className="switch-container">
          <div className="switch"></div>
        </div>
        <div className="status-container">
          <h1 className="status"></h1>
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;