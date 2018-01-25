import React, { Component } from 'react';

class User extends Component {
    
  render() {
    return (
      <div>
        <button onClick={this.props.addRandomUser}> Add random user</button>
      </div>
    )
  }

}

export default User;
