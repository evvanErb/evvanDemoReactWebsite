import React, {Component} from 'react';

class Footer extends Component {
  render() {
      return (
        <div className="Footer" style={{ bottom: "0", position: "fixed", width: "100%" }}>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#363636" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <p className="mr-auto" style={{ display: "inline-block", margin: "15px", fontSize: "20px", color: "grey" }}>Evvan Erb &#169; 2021</p>
                      <div className="navbar-nav mx-auto">
                        <a className="nav-link" href="https://github.com/evvanErb" target="_blank" rel="noopener noreferrer" style={{ fontSize: "24px" }} >
                            <img src={process.env.PUBLIC_URL + "/GithubIcon.png"} alt="GitHub Icon" width="30" height="30" style={{ display: "inline-block", margin: "10px" }}/>
                            GitHub
                        </a>
                        <a className="nav-link" href="https://www.linkedin.com/in/evvanerb/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "24px" }} >
                            <img src={process.env.PUBLIC_URL + "/linkedinIcon.png"} alt="LinkedIn Icon" width="30" height="30" style={{ display: "inline-block", margin: "10px" }}/>
                            LinkedIn
                        </a>
                        <a className="nav-link" href="mailto:evvan@protonmail.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", margin: "5px", fontSize: "24px" }} >
                            evvan@protonmail.com
                        </a>
                      </div>
                      <p className="mr-auto" style={{ display: "inline-block", margin: "15px", fontSize: "20px", color: "grey" }}>Built with React JS</p>
                    </div>
                </div>
            </nav>
        </div>
      );
  }
}

export default Footer;
