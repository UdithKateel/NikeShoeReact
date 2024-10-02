import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import nikelogo from './Images/image.png'; // Your image
import './Styles/Nav.css'; // Your CSS styles

const Nav = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle navigation
  const goto = (comp) => {
    navigate(comp); // Navigate to the specified path
  };

  return (
    <nav>
      <img className="nikelogo" src={nikelogo} alt="Nike Logo" />
      <ul>
        <li onClick={() => goto('/')}>Home</li> {/* Navigate to Home */}
        <li onClick={() => goto('/Location')}>Location</li> {/* Placeholder for location */}
        <li onClick={() => goto('/Contact')}>Contact</li> {/* Navigate to Contact */}
        <li onClick={() => goto('/About')}>About</li> {/* Placeholder for About */}
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Nav;
