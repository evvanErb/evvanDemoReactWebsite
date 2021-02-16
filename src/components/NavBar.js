import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const NavBar = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="NavBar" >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded" >
          <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
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
        </nav>
    </div>
  );
}

export default NavBar;
