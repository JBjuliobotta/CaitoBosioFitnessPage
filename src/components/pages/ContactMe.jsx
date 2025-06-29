// import React from "react";
import "../css/contact.css";
import ContactImage from "/src/assets/_MG_9509.webp";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <>
      <div className="contact-container">
        <div className="leftSide">
          <h1>Contáctate</h1>
          <h4>Y juntos empecemos tu cambio</h4>
          <h1>HOY</h1>
          <Link className="icon" to="https://www.facebook.com/kito.caobosio?mibextid=ZbWKwL" style={{ color: "white" }}>
            <p>
              <i style={{ fontSize: 50 }} className="bi bi-facebook" />
            </p>
          </Link>
          <Link className="icon" to="https://www.instagram.com/caito.bosio?igsh=czlxcGVwN3V3dDJw" style={{ color: "white" }}>
            <p>
              <i style={{ fontSize: 50 }} className="bi bi-instagram" />
            </p>
          </Link>
          <Link className="icon" to="https://wa.me/+5493816755376" style={{ color: "white" }}>
            <p>
              <i style={{ fontSize: 50 }} className="bi bi-whatsapp" />
            </p>
          </Link>
          <Link className="icon" to="mailto:coachcaitobosio@gmail.com" style={{ color: "white" }}>
            <p>
              <i style={{ fontSize: 50 }} className="bi bi-envelope-at-fill" />
            </p>
          </Link>
        </div>
        <div
          className="rigthSide"
          style={{ backgroundImage: `url(${ContactImage})` }}
        ></div>
      </div>
    </>
  );
};

export default ContactMe;
