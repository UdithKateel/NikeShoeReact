import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav"; // Your navigation component
import Content from "./Content"; // The home component or page content
import Contact from "./Contact"; // Contact component
import Location from "./Location"
import About from "./About"
function App() {
  return (
    <Router>
      <Nav /> {/* Navigation bar */}
      <Routes>
        <Route path="/" element={<Content />} /> 
        <Route path="/Contact" element={<Contact />} /> 
      <Route path="/Location" element={<Location/>} />
      <Route path="/About" element={<About/>} />

      </Routes>
    </Router>
  );
}

export default App;
