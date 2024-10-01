import React from "react";
import { createRoot } from "react-dom/client";
import nikelogo from './Images/image.png'
import './Styles/Nav.css'
const Nav=()=>{
return (
    <nav>
        <img className="nikelogo" src={nikelogo} alt="" />
        <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Login</button>
    </nav>
)
}
export default Nav;