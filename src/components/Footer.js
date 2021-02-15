import React, {Component} from 'react';

class Footer extends Component {
  render() {
      return (
        <div className="Footer">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav mx-auto">
                        <a class="nav-link" href="https://github.com/evvanErb" target="_blank" rel="noopener noreferrer" style={{ fontSize: "24px" }} >
                            <img src={process.env.PUBLIC_URL + "/GithubIcon.png"} alt="GitHub Icon" width="30" height="30" style={{ display: "inline-block", margin: "10px" }}/>
                            GitHub
                        </a>
                        <a class="nav-link" href="https://www.linkedin.com/in/evvanerb/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "24px" }} >
                            <img src={process.env.PUBLIC_URL + "/linkedinIcon.png"} alt="LinkedIn Icon" width="30" height="30" style={{ display: "inline-block", margin: "10px" }}/>
                            LinkedIn
                        </a>
                      </div>
                    </div>
                </div>
            </nav>
        </div>
      );
  }
}

export default Footer;
