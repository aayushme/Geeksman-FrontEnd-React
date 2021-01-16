import React from 'react'
import {Link} from 'react-router-dom'

function Developerscard({image,name,stack}) {
    return (
        <div className="devcard">
             <div class="wrapper">
    <div class="img-area">
      <div class="inner-area">
        <img src={image} alt=""/>
      </div>
    </div>
    <div class="name">{name}</div>
    <div class="about">{stack}</div>
    <div class="social-icons">
      <Link href="#" className="fb"><i class="fab fa-facebook-f"></i></Link>
      <Link href="#" className="github"><i class="fab fa-github"></i></Link>
      <Link href="#" className="insta"><i class="fab fa-instagram"></i></Link>
      <Link href="#" className="linkedin"><i class="fab fa-linkedin"></i></Link>
    </div>
  </div>
        </div>
    )
}

export default Developerscard
