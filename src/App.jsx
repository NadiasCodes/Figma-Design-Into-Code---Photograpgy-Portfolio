import React from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact/>
    </div>
  );
}

export default App;
