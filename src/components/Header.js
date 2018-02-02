import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div> 
                <ul className="nav">
                    <li className="header-link"><Link to="/about">About</Link></li>
                    <li className="header-link"><Link to="/users">Users</Link></li>
                    <li className="header-link"><Link to="/omdb">Movie List</Link></li>
                </ul>
        </div> 
    );
  }
}
export default Header;