import React from "react";
import HeroImage from "../../assets/hero.png";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  AOS.init();
  return (
    <section className="hero " id="home">
      <div className="hero-text container-box">
        <h2 data-aos="fade-right" data-aos-duration="2000">
          SHELLEY WHITE
        </h2>
        <h1 data-aos="fade-left" data-aos-duration="2000">
          PHOTOGRAPHY
        </h1>
        <p data-aos="fade-up" data-aos-duration="2000">
          Nisl faucibus quis urna nibh ut amet. Diam suscipit
          <br /> pretium massa, sollicitudin in risus in. Sagittis.
        </p>
        <button className="default-btn" data-aos="fade-down" data-aos-duration="2000">
          GET STARTED
        </button>
      </div>
    </section>
  );
};

export default Hero;
