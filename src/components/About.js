import React from "react";
import image from "./images/image.jpeg";
import MemberCard from "./utils/About-memberscard";
import DevCard from "./utils/Developers-card";
import Navbar from "./Navbar";
import Coordinators from "./utils/coordinators"
import Events from './utils/events'
const About = () => {
  const [activesection, setactivsection] = React.useState("geeksmanfamily");
  return (
    <div className="aboutpage">
      <div className="about-navbar-part">
        <Navbar />
      </div>
      <h1 className="about-heading">About Us</h1>
      <div className="video-text-part">
        <div className="videoarea">
          <iframe
            src="https://www.youtube.com/embed/Ywq6FMLbWH4?list=RDYwq6FMLbWH4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="textpart">
          <p>
            Well, our name tells all about us, we are the geeks, who love to
            code!!. Infact,we bleed code! Sounds geeky ? Welcome to Geeksman,
            official coding club of JCBUST, Faridabad. Geeksman is all about
            nourishing your coding skills and is highly biased towards promoting
            coding culture in the campus. Previously it was a part of Codechef
            campus chapter later on it has been approved as an official coding
            club of YMCA. Coding Contests, Hackathons are the primary siblings
            of Geeksman.
          </p>
        </div>
      </div>
      {/* <div className="about__content-heading">
          <div className="geeksman-family">
           <Button id="btndesign" className="btn-secondary" onClick={()=>{setactivsection('geeksmanfamily')}}>Geeksman Family</Button>
          </div>
          <div className="developer-section">
            <Button id="btndesign" onClick={()=>{setactivsection('developersection')}}>Developers</Button>
          </div>
        </div> */}
        <div className="jumbotron">

          <Events/>

      <h1 className="about-heading">Our Events</h1>

      <div className="projects-section">
        <div className="row">
          <div className="col-sm-6">
            <DevCard
              image={image}
              name="Aayush Tyagi"
              stack="FULL STACK DEVELOPER"
            />{" "}
          </div>
          <div className="col-sm-6">
            <DevCard
              image={image}
              name="Aayush Tyagi"
              stack="FULL STACK DEVELOPER"
            />{" "}
          </div>
          <div className="col-sm-6">
            <DevCard
              image={image}
              name="Aayush Tyagi"
              stack="FULL STACK DEVELOPER"
            />{" "}
          </div>
          <div className="col-sm-6">
            <DevCard
              image={image}
              name="Aayush Tyagi"
              stack="FULL STACK DEVELOPER"
            />{" "}
          </div>
        </div>
      </div>

      <h1 className="about-heading">Faculty Coordinators</h1>
      <Coordinators/>
      
      <h1 className="about-heading">Our Members</h1>
      <div className="about__content-section">
        <div className="geeksmanfamily-section">
          <MemberCard
            name="Aayush Tyagi"
            post="Junior Secretary"
            image={image}
            batch="3rd Year ECE"
          />
          <MemberCard
            name="Aayush Tyagi"
            post="Junior Secretary"
            image={image}
            batch="3rd Year ECE"
          />
          <MemberCard
            name="Aayush Tyagi"
            post="Junior Secretary"
            image={image}
            batch="3rd Year ECE"
          />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default About;
