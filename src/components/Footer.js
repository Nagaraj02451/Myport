import React from "react";
import Card from "./Card";
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import { projects } from "./data";
import Marquee from "react-fast-marquee";
import Part2 from "./part2/Part2";
function Footer({ link, link2 }) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })


  1
  return (
    <>

      <div className="work" id={link}>
        <Part2 />
        <p className="kojokjo">THESE ARE SOME OF THE PROJECTS THAT I HAVE DONE IN RECENT YEARS</p>
      </div>
      <div ref={container} className="main11" >
        {
          projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.05);
            console.log(i, "target");
            return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .20, 1]} targetScale={targetScale} />
          })
        }

      </div>
      <div className="Footerlast" id={link2}>
        <div className="inner">
          <div className="innerfooter">
            <h1 className="headhgfy">Let's build something  <br />cool together!</h1>
            <div className="hgfv">
              <a href="https://www.linkedin.com/in/nagaraj-r-538297244"><p className="kojokjo">LinkedIN</p></a>
              <br />
              <a href="tel:9080910971"> <p className="kojokjo">+919080910971</p></a>
              <br />

              <a href="mailto:nagaraj022000@gmail.com"> <p className="kojokjo">nagaraj022000@gmail.com</p></a>
            </div>
          </div>


        </div>
      </div>

      <div className="kol">
        <Marquee speed={80}>
          <h1 className="finj">  <span><a href="tel:9080910971">👋 SAY HI </a></span> !..... <span><a href="mailto:nagaraj022000@gmail.com">📩 NAGARAJ022000@GMAIL.COM</a></span> </h1>
        </Marquee>
      </div>
    </>
  );
}

export default Footer;
