import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="notFound-wrapper">
        <div className="notFound-cont">
            <img className="notFound-img" alt="Not found" src="https://i.imgur.com/qFIZLrj.png"/> 
            <span className="notFound-text"> Page not found! </span>
        </div>
      </div>
    )
  }
}

export default NotFound;

