import React,{useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Geeksman from './images/png/geeksman.png'



const Navbar = () => {
    const[login,setlogin]=useState(false);

    return (
        
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <Link className="navbar-logo navbar-brand" to="/">
                    <img alt="svgImg" width="48px" src={Geeksman} />
                    GeeksCode
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" >
                            <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link" to="/contests">Contests</NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link  " to="/about">About</NavLink>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;