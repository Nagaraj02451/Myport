import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { useScramble } from "use-scramble";

// import "../styles/globals.css"
function Hero({link}) {
    // hook returns a ref
  // alert(link)
    const { ref ,  replay} = useScramble({ 
      text: "Portfolio" 
    });

  return (
    <>
      <header className="hero__headerHead" >
        <div className="Maindiv">
          <div className="maindivinner">
            <h1 >
          
            <TypeAnimation className="headhgfy"
       cursor={false}
      sequence={[
        "I'm Nagaraj R",
        1000, 
    
      ]}
      
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
    
    />
              <br />
    
            <TypeAnimation className="headhgfy jiojio"
             cursor={false}
      sequence={[
        
        "Web Developer",
        1000, 
    
      ]}
      wrapper="span"
      speed={5}
      style={{  display: 'inline-block' }}
    
    />
            </h1>
           
            <div className="rightmain">
             <a href="#onepop"><p>Projects</p></a> 
             <a href="#onecon" className="jug"><p>Contact</p></a> 
         
            </div>
          </div>

          <div className="Laststep">
            <div className="yuigyu">
              <h1 ref={ref}
              onMouseOver={replay} 
              onFocus={replay} 
              ></h1>
              <p>(ScrollDown)</p>
            </div>
            <a href="/img/NagarajResume.pdf" target="_blank" download>  <div className="lastright">
              <p className="Onei">Download CV</p>

            </div></a>
          </div>
        </div>
      </header>
      <div className="huiuu">
        <h1>NR</h1>
      </div>
      <header className="hero__header" id="headtwo">
        <div  id="maindiv">
          <div className="ytfcdvj">
           <h1 id="hgfyu" className="headhgfy"> 
            
            <TypeAnimation className="headhgfy"
       cursor={false}
      sequence={[
        "Crafting digital dreams with code and care.",
        10000, 
    
      ]}
      
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
    
    />

            </h1>
            
            <br />
            <div className="conji">
              I AM CURRENTLY PART OF THE DEVELOPING TEAM AT NTTL IN OOTY,<br /> I CONSIDER
              MYSELF PASSIONATE ABOUT TECHNOLOGY,
              <br /> WORKING AT THE INTERSECTION
              BETWEEN FRONTEND & BACKEND DEVELOPMENT.
            </div>

          
          </div>
    
         
        </div>
        <div className="phonegraphy">
             
             </div>
      </header>


    </>

  ); 
}

export default Hero;
