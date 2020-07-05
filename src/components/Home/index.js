import React, { Component } from 'react';
import Navbar from '../Navbar';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="hero-img"></div>
      </div>
    );
  }
}

export default Home;
