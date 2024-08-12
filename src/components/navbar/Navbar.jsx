import "./Navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">

      <Sidebar/>

      <div className="wrapper">
        <motion.span
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        >PORTFOLIO</motion.span>
        <div className="social">
          <a target="_blank" href="https://www.linkedin.com/in/karthikjln/"><img className="linkedin" src="/linkedin.png"/></a>
          <a target="_blank" href="https://github.com/k18j0202"><img src="/github.png"/></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;