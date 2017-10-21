 import React from 'react';
 import Header from "./Header";
 import Nav from "../components/Nav";
 import About from "./About";
 import Footer from "../components/Footer";
 import H from "../css/H.css";

const Home = () => (

    <div>
    <div className="nav">    
        <Nav />
    </div>
    <div className="header">    
        <Header />
    </div>     
    <div className="background">
        <background />
    </div>
    <div className="about">
        <About />
        </div>
    </div>

)

export default Home; 