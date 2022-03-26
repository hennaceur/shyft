import React from "react";
import "./ReadMe.css"

function ReadMePage() {
  return (
    <div className= "background">
      {/* PROJECT LOGO */}
      <br />
      <br />
      <h1 className="text-big">
        ReadMe
      </h1>
      <br/>
      <p className="text-small">
        NearMe is a web application that allows users to post pin point <br/>
        adverts on an interactive map user interface in 
         three different categories: <br/> <br/>
         pick-up sport games, real estate/open-houses, and garage sales. <br /><br/> <a href="https://github.com/meedox9/NearMe"><strong>View Github Repository »</strong></a> <br />
      </p>
      <p/>
      <br/>
      <br/>
      <p align = "left">
        <div className = "text-padding">
      

          {/* GETTING STARTED */}
          <br/>
          <br/>
          <h2 id="getting-started">Getting Started</h2>
          <p>To get a local copy up and running follow these steps to ensure installation of required prerequisites.</p>
          <br/>
          <h3 id="prerequisites">Prerequisites</h3>
          <p>This is an example of how to list things you need to use the software and how to install them. 1. <strong>Node.js</strong> 
          <li> Install Node.js through their <a href="https://nodejs.org/en/download/">website</a>.</li>  
          <li> Navigate to the LTS tab and choose the installer depending on the operating system. </li>
          <li> Verify downloading the proper installer depending on the CPU architecture (32-bit/64-bit and ARMv7/ARMv8). </li>
          <br /></p>

          
          <strong>Supported Browsers</strong> <br />

          <li>These are the following browsers supported: Chrome, Firefox, Safari, Edge, IE, Opera, <br /></li>


          <br/>
          <strong>Running the Project</strong>

          <li>Open a terminal inside the current directory <br /> </li>
          <li>Run this command to download all the required NPM packages <code>sh    npm install</code> <br /></li>
          <li>Run this command to run the code in debugging mode in a browser. <code>sh    npm start</code></li>

          <br/>
          {/* CONTACT */}
          <h2 id="contributers">Contributers</h2>
          <p>Mohamed Adem - 201854981 <br /> Hazem Ennaceur - 201838810 <br /> Hirthik Bhojwani - 201821899 <br /></p>
          <br/>
          <br/>
        </div>
      </p>
    </div>
  );
}

export default ReadMePage;
