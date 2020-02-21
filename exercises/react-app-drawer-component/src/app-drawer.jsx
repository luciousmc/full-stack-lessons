import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState( prevState => ({ isOpen: !prevState.isOpen }) )
  }
  render() {
    const overlayToggle = this.state.isOpen ? 'show' : 'hidden';
    const menuToggle = this.state.isOpen ? 'open' : 'closed';
    return(
      <React.Fragment>
        <div className="icon">
          <span className="bars" onClick={ this.handleClick }>
            <i className="fas fa-bars"></i>
          </span>
        </div>
        <div className={ `menu-overlay ${ overlayToggle }`} onClick={ this.handleClick }></div>
        <menu className={ menuToggle }>
          <h1 className="menu-title">Menu</h1>
          <nav className="nav">
            <ul className="nav-bar">
              <li><a href="#">About Me</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
          </nav>
        </menu>
      </React.Fragment>
    )
  }
}

export default AppDrawer;