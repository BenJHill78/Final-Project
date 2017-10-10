import React from "react";
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";


const Nav = () => 

  
 <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/HomeOwner" ? "active" : ""}>
      <Link to="/HomeOwner">Home Owner Login</Link>
    </li>
    <li className={window.location.pathname === "/HOAManager" ? "active" : ""}>
      <Link to="/HOAManager">HOA Manager Login</Link>
    </li>
    
  </ul>;


export default Nav;
