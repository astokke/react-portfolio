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

  componentWillMount() {
    const localStorageRef = localStorage.getItem(`user-data`);
    if(localStorageRef) {
      // update our App component's order state 

      this.setState({
          users: JSON.parse(localStorageRef)
      });
    } 
       
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`user-data`, JSON.stringify(nextState.users));

  }

  addRandomUser(){
    const users = {...this.state.users};
    console.log(Object.keys(users).length);
    if(Object.keys(users).length >= 5) {
      console.log('Limited to five users. Delete older users to add a new one');
      return; 
    }

    const user = getRandomUser();
    const timestamp = Date.now();
    users[`user-${timestamp}`] = user;
    this.setState({users});
  }
  render() {
    return (
      <div>
        <UserList />
        <User addRandomUser={this.addRandomUser}/>
      </div>
    )
  }
}

export default UserApp;

