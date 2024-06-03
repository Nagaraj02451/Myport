import React, { useEffect, useRef } from "react";
import { Wrap } from "./Part2Style";
import { gsap } from "gsap";

const Part2 = () => {
  const text = ["Recent Work", ""];

  let Part2Ref = useRef(null);
  let Content2Ref = useRef(null);
  let Hover1Ref = useRef(null);
  let Hover2Ref = useRef(null);

  useEffect(() => {
    let ctx2 = gsap.context(() => {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: Part2Ref,
          start: "50% 70%",
          end: "50% 50%",
          scrub: true,
          // markers: true,
        },
      });


      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: Content2Ref,
          start: "20% 50%",
          end: "100% 50%",
          scrub: 1,
          // markers: true,
        },
      });

      tl3
        .to(Hover1Ref, { width: "100%" })
        .to(Hover2Ref, { delay: -0.4, width: "100%" });
    });

    return () => ctx2.revert();
  }, []);

  return (
    <Wrap ref={(el) => (Part2Ref = el)} className="wrap">
     
      <div className="content-2" ref={(el) => (Content2Ref = el)}>
        <div className="text-area">
          <h1>{text[0]}</h1>
          
        </div>
        <div className="text-area-hover">
          <h1 ref={(el) => (Hover1Ref = el)}>{text[0]}</h1>
      
        </div>
        
    
      </div>



    </Wrap>
  );
};

export default Part2;
