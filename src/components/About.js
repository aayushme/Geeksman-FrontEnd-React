import React from 'react';
import image from './images/image.jpeg'
const About = () => {
    return (
        <div className="about">About Section
        
        <div>
        <div class="container">
      <div class="card">
        <div class="imgBx">
        <img src={image}/>
        </div>
        <div class="content">
          <div class="contentBx">
            <h3>John <br /><span>Web Developer</span></h3>
          </div>
          <ul class="sci">
            <li >
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
            <li >
              <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li >
              <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
        </div>
        </div>
    );
}

export default About;