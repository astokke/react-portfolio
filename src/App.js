import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {getRandomUser} from './helpers';
import UserApp from './UserApp/UserApp';

class App extends Component {
  constructor() {
    super();
    state: {
      users: {}
    }
  }

  addRandomUser(){

  }

  render() {
    return (
      <div>
        <Header />
        <UserApp />
        <Footer />
      </div>
    )
  }
}

export default App;
