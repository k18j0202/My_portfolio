import "./app.scss"
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Projects from "./components/project/Project";
import Skills from "./components/skills/Skills";
const App = () => {
  return <div>
    <section id="Homepage"><Navbar/><Hero/></section>
    <section id="About"><About/></section>
    <section id="Skills"><Skills/></section>
    <section id="Projects"><Projects /></section>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
