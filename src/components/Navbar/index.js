import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div className="Navbar">
        <div className="container">
          <div className="left">
            <div className="header-logo">Stacey Yellow Studio</div>
          </div>
          <div className="right">
            <div className="menu-item">Portfolio</div>
            <div className="menu-item">About</div>
            <div className="menu-item">Contact</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
