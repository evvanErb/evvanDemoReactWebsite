import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

class NavBar extends Component {
    render() {
      return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav mx-auto">
                        <HashLink className="navbar-brand" to="/#app">
                            Evvan Erb's Site
                        </HashLink>
                        <HashLink className="nav-link" to="/#about">
                            About
                        </HashLink>
                        <HashLink className="nav-link" to="/#skills">
                            Skills
                        </HashLink>
                        <HashLink className="nav-link" to="/#experience">
                            Experience
                        </HashLink>
                        <Link className="nav-link" to="/calculator">
                            Calculator
                        </Link>
                      </div>
                    </div>
                </div>
            </nav>
        </div>
      );
    }
}

export default NavBar;
