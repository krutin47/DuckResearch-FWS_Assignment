/**
 * @file Dynamic Navbar component.
 * @author Krutin Trivedi
 */

//importing Components & required Modules
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavHeader extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark headerMain justify-content-between fixed-top px-5">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active px-2">
                            <a class="nav-item nav-link" href="#">DuckSurveys</a>
                        </li>
                        <li className="nav-item active px-2">
                            <Link className="nav-link" to="/">NEW SURVEY</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavHeader;