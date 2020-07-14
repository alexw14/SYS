import React from 'react';
// import Navbar from '../Navbar';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="hero-img"></div>
        <div className="wrapper">
          <div className="main">Stacey <span>Yellow</span> Studio</div>
          <div className="desc">
            I am a designer who loves to work hands on.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
