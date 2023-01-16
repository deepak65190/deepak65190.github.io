import React from "react";
import "./Contact.css";
import ContactBox from "../../components/ContactBox/ContactBox";

function Contact() {
  return (
    <>
      <div id="Contact" className="contact">
        <h1 className="contactME">Contact Me</h1>
        <div className="boxes">
          <ContactBox
            animation="fade-right"
            class="fas fa-envelope"
            name="Email"
            name2="deepak65190@gmail.com"
            link="mailto:deepak65190@gmail.com"
          />
          <ContactBox
            animation="fade-right"
            class="fas fa-phone"
            name="Contact"
            name2="9625528158"
            link="tel:+919625528158"
          />
          <ContactBox
            animation="fade-up"
            class="fab fa-github"
            name="Github"
            link="https://github.com/deepak65190"
          />
          <ContactBox
            animation="fade-left"
            class="fab fa-linkedin"
            name="Linkedin"
            link="https://www.linkedin.com/in/deepakbisht01/"
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
