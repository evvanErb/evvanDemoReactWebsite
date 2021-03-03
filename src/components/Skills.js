import React, {Component} from 'react';

class Skills extends Component {
    render() {
      return (
        <div className="Skills d-flex p-3 mx-auto flex-column text-center text-white bg-dark" id="skills" style={{ height: "auto", minHeight: "600px", position: "relative" }} >
            <hr size="10" style={{ backgroundColor:"DodgerBlue"}} />
            <main className="px-3">
              <h1 style={{ fontSize: "50px" }}>Skills</h1>
              <span className="lead">
                  <br /><br /><br /><br />
                  <div className="row justify-content-center">
                      <div className="col-md-3 mb-4" >
                        <p style={{ fontSize: "30px" }} >Git, GitHub, Django, Unity, React, Chrome Extensions, Atom, VS Code, Emacs, Linux, Windows</p>
                      </div>
                      <div className="col-md-3 mb-4" >
                        <p style={{ fontSize: "30px" }} >Python, Java, TypeScript, JavaScript, HTML, OCaml, C, Groovy, C++, C#, CI/CD, Jenkins, JIRA, Confluence, Agile, MySQL</p>
                      </div>
                      <div className="col-md-3 mb-4" >
                        <p style={{ fontSize: "30px" }} >Microsoft Office Suite, Google Suite, Kali Linux / Pentesting, Brewing, French</p>
                      </div>
                  </div>
              </span>
            </main>
        </div>
      );
    }
}

export default Skills;
