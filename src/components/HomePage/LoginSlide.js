import React,{Component, useState} from 'react'
import LoginModal from "../utils/modals/modal"
function LoginSlide()  {

   const[show,setShow] = useState(false);
   const OpenModal = () =>{
       console.log("hello");
       setShow(true);
   }
 
    return (
        <>
        <div className="login-slide container-fluid"> 
            <div className="login-slide-text-content"><h1>Geeksman - The Coding Society</h1><br/>
                Join the <strong>Competitive Coding Society</strong> of JCBOSE UST <br />
                Practice coding, prepare for contests, and win challenges.
            </div>
            <LoginModal show={show}/>
            <div className="login-buttons">
                <button className="login-button" onClick={() => OpenModal()}>Login</button>
                <button className="login-button" onClick={() => window.location.href = 'https://www.google.com'}>Sign Up</button>
            </div>
        </div>
        </>
    );
}


export default LoginSlide;