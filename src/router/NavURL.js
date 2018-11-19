import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './../Components/Home';
import News from './../Components/News';
import Contact from './../Components/Contact';
import NewsDetail from './../Components/NewsDetail';

class NavURL extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/news/:slug.:id.html" component={NewsDetail} />
                    <Route exact path="/contact" component={Contact} />
                </div>
        );
    }
}

export default NavURL;