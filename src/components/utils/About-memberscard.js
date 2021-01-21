import React from 'react'
import image from '../images/image.jpeg'
import {Link} from 'react-router-dom'
function Aboutprofilecard(props) {
    return (
      <div class="card" >
      <div class="banner" >
        <img src={props.image}/>
      </div>
      <div class="menu">
        
      </div>
      <h2 class="name">{props.name}</h2>
      <div class="title">{props.post}</div>
      <div className="branch"><span><b>Branch</b>:-3rd Year CE</span></div>
      <div className="sociallinks">
      <span><b>Social</b>:-&nbsp;&nbsp;</span>
      <Link href="#" className="github"><i class="fab fa-github" aria-hidden="true"></i></Link>
      <Link href="#" className="insta"><i className="fab fa-instagram"></i></Link>
      <Link href="#" className="linkedin"><i class="fab fa-linkedin"></i></Link>
      </div>
      <div class="actions">
         
      </div>
     
  </div>    
    
    
    )
}

export default Aboutprofilecard
