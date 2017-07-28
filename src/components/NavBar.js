import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    let links = []
    switch (this.props.page) {
      case "home":
        links.push(<Link className="active" to="/Home"> Home </Link>)
        links.push(<Link to="/About"> About </Link>)
        links.push(<Link to="/Portfolio"> Portfolio </Link>)
        break;
      case "About":
        links.push(<Link to="/Home"> Home </Link>)
        links.push(<Link className="active" to="/About"> About </Link>)
        links.push(<Link to="/Portfolio"> Portfolio </Link>)

        break;
      case "port":
        links.push(<Link to="/Home"> Home </Link>)
        links.push(<Link to="/About"> About </Link>)
        links.push(<Link className="active" to="/Portfolio"> Portfolio </Link>)
        break;
      default:
        break;
    }
    console.log('links', links);
    return (
      <div className="navBar">
        {links}
      </div>
    );
  }
}

export default NavBar;
