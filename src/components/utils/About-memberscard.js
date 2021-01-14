import React from 'react'
import image from '../images/image.jpeg'
import {Link} from 'react-router-dom'
function Aboutprofilecard({name,post,batch}) {
    return (
        <div className="member-card">
            <div class="wrapper">
    <div class="img-area">
      <div class="inner-area">
        <img src={image} alt=""/>
      </div>
    </div>
    <div class="name">{name}</div>
    <div class="about aboutpost">{post}</div>
    <div class="batch">Batch:-{batch}</div>
    <div class="social-icons">
      <Link href="#" className="fb"><i class="fab fa-facebook-f"></i></Link>
      <Link href="#" className="twitter"><i class="fab fa-twitter"></i></Link>
      <Link href="#" className="insta"><i class="fab fa-instagram"></i></Link>
      <Link href="#" className="linkedin"><i class="fab fa-linkedin"></i></Link>
    </div>
  </div>
        </div>
    )
}

export default Aboutprofilecard
