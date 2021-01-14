import React from 'react';
import image from './images/image.jpeg'
import Button from 'react-bootstrap/Button'
import MemberCard from './utils/About-memberscard'
import DevCard from './utils/Developers-card'
const About = () => {
    const [activesection,setactivsection]=React.useState('geeksmanfamily')
    return (
        <div className="aboutpage">
        
        <div className="about__header">
           <h1>About Us</h1>
      <p className="heading-quote">This is our geeksman family, a lot of smiling happy people who work hard to empower geeksman.</p>
       
        </div>
        <div className="about__content-heading">
          <div className="geeksman-family">
           <Button id="btndesign" className="btn-secondary" onClick={()=>{setactivsection('geeksmanfamily')}}>Geeksman Family</Button>
          </div>
          <div className="developer-section">
            <Button id="btndesign" onClick={()=>{setactivsection('developersection')}}>Developers</Button>
          </div>
        </div>
        <div className="about__content-section">
          {activesection==='geeksmanfamily'&&(
            <div className="geeksmanfamily-section">
              <MemberCard name="Aayush Tyagi" post="Junior Secretary" image={image} batch="3rd Year ECE"/>
              <MemberCard name="Aayush Tyagi" post="Junior Secretary" image={image} batch="3rd Year ECE"/>
              <MemberCard name="Aayush Tyagi" post="Junior Secretary" image={image} batch="3rd Year ECE"/>
              <MemberCard name="Aayush Tyagi" post="Junior Secretary" image={image} batch="3rd Year ECE"/>
              <MemberCard name="Aayush Tyagi" post="Junior Secretary" image={image} batch="3rd Year ECE"/>
              <MemberCard name="Aayush Tyagi" post="Junior Secretary" image={image} batch="3rd Year ECE"/>
              <MemberCard name="Aayush Tyagi" post="Junior Secretary" image={image} batch="3rd Year ECE"/>
              <MemberCard name="Aayush Tyagi" post="Junior Secretary" image={image} batch="3rd Year ECE"/>
            </div>
          )}
         {
           activesection==='developersection'&&(
<div className="developercard-section">
          <DevCard image={image} name="Aayush Tyagi" stack="FULL STACK DEVELOPER"/>  
          <DevCard image={image} name="Parag Thakur" stack="FULL STACK DEVELOPER"/>
          <DevCard image={image} name="Shubham Bansal" stack="BACKEND DEVELOPER"/>
          </div>
           )
         } 
           
        </div>
        </div>
    );
}

export default About;