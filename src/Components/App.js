import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './../CSS/App.css';
import Nav from './Nav';
import Footer from './Footer';
import NavURL from '../router/NavURL';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          {/*<Home/>*/}
          {/*<News/>*/}
          {/*<NewsDetail/>*/}
          {/*<Contact/>*/}
          <NavURL/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
