import React from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Galley from "./Components/Gallery/Galley";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Galley />
    </div>
  );
}

export default App;
