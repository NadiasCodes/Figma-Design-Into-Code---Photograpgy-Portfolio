import React from "react";
import HeroImage from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero ">
      <div className="hero-text container-box">
        <h2>SHELLEY WHITE</h2>
        <h1>PHOTOGRAPHY</h1>
        <p>
          Nisl faucibus quis urna nibh ut amet. Diam suscipit
          <br /> pretium massa, sollicitudin in risus in. Sagittis.
        </p>
        <button className="default-btn">GET STARTED</button>
      </div>
    </section>
  );
};

export default Hero;
