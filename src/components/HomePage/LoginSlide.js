import React from 'react'
import Logo from '../images/gif/234.gif';
const LoginSlide = () => {
    return (
        <div className="login-slide container-fluid">   
           <div className="mainLogo">
           	<img src={Logo} alt="logo" / >
           </div>
            <div className="login-slide-text-content">
                Join the <strong>Competitive Coding Community</strong> <br />
                Practice coding, prepare for contests, and win challenges.
            </div>
            <div className="login-buttons">
                <button className="login-button" onClick={() => window.location.href = 'https://www.google.com'}>Login</button>
                <button className="login-button" onClick={() => window.location.href = 'https://www.google.com'}>Sign Up</button>
            </div>
        </div>
    );
}

export default LoginSlide;