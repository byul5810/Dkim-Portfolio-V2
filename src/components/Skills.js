import React, { Component } from 'react';
import image from '../assets/bg.jpeg'
import '../style/skills.scss';

class CircularProgressBar extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      const sqSize = this.props.sqSize;
      const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
      const viewBox = `0 0 ${sqSize} ${sqSize}`;
      const dashArray = radius * Math.PI * 2;
      const dashOffset = dashArray - dashArray * this.props.percentage / 100;

      return (
        <svg
            width={this.props.sqSize}
            height={this.props.sqSize}
            viewBox={viewBox}>
            <circle
              className="circle-background"
              cx={this.props.sqSize / 2}
              cy={this.props.sqSize / 2}
              r={radius}
              strokeWidth={`${this.props.strokeWidth}px`} />
            <circle
              className="circle-progress"
              cx={this.props.sqSize / 2}
              cy={this.props.sqSize / 2}
              r={radius}
              strokeWidth={`${this.props.strokeWidth}px`}
              // Start progress marker at 12 O'Clock
              transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
              animate={{ duration: 1000 }}
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset
              }} />
            <text
              className="circle-text"
              x="50%"
              y="50%"
              dy=".3em"
              fill="white"
              textAnchor="middle">
              {`${this.props.percentage}%`}
            </text>
        </svg>
      );
    }
  }

  CircularProgressBar.defaultProps = {
    sqSize: 200,
    percentage: 25,
    strokeWidth: 10
  };

class Skills extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        displayBio: 'front',
    };

    something = param => e => {
      this.setState({ displayBio: param });
    }
    render() {
    return (
    <section className="skills" id="skills">
        <div className="container">
            <div className={this.state.displayBio}>
              <div className="skill-header w-100">
                <h2>SKILLS</h2>
                <button className={this.state.displayBio === 'front' ? 'btn btn-primary  active' : 'btn btn-primary'} onClick={this.something('front')}>Front-End</button>
                <button className={this.state.displayBio === 'back' ? 'btn btn-primary  active' : 'btn btn-primary'} onClick={this.something('back')}>Back-End</button>
              </div>
            </div>
              {(() => {
                if (this.state.displayBio == 'front') {
                  return (
                    <div className="row">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div className="skill-content web col-md-3 col-sm-6">
                        <div>
                            <CircularProgressBar
                            strokeWidth="5"
                            sqSize="100"
                            percentage="95"/>
                        </div>
                        <div className="skill-language">
                          HTML
                        </div>
                      </div>
                      <div className="skill-content web col-md-3 col-sm-6">
                          <div>
                              <CircularProgressBar
                              strokeWidth="5"
                              sqSize="100"
                              percentage="95"/>
                          </div>
                          <div className="skill-language">
                            CSS
                        </div>
                      </div>
                      <div className="skill-content web col-md-3 col-sm-6">
                          <div>
                              <CircularProgressBar
                              strokeWidth="5"
                              sqSize="100"
                              percentage="95"/>
                          </div>
                          <div className="skill-language">
                            JAVACRIPT
                          </div>
                      </div>
                      <div className="skill-content web col-md-3 col-sm-6">
                          <div>
                              <CircularProgressBar
                              strokeWidth="5"
                              sqSize="100"
                              percentage="95"/>
                          </div>
                          <div className="skill-language">
                            BOOTSTRAP
                          </div>
                      </div>
                      <div className="skill-content web col-md-3 col-sm-6">
                          <div>
                              <CircularProgressBar
                              strokeWidth="5"
                              sqSize="100"
                              percentage="80"/>
                          </div>
                          <div className="skill-language">
                            VUE
                          </div>
                      </div>
                      <div className="skill-content web col-md-3 col-sm-6">
                          <div>
                              <CircularProgressBar
                              strokeWidth="5"
                              sqSize="100"
                              percentage="75"/>
                          </div>
                          <div className="skill-language">
                            REACT
                          </div>
                      </div>
                    </div>
                  )
                } else if (this.state.displayBio == 'back') {
                  return (
                    <div className="row">
                      <div className="skill-content back col-md-3 col-sm-6">
                        <div>
                            <CircularProgressBar
                            strokeWidth="5"
                            sqSize="100"
                            percentage="90"/>
                        </div>
                        <div className="skill-language">
                          PYTHON
                        </div>
                      </div>
                      <div className="skill-content back col-md-3 col-sm-6">
                          <div>
                              <CircularProgressBar
                              strokeWidth="5"
                              sqSize="100"
                              percentage="85"/>
                          </div>
                          <div className="skill-language">
                            DAJNGO
                          </div>
                      </div>
                      <div className="skill-content back col-md-3 col-sm-6">
                          <div>
                              <CircularProgressBar
                              strokeWidth="5"
                              sqSize="100"
                              percentage="85"/>
                          </div>
                          <div className="skill-language">
                            JAVA
                          </div>
                      </div>
                      <div className="skill-content back col-md-3 col-sm-6">
                          <div>
                              <CircularProgressBar
                              strokeWidth="5"
                              sqSize="100"
                              percentage="85"/>
                          </div>
                          <div className="skill-language">
                            ANDROID
                          </div>
                      </div>
                      <div className="skill-content back col-md-3 col-sm-6">
                          <div>
                              <CircularProgressBar
                              strokeWidth="5"
                              sqSize="100"
                              percentage="85"/>
                          </div>
                          <div className="skill-language">
                            C++
                          </div>
                      </div>
                      <div className="skill-content back col-md-3 col-sm-6">
                          <div>
                              <CircularProgressBar
                              strokeWidth="5"
                              sqSize="100"
                              percentage="85"/>
                          </div>
                          <div className="skill-language">
                            SQL
                          </div>
                      </div>
                    </div>
                  )
                }
              })()}
        </div>
    </section>
    );
    }
}

export default Skills;
