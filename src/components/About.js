import React, { Component } from 'react';

import '../styles/About.css';

import NavBar from './NavBar'
import BaseLayout from './BaseLayout'

class About extends Component {
  render() {
    return (
      <div className="About">
        <NavBar />
        hello about
      </div>
    );
  }
}

export default About;
