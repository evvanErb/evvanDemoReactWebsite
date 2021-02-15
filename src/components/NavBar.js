import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

class NavBar extends Component {
    render() {
      return (
        <div className="NavBar">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav mx-auto">
                        <HashLink class="navbar-brand" to="/#app">
                            Evvan Erb's Site
                        </HashLink>
                        <HashLink class="nav-link" to="/#about">
                            About
                        </HashLink>
                        <HashLink class="nav-link" to="/#skills">
                            Skills
                        </HashLink>
                        <HashLink class="nav-link" to="/#experience">
                            Experience
                        </HashLink>
                        <Link class="nav-link" to="/calculator">
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
