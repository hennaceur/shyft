import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

import { Link } from "react-router-dom";

import SupportPic from "./../../images/contactimage.png";
import SuccessPic from "./../../images/successful.png";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdoyozwa");
  if (state.succeeded) {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img src={SuccessPic} alt="IMG" style={{ height: "90%" }} />

        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to={"/menu"}>
            <button className="contact1-form-btn">
              <span>
                Go Back Home
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="contact1">
        <div className="container-contact1">
          <div className="contact1-pic js-tilt" style={{ objectFit: "cover" }}>
            <img src={SupportPic} alt="IMG" />
          </div>

          <form className="contact1-form validate-form" onSubmit={handleSubmit}>
            <span className="contact1-form-title">Enter Your Deets</span>

            <div
              className="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              <input
                className="input1"
                id="name"
                type="name"
                name="name"
                placeholder="Name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <span className="shadow-input1"></span>
            </div>

            <div
              className="wrap-input1 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input1"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <span className="shadow-input1"></span>
            </div>

            <div
              className="wrap-input1 validate-input"
              data-validate="Subject is required"
            >
              <input
                className="input1"
                id="subject"
                type="subject"
                name="subject"
                placeholder="Subject"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
              <span className="shadow-input1"></span>
            </div>

            <div
              className="wrap-input1 validate-input"
              data-validate="Message is required"
            >
              <textarea
                className="input1"
                id="message"
                type="message"
                name="message"
                placeholder="Message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <span className="shadow-input1"></span>
            </div>

            <div className="container-contact1-form-btn">
              <button
                className="contact1-form-btn"
                type="submit"
                disabled={state.submitting}
              >
                <span>
                  Send Email
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
