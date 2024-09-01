import "./project.scss";
import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "CyberBrowser",
    img: "/picture2.png",
    urlFigma: "https://www.figma.com/proto/38l1Ea7Gy6ewesawlPubEV/CyberBrowser?node-id=2-2&t=HX54GPYQbiz8P87R-1",
    desc: "This Figma prototype offers a streamlined interface for detecting phishing threats and preventing malware attacks. It includes real-time alerts, intuitive URL scanning, and interactive analytics, paired with educational tips to help users recognize and avoid phishing scams."
  },
  {
    id: 2,
    title: "Rise Together",
    img: "/picture1.png",
    urlSite: "https://superlative-pudding-a5efe4.netlify.app/",
    urlFigma: "https://www.figma.com/proto/9JDxBtINj0iQYttMM1kuBE/Hackathan-Project?node-id=0-1&t=yIcSKmZbtgdRaKhR-1",
    desc: "Created a Figma design and developed the front-end using React and Vite for a static Diastart management website. The project features a clean, responsive layout with static content, ensuring fast load times and an engaging user experience.",
  },
 
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div className="card">
      <div className="cardInner" ref={ref}>
        <div className="cardFront">
          <div className="imageContainer">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
        <div className="cardBack">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className="buttons">
          <button>
          <a target="_blank" rel="noopener noreferrer" href={item.urlFigma}>Go to Prototype</a>
          </button>
          {item.urlSite && (
            <button>
              <a target="_blank" rel="noopener noreferrer" href={item.urlSite}>Go to Site</a>
              
            </button>
          )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div className="container">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Project;