import React from 'react';
// import Navbar from '../Navbar';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div class="app-container">
        {/* <Navbar /> */}
        <div className="hero-img" style={{ height: window.innerHeight }}></div>
        <div className="wrapper">
          <div className="main">
            Stacey <span>Yellow</span> Studio
          </div>
          <div className="desc">
            I am a designer who loves to work hands on.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
