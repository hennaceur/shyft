import React from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";
import Header from "./../menu/Header";
import SupportPic from "./../../images/contactimage.png";


function Contact() {
  return (
    <div>
      <Header/>
      <ContactForm />
    </div>
  );
}

export default Contact;
