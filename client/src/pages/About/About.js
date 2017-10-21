import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import H from "../css/H.css";
import {Link} from "react-router-dom";
require('babel-register');


const About = () => (

    <div>
    
    <h3>

    Welcome To Hill Property Systems, where our goal is to make managing your home easier.
    
    </h3>
    <h3>

    We strive to bring HOA Managers and HOA Members together.  By using tools that allow for digital form submision as well as allowing notifications and requests to be sent directly to the HOA manger communication has never been better.
    
    </h3>
    <h3>
    
    We strive to make your daily lives as smooth as possible.  Now with the click  of a button you can view anything needed to keep up to date with your community.
    
    </h3>

    <Link to="./Manager/HOAManager"><p>HOA Manager Login</p></Link>
    <Link to="./Owner/HomeOwner"><p>Home Owner Login</p></Link>
    
    
    </div>
)

export default About;