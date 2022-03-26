import React from "react";
import "./About.css"
import Team from "./Team"

function About() {
  return (
    <div className = "background">
        <div>
            <div >
                <div >
                    <br />
                    <p className="text-big">About US</p>
    
                    <br />

                    <p className="text-small">
                        Here you will get to know the team 
                        members of our project
                    </p>
    
                    <br />
                    <Team className="team"/>
                </div>
                
            </div>
        </div>
    </div> 
    );
}

export default About;