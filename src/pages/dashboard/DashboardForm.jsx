import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

import { Link } from "react-router-dom";

import SuccessPic from "./../../images/dashboard.png";

function ContactForm() {
  return (
    <div>
        <img src={SuccessPic} alt="IMG" />
    </div>
  );
}

export default ContactForm;
