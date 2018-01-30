import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import UserApp from './UserApp/UserApp';
import OMDBApp from './OMDBApp/OMDBApp';


class App extends Component {
  constructor() {
    super();
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.state =  {
      currentPage : ``
    }

  }

  changeCurrentPage(page) {
    this.setState({currentPage: page})
  }

  renderPage() {
    let switchCase = this.state.currentPage;
    switch(switchCase) {
      case 'Users':
        return <UserApp />;
      case 'OMDB':
        return <OMDBApp />;
      default:
        return <About />;     
    }

  }

  render() {
    const page = this.renderPage();
    return (
      <div>
        <Header changeCurrentPage={this.changeCurrentPage}/>
        {page}
        <Footer />
      </div>
    )
  }
}

export default App;
