import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  render() {
    return(
      <React.Fragment>
        <div className="menu-overlay"></div>
        <menu>
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