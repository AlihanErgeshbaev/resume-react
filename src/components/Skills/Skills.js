import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong>#PROFESSIONAL SKILLS</strong>
            </h6>
            <hr />
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">HTML</p>
                <div className="progress white">
                  <div
                    className="determinate grey"
                    style={{ width: "89%" }}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">CSS</p>
                <div className="progress white">
                  <div
                    className="determinate grey"
                    style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">PHP</p>
                <div className="progress white">
                  <div
                    className="determinate grey"
                    style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">REACT</p>
                <div className="progress white">
                  <div
                    className="determinate grey"
                    style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">MySQL</p>
                <div className="progress white">
                  <div
                    className="determinate grey"
                    style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">JScript</p>
                <div className="progress white">
                  <div
                    className="determinate grey"
                    style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
