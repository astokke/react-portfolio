import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-wrapper">

        <div className="about">
          <span className="title">
            <span><p className="greet"> Hi! </p>
              <p>This site is made to showcase some of my potential as an aspiring full-stack web developer.  </p> 
            </span>
            <img className="portrait" alt="me" src="https://i.imgur.com/woBUnYu.png" />
          </span>
          <p className="second">
            It is powered by ReactJS; coding and design is done by me.
          </p>
          <p className="third">
            Big thanks to <a href="https://twitter.com/wesbos">@wesbos</a> for his JS challenges and courses.
          </p>

          <p className="last">
            All the best, <br />
            André
          </p>


        </div>
          
      </div>
    )
  }
}

export default About;

