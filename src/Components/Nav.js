import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row text-center menu-wrapper">
                        <ul className="main-menu">
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/news">News</NavLink>
                            </li>
                            <li>
                                <NavLink to="/news-detail">News Details</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Nav;