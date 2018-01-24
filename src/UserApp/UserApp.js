import React, { Component } from 'react';
import User from './User';
import UserList from './UserList';

class UserApp extends Component {
  render() {
    return (
      <div>
        <UserList />
        <User />
      </div>
    )
  }
}

export default UserApp;
