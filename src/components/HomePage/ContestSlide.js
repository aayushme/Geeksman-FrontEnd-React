import React from 'react'
import {Link} from 'react-router-dom'

const ContestSlide = (props) => {
  return (
    <div className="contest-slide container-fluid">
      <div className="contest-box-container">
        <div className="contest-title">{props.name}</div>
        <span className="contest-subtitle">Week 12</span>
        <div className="contest-timing">
          Starts At: {props.startdate} {props.starttime}<br />
          Ends At: {props.enddate} {props.endtime}
      </div>
      <br/>
        <Link className="register-button" to="/contests">Register</Link>
      </div>
    </div>
  );
}


export default ContestSlide;