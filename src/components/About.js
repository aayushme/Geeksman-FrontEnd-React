import React from "react";
import './utils/utils.css'
import image from "./images/image.jpeg";
import MemberCard from "./utils/About-memberscard";
import DevCard from "./utils/Developers-card";
import Navbar from "./Navbar";
import Coordinators from "./utils/coordinators"
import Events from './utils/events'
import image1 from './images/png/komal bhatia.jpg'
import image2 from './images/png/neelam.jpeg'
import eventimage from './images/background.jpg'
const About = () => {

  return (
    <div className="aboutpage">
      <div className="about-navbar-part">
        <Navbar />
      </div>
      <div className="about__us-head">
      <h1>About Us</h1>
      <span>This is our team, a lot of smiling happy people who work hard to empower geeksman.</span>
      </div>
     
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

       <div className="events__heading">
         <h1>Our Events</h1>
       </div>
       <div className="events__content">
       <Events image={eventimage}/>
       <Events image={eventimage}/>
       <Events image={eventimage}/>
       <Events image={eventimage}/>
       </div>
       <div className="faculty__coordinators">
         <h1>Faculty Co-ordinators</h1>
       </div>
       <div className="faculty__content">
        <Coordinators image={image2} name="Dr.Neelam Duhan" post="Club Coordinator"/>
        <Coordinators image={image1} name="Dr.Komal Bhatia" post="Chairman of CE dept."/>
        
       </div>
       <div className="our__members">
         <h1>Our Members</h1>
       </div>
       <div className="our__members-content">
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
        <MemberCard image={image} name="Aayush Tyagi" post="Junior Secretary"/>
       </div>
       <div className="developers">
         <h1>Developers</h1>
       </div>
       <div className="developer__content">
          <DevCard name="Aayush Tyagi" stack="Fullstack Developer" image={image}/>
          <DevCard name="Parag Thakur" stack="Fullstack Developer" image={image}/>
          <DevCard name="Shubham Bansal" stack="Backend Developer" image={image}/>
       </div>
    </div>
  );
};

export default About;
