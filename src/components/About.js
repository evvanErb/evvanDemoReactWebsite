import React, {Component} from 'react';

class About extends Component {
    render() {
      return (
        <div className="About d-flex p-3 mx-auto flex-column text-center text-white bg-dark" id="about" style={{ height: "auto", minHeight: "650px", position: "relative" }} >
            <main className="px-3">
              <h1 style={{ fontSize: "50px" }}>About</h1>
              <p className="lead" style={{ paddingLeft: "20%", paddingRight: "20%" }} >
              <br /><br />
              I began teaching my self how to program in 9th grade and have since worked on both solo and group projects across multiple platforms. I'm currently a Junior at UMD College Park class of winter 2021 majoring in Computer Science and minoring in Business (Innovation / Entrepreneurship).
              <br /><br />
              I have experience in many different kinds of programming languages including Python, Java, JavaScript, C, OCaml, and more. I can pick up new languages easily whether they are dynamic or static, imperative or declarative.
              <br /><br />
              I have experience working in Agile environments including experience with daily standups and scrum via tools such as JIRA and Confluence. I have worked on CI/CD and edited Jenkins pipelines that help developers test and run code.
              <br /><br />
              I have worked with many different software tools ranging from standard everyday tools like Microsoft Office and Google Suite to development tools such as Unity for game development, Django and React for web development, Git for source control, Kali for pentesting, and more.
              </p>
            </main>
        </div>
      );
    }
}

export default About;
