import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./About.css";
import AboutPicture from "../../assets/about.png";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedinIcon from "../../assets/linkedin.png";
import CameraIcon from "../../assets/camera.png";

const About = () => {
  return (
    <div className="about">
      <Container className="container-box">
        <Row>
          <Col xs={12} md={6} xl={7}>
            <img src={AboutPicture} alt="The photographer" className="about-picture " />
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="about-box">
              <h4>ABOUT ME</h4>
              <h1>SHELLEY WHITE</h1>
              <p>Nisl faucibus quis urna nibh ut amet diam suscipit pretium massa sollicitudin in risus in sagittis nisl faucibus quis urna nibh ut amet diam suscipit pretium massa, sollicitudin in risus in. Sagittis.</p>
            </div>
            <div className="social-box">
              <img src={FacebookIcon} className=" social-icon img-fluid" />
              <img src={InstagramIcon} className="social-icon  img-fluid" />
              <img src={LinkedinIcon} className=" social-icon  img-fluid" />
            </div>
            <h3 className="camera-header"> MY CAMERA</h3>
            <div className="camera-box">
              <img src={CameraIcon} className="camera" />
              <span>Olympus PEN-F Kamera Mirrorlees</span>
            </div>
            <div>
              <button className="default-btn">CONTACT ME</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
