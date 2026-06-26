import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Projects from "./components/sections/Projects/Projects";
import Journey from "./components/sections/Journey/Journey";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Achievements from "./components/sections/Achievements/Achievements";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;