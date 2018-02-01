import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import Header from './Header';
import Footer from './Footer';
import About from './About';
import NotFound from './NotFound';
import UserApp from './UserApp/UserApp';
import OMDBApp from './OMDBApp/OMDBApp';


class App extends Component {
  constructor() {
    super();
    this.state =  {
      currentPage : ``
    }

  }
 

  render() {
    return (
      <div>
      <Router>
        <div>
        <Header/>
            <Switch>
              <Route exact  path="/"       component={About}/> 
              <Route        path="/about"  component={About}/> 
              <Route        path="/users"  component={UserApp}/>
              <Route        path="/omdb"   component={OMDBApp}/>
              <Route        path="/"       component={NotFound}/>
            </Switch>
        </div>
      </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
