import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div> 
                <ul className="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="memory">Memory</Link></li>
                    <li><Link to="/omdb">OMDB</Link></li>
                </ul>
        </div> 
    );
  }
}
export default Header;