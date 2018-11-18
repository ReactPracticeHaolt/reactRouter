import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './../CSS/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';
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
