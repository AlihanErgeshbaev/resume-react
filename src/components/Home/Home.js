import React, { Component } from "react";
import Profile from "../../components/Profile/Profile";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Portfolio from "../../components/Portfolio/Portfolio";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="row sameHeight">
          <div className="col s12 m12 l4 light-blue darken-4 sameHeight_child">
            <Profile />
            <Contact />
            <Skills />
          </div>
          <div className="col s12 m12 l8 white sameHeight_child">
            <About />
            <Education />
            <Experience />
            <Portfolio />
          </div>
        </div>
      </section>
    );
  }
}
