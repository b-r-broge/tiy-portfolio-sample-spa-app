import React, { Component } from 'react';

import '../styles/Portfolio.css';

import NavBar from './NavBar'
import BaseLayout from './BaseLayout'

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <NavBar />
        hello portfolio
      </div>
    );
  }
}

export default Portfolio;
