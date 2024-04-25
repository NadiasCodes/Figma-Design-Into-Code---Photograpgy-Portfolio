import React from "react";
import "./Contact.css";
import AdressIcon from "../../assets/adress.png";
import PhoneIcon from "../../assets/phone.png";
import EmailICon from "../../assets/mail.png";

const Contact = () => {
  return (
    <div>
      <div className="contact container-box">
        <h1>GET IN TOUCH!</h1>
        <div className="contact-col">
          <h3>ADDRESS</h3>
          <ul>
            <li>
              <img src={AdressIcon} alt="Adress Icon" /> 021 Hollywood Boulevard, Los Angeles
            </li>
          </ul>
          <h3>EMAIL</h3>
          <ul>
            <li>
              <img src={EmailICon} alt="Email Icon" />
              ShelleyWhite@hotmail.com
            </li>
          </ul>
          <h3>PHONE</h3>
          <ul>
            <li>
              <img src={PhoneIcon} alt="Email Icon" />
              +49 69 1234 5678
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
