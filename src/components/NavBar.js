import React from "react";
import { Link, withRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function NavBar() {
  return (
    <div className="NavBar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav mx-auto">
                    <Link class="navbar-brand" to="/">
                        Evvan's Demo React Site
                    </Link>
                    <HashLink class="nav-link" to="/#about">
                        About
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

export default NavBar;
