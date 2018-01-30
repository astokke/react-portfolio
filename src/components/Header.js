import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div> 
            <ul className="nav">
                <li><a onClick={() => this.props.changeCurrentPage('About')}>About</a></li>
                <li><a>Memory</a></li>
                <li><a onClick={() => this.props.changeCurrentPage('Users')}> Users </a></li>
                <li><a onClick={() => this.props.changeCurrentPage('OMDB')}>OMDB</a></li>
            </ul>
        </div> 
    );
  }
}
export default Header;
