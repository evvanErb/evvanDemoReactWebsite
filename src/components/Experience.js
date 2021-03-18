import React, {Component} from 'react';

class Experience extends Component {
    render() {
      return (
        <div className="Experience d-flex p-3 mx-auto flex-column text-center text-white bg-dark" id="experience" style={{ height: "auto", minHeight: "1030px", position: "relative", marginBottom: "50px" }} >
            <hr size="10" style={{ backgroundColor:"DodgerBlue"}} />
            <main className="px-3">
              <h1 style={{ fontSize: "50px" }}>Experience</h1>
              <span className="lead" style={{ fontSize: "25px" }} >
                  <br /><br />
                  <h3>University of Massachusetts, Lowell</h3><i>Master of Business Administration</i>. Jan 2022 - Current. GPA : N/A<br /> <br />
                  <h3>University of Maryland, College Park</h3><i>B.S. Computer Science, Business (Entrepreneurship/Innovation) Minor</i>. Aug 2018 - Dec 2021. GPA : 3.42<br /> <br />
                  <h3>Populus Media, New York, NY</h3><i>Software Development Associate</i>. Jan 2021 - Current<br /> <br />
                  <h3>Vertex Inc., King of Prussia, PA</h3><i>Software Development Intern</i>. Jun 2020 - Aug 2020, Jun 2021 - Aug 2021<br /> <br />
                  <h3>Germantown Academy, Fort Washington, PA</h3><i>IT Specialist</i>. Jun 2017 - Aug 2018<br /> <br />
                  <h3>Keystone Homebrew Supply, Montgomeryville, PA</h3><i>Associate</i>. Apr 2018 - Jun 2018<br /> <br />
                  <h3>Parley, Horsham, PA</h3><i>Founder</i>. Jun 2017 - Jun 2018
              </span>
            </main>
        </div>
      );
    }
}

export default Experience;
