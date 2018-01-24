import React, { Component } from 'react';
import User from './User';
import UserList from './UserList';
import {getRandomUser} from '../../helpers';

class UserApp extends Component {
  constructor() {
    super()
    this.addRandomUser = this.addRandomUser.bind(this)

    this.state = {
      users: {}
    }
  }

  addRandomUser(){
    const user = getRandomUser();

    const timestamp = Date.now();
    const users = {...this.state.users};
    users[`user-${timestamp}`] = user;

    this.setState({users});
  }
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
