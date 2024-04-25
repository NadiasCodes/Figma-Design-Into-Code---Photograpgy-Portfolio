import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./About.css";
import AboutPicture from "../../assets/about.png";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedinIcon from "../../assets/linkedin.png";
import CameraIcon from "../../assets/camera.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div className="about" id="about">
      <Container className="container-box">
        <Row>
          <Col xs={12} md={6} xl={7}>
            <img src={AboutPicture} alt="The photographer" className="about-picture " data-aos="fade-right" data-aos-duration="2000" />
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="about-box">
              <h4 data-aos="fade-left" data-aos-duration="2000">
                ABOUT ME
              </h4>
              <h1 data-aos="fade-left" data-aos-duration="2000">
                SHELLEY WHITE
              </h1>
              <p data-aos="fade-up" data-aos-duration="2000">
                Nisl faucibus quis urna nibh ut amet diam suscipit pretium massa sollicitudin in risus in sagittis nisl faucibus quis urna nibh ut amet diam suscipit pretium massa, sollicitudin in risus in. Sagittis.
              </p>
            </div>
            <div className="social-box" data-aos="fade-down" data-aos-duration="2000">
              <img src={FacebookIcon} className=" social-icon img-fluid" />
              <img src={InstagramIcon} className="social-icon  img-fluid" />
              <img src={LinkedinIcon} className=" social-icon  img-fluid" />
            </div>
            <h3 className="camera-header" data-aos="fade-down" data-aos-duration="2000">
              {" "}
              MY CAMERA
            </h3>
            <div className="camera-box" data-aos="fade-down" data-aos-duration="2000">
              <img src={CameraIcon} className="camera" />
              <span>Olympus PEN-F Kamera Mirrorlees</span>
            </div>
            <div>
              <button className="default-btn" data-aos="fade-down" data-aos-duration="2000">
                CONTACT ME
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
