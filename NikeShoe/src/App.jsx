import React from "react";
import { createRoot } from "react-dom/client";
import Nav from './Nav.jsx'
import Content from "./Content.jsx";
const App=()=>{
  return (
    <div>
       <Nav/>
    <Content/>
    </div>
   
  )
}
export default App;