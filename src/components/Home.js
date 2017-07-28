import React, { Component } from 'react';

import '../styles/Home.css'

import NavBar from './NavBar'
import BaseLayout from './BaseLayout'

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <NavBar page="home"/>
        <div className="Home">
          testing stuffs
        </div>
      </div>
    );
  }
}

export default Home;
