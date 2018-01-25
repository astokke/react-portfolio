import React, { Component } from 'react';
import User from './User';
import EditUser from './EditUser';
import {getRandomUser} from '../../helpers';

class UserApp extends Component {
  constructor() {
    super()
    this.addRandomUser = this.addRandomUser.bind(this)
    this.toggleSelected = this.toggleSelected.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.removeUser = this.removeUser.bind(this);

    this.state = {
      users: {},
      selected: ``
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

  toggleSelected(key) {
    this.setState({selected: key});
  }

  addRandomUser(){
    const users = {...this.state.users};
    const user = getRandomUser();
    const timestamp = Date.now();

    let newUsers = {};
    newUsers[`user-${timestamp}`] = user;
    newUsers = {...newUsers, ...users};

    this.setState({ users: newUsers});
  }

  updateUser(key, updatedUser) {
    const users = {...this.state.users};

    users[key] = updatedUser;

    this.setState({users});
  }

  removeUser(key) {
    const users = {...this.state.users};
    delete users[key];
    this.setState({users});
  }

  render() {
    return (
      <div className="user-app">
        <div className="users">
          <h2 className="user-header">Users</h2>
            <ul className="list-of-users">
                {
                    Object.keys(this.state.users)
                    .map(key => <User 
                                key={key} 
                                index={key} 
                                toggleSelected={this.toggleSelected} 
                                details={this.state.users[key]}
                                removeUser={this.removeUser}
                                />)
                }
            </ul>
        </div>
        <div className="users">
          <EditUser addRandomUser={this.addRandomUser} users={this.state.users} updateUser={this.updateUser} selected={this.state.selected}/>
        </div>
      </div>
    )
  }
}

export default UserApp;

