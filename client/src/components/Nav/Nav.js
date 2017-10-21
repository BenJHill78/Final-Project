import React from "react";
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";


const Nav = (props) => 
  <nav className="navbar navbar-inverse navbar-top">

    <div className="navbar-left">

              <a href="/" className="navbar-brand">
                Hill Property Systems
              </a>
    </div>
    {props.userInfo ?
      <ul className="nav navbar-nav navbar-right">
        <li><div className="navbar-text">Welcome {props.userInfo}</div></li>
        <li><a className="btn btn-primary" href="/logout">Logout</a></li>
      </ul>
      :
      <ul className="nav navbar-nav navbar-right">
        <li><a className="btn btn-primary" href="/login">Login</a></li>
        <li><a className="btn btn-primary" href="/register">Register</a></li>
      </ul>

    }

  </nav>;

export default Nav;
 