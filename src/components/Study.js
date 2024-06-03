import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

function Study() {


  return (
 <>
    <div className="mainjji">

<div className="stuyyy">

  <Marquee >
    <h1 className="drg"><span> Education </span> Education <span> Education </span> Education <span> Education </span> Education </h1>
  </Marquee>
  <Marquee direction="right">
    <h1 className="finj drg"><span> Education </span> Education <span> Education </span> Education <span> Education </span> Education </h1>
  </Marquee>
  <Marquee  >
    <h1 className="finj drg"><span> Education </span> Education <span> Education </span> Education <span> Education </span> Education </h1>

  </Marquee>
  <h1 className="stydy">Study</h1>
  <hr />
  <div className="innerstudy" id="huijmiu">
    <div className="hgfy">
      <p className="kojokjo">Rathinam Technical Campus</p>
      <h1 className="headhgfy">ME - Biometrics and Cybersecurity</h1>
      <p className="kojokjo">2023</p>
    
    </div>
    <a href="https://rathinamtechnicalcampus.com/"><div className="img-cont">
     
     <img src="/img/r.jpg" />
      </div></a>
    <div className="hgfy">

      <h1 className="headhgfy">Anna University</h1>
      <p className="kojokjo">India</p>
    </div>
  </div>
  <hr />
  <div className="innerstudy" id="huijmiu1">
    <div className="hgfy">
      <p className="kojokjo">Shree Venkateshwara Hi-Tech Enigineering College</p>
      <h1 className="headhgfy">BE - Computer Science and Engineering</h1>
      <p className="kojokjo">2021</p>
    </div>
    <a href="https://www.svhec.com/"><div className="img-cont1">
     
     <img src="/img/sv.png" />
      </div></a>
    <div className="hgfy">

      <h1 className="headhgfy">Anna University</h1>
      <p  className="kojokjo">India</p>
    </div>
  </div>

  <hr />

</div>

</div>
 </>
  )
}

export default Study
