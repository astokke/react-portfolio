import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div> 
            <ul className="nav">
                <li><a>About</a></li>
                <li><a>Memory</a></li>
                <li><a>Users</a></li>
                <li><a>OMDB</a></li>
            </ul>
        </div> 
    );
  }
}

export default Header;
