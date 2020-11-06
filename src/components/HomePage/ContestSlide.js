import React from 'react'

const ContestSlide = () => {
  return (
    <div className="contest-slide container-fluid">
      <div className="contest-box-container">
        <div className="contest-title">Code For YMCA</div>
        <span className="contest-subtitle">Week 12</span>
        <div className="contest-timing">
          Starts At: 11 Dec 1 PM<br />
          Ends At: 11 Dec 3 PM
      </div>
        <button className="register-button" onClick={() => { window.location.href = 'https://www.google.com' }}>Register</button>
      </div>
    </div>
  );
}

export default ContestSlide;