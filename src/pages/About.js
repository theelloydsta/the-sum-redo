import React, { Component } from 'react'
import logoImg from '../images/logo.jpg';
import mainCont from '../images/chrisAndVal.jpg';
import { Link } from 'react';



class About extends Component {
    render() {
        return <div id="logo">
            <a href="index.html">
              <img src={logoImg} />
            </a>

            <a id="chrisAndVal">
              <img src={mainCont} />
            </a>

            <h1>ABOUT US</h1>

<div class="columnLeft">
								The Sum is a team of dedicated design and web professionals based in Vancouver B.C. who come from and specialize in a variety of media and interactive backgrounds. We bring our cross disciplinary experience to each project, taking advantage of emerging technologies and combining the sum (*wink*) of our abilities to deliver successful and innovative business solutions.
							</div>

<div class="columnRight">
								In this website you will find a selection of projects we have had the pleasure to work on. We are always happy to discuss potential opportunities, and if you have a project you would like to collaborate on <a href="contact.html">we would love to hear from you!</a> Thank you for visiting and we hope you enjoy your stay!
							</div>

          </div>;
       };


}

export default About;

