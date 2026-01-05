import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Hireme />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
