import React from 'react';

class StopWatch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      timerID: null,
      isActive: false,
      currTime: 0
    }
    this.handleFaceClick = this.handleFaceClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleFaceClick() {
    this.setState({ currTime: 0 });
  }
  handleButtonClick() {
    if (this.state.isActive) {
      // Code for when timer is active (being switched OFF)
      this.setState({ isActive: false })
      clearInterval(this.state.timerID);
    } else {
      // Code for when timer is inactive (being switched ON)
      const timerID = setInterval(() => {
        this.setState(prevState => {
          return { currTime: prevState.currTime + 1 }
        })
      }, 1000)
      this.setState({ 
        timerID,
        isActive: true
      })
    }
  }
  render() {
    const playPauseIcon = this.state.isActive ? 'fa-pause' : 'fa-play';
    return(
      <div className="container">
        <div className="watch-container" onClick={ this.handleFaceClick }>
          <div className="watch">
            <h1 className="clock">{ this.state.currTime }</h1>
          </div>
        </div>
        <div className="btn-container">
          <div className="play-btn"><i className={ `fas ${ playPauseIcon }`} onClick={ this.handleButtonClick }></i></div>
        </div>
      </div>
    )
  }
}

export default StopWatch;