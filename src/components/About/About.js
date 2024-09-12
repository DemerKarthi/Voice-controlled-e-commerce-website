import React, { useState } from "react";

const About = () => {
  var [data , setData] = useState("src/api/test/load/run/assest/img/value.jpg")
  return (
    <>
    <div className="container">
      <h1 className="display-2 text-center my-3">About Creator</h1>
      <div className="row mt-5">
        <div className="col-md-5">
          <img
            src="https://i.imgur.com/OEHxzwj.jpeg"
            alt=""
            className="border"
            width="100%"
          />
        </div>
        <div className="col-md-7 py-0 px-4">
          <h1 className="display-2 py-0">P Dhanakarthikeyan </h1>
          <p className="lead">Final Year CSE</p>
          <p className="lead">Solamalai College of Engineering</p>
          <p className="lead"><ul>Developed using
            <li>Html</li>
            <li>Css</li>
            <li>Reactjs</li>
            <li>JS</li>
            <li>Speech kit</li>
            </ul></p>


    
        </div>
      </div>
     
    </div>
    <footer>
        <div className="footer ">
          <p> Developed by Dhanakarthikeyan. &copy; 2024 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default About;
