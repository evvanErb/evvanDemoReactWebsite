import React, {Component} from 'react';

class About extends Component {
    render() {
      return (
        <div className="About" class="d-flex p-3 mx-auto flex-column text-center text-white bg-dark" id="about" style={{ height: "700px" }} >
            <main class="px-3">
              <h1 style={{ fontSize: "50px" }}>About</h1>
              <p class="lead">
              <br /><br /><br /><br />
              Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.
              </p>
            </main>
        </div>
      );
    }
}

export default About;
