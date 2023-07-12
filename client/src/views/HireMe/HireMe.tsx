import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./HireMe.css";

interface HireMeInterface {
  hireMeRef: React.MutableRefObject<null>;
}

export default function HireMe({ hireMeRef }: HireMeInterface) {
  const [email, setEmail] = useState("");
  const form = useRef<HTMLFormElement | string>("");

  const SERVICE_ID = "service_zasiw0d";
  const TEMPLATE_ID = "template_qtq6jbg";
  const PUBLIC_KEY = "DaDCW3AcDBpV4lbXs";

  function handleChange(
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) {
    setEmail(e.target.value);
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      window.alert("Please enter a valid email address");
      return;
    }
    if (form === null) return;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => console.log(error.text)
    );
  }

  return (
    <div className="HireMe" ref={hireMeRef}>
      <h1 className="contactFormHeader">Hire Me</h1>
      <form
        className="contactForm"
        ref={form as React.LegacyRef<HTMLFormElement>}
      >
        <label className="contactFormLabels">Name</label>
        <input className="contactFormInput" type="text" name="from_name" />
        <label className="contactFormLabels">Email</label>
        <input
          className="contactFormInput"
          type="text"
          name="reply_to"
          onChange={(e) => handleChange(e)}
        />
        <label className="contactFormLabels">Message</label>
        <textarea className="contactMessageField" name="message" />
        <button
          className="contactFormSubmit"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          SEND
        </button>
      </form>
    </div>
  );
}
