import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
console.log(scale , "scale");
  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: color.title,
          scale,
          top: `calc(-5vh + ${i * 3}px)`,
        }}
        className={color.one}
        id="hgtfyu"
      >
        <div className="Maincard">
<div className="hyu">
 <div className="jhfgu">
<div>
<h1>
  {color.details.one}
</h1>
<p>{color.details.two}</p>
<p>{color.details.three}</p>
<a href={color.link}><p>Visit Website<img src="/img/arre.svg" /></p></a>
</div>
 </div>
</div>
        </div>
      </motion.div>
      <motion.div
        style={{
          backgroundColor: color.title,
          scale,
          top: `calc(-5vh + ${i * 3}px)`,
        }}
        className={color.two} id="jhjgyuvb"
      >
        <div className="Maincard">
<div className="hyu">
 <div className="jhfgu">
<div>
<h1>
  {color.details.one}
</h1>
<p>{color.details.two}</p>
<p>{color.details.three}</p>
<a href={color.link}><p>Visit Website<img src="/img/arre.svg" /></p></a>

</div>
 </div>
</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
