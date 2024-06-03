import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

import Study from "./Study";
function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <div className="mainjji">
              <div className="onei">
              <div className="hgyutkv">
              <p>✦ WAYS I CAN HELP YOU AND MORE, AND THINGS I
                  LIKE. LITTLE BY LITTLE I WILL LEARN MORE,
                  EVEN App, Threejs, 3D design....I WILL UPDATE IT.</p>
                  <h1 className="yhugf" id="yyfu">Frontend Development</h1>
                  <h1 className="yhugf" id="yyfu">Backend Development</h1>
                  <h1 className="yhugf" id="yyfu">Hoisting</h1>
                  <h1 className="yhugf" id="yyfu">Responsive Design</h1>
                  <h1 className="yhugf" id="yyfu">Responsive Layout</h1>
                  <h1 className="yhugf" id="yyfu">Responsive Layout</h1>
                  <h1 className="yhugf" id="yyfu">DBMS</h1>
                  <h1 className="yhugf" id="yyfu">DBMS</h1>
                  {/* <h1 className="yhugf" id="yyfu">DBMS</h1> */}
              </div>
              </div>
              <div className="onei">
                <div className="w4srtyerdh">
                  <h1 className="yhugf">Frontend Development</h1>
                  <h1 className="yhugf">Backend Development</h1>
                  <h1 className="yhugf">Hoisting</h1>
                  <h1 className="yhugf">Responsive Design</h1>
                  <h1 className="yhugf">Responsive Layout</h1>
                  <h1 className="yhugf">DBMS</h1>
                  <h1 className="yhugf">Figma - UI/UX design</h1>
                  <h1 className="yhugf">2D,3D Animation</h1>
                  {/* <h1 className="yhugf">SEO</h1> */}
                  <h1 className="yhugf">API design & development</h1>
                </div>
              </div>
            </div>
          </div>
       
          <div className="scroll-section"  id="koplop">
            <div id="onejminh">

              <div className="stuyyy">

                <h1 className="workoko">Experience </h1>
                <hr />
                <div className="innerstudy" id="huijmiu3">
                  <div className="hgfy">
                    <p className="kojokjo">Nilgiri,Tamilnadu,India.</p>
                    <h1 className="headhgfy">NTTL(New Tab Tech Lab)</h1>
                    <p className="kojokjo">Present</p>
                  </div>
             <a href="https://newtabtechlab.in/"> <div className="img-cont3">
     
     <img src="/img/nt.jpg" />
      </div></a>
                  <div className="hgfy">

                    <h1 className="headhgfy">Web developer                </h1>
                    <p className="kojokjo">Front & Back end</p>
                  </div>
                </div>
                <hr />
                
                <h1 className="workoko" id="certg">Certification </h1>
                <hr />
                <div className="innerstudy" id="huijmiu">
                  <div className="hgfy">
                    <p className="kojokjo">Coimbatore,Tamilnadu,India.</p>
                    <h1 className="headhgfy">Kitkat Software Solutions</h1>
                    <p className="kojokjo">Nav 2022 - March 2023</p>
                  </div>
         <div className="hgfy">

                    <h1 className="headhgfy">MERN(Full stack certification)</h1>
                    <p className="kojokjo">Reactjs,Nodejs</p>
                  </div>
                </div>
                <hr />

                <div className="experienc">
                  <Marquee  >
                    <h1 className="finj drg1"><span> & Experience</span> & Certification <span> & Experience</span> & Certification <span>  & Experience</span> & Certification</h1>

                  </Marquee>
                </div>


              </div>

            </div>
          </div>

          <div className="scroll-section">

<Study />
 </div>

          <div className="scroll-section" id="koplop">

            <div className="mainjjilast">



               <div className="">
               <TagCloud className="jhgfiuy"
        options={{
          radius: 250,
          maxSpeed: "normal",
          initSpeed: "normal",
          keep: true,
        }}
          
        
     
    >
        {[
            "Html",
            "Css",
            "React js",
            "Javascript",
            "Bootstrap",
            "Jquery",
            "Gsap",
            "Nodejs",
            "Framer Motion",
            "Mongodb",
            "GraphQl",
            "Next js",
            "Sql",
            "Sass",
            "Git",
            "Github",
        ]}
    </TagCloud>
    <br />
               <h1 className="headhgfy" id="jhufytu">TECHNOLOGIES KNOWN</h1>
                <p className="ioioi">Blending the art of design with the precision of coding, I create digital experiences that are visually stunning and functionally robust, using a toolkit that includes ReactJS and Gsap, enabling me to consistently push the boundaries of creativity and innovation.</p>

               </div>

            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
