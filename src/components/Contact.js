import React, { useState } from "react";
import emailjs from "emailjs-com";
import { env } from "../vars/config";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTown, setUserTown] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const { REACT_APP_EMAILJS_USERID, REACT_APP_EMAILJS_TEMPLATEID } = env;

  function sendEmail(e) {
    e.preventDefault();

    userName.length > 1
      ? setSubmit(true) && setError("")
      : setSubmit(false) && setError("Name Required");

    userEmail.length
      ? setSubmit(true) && setError("")
      : setSubmit(false) && setError("Email Required");

    userTown.length > 1
      ? setSubmit(true) && setError("")
      : setSubmit(false) && setError("Town Required");

    userMessage.length > 1
      ? setSubmit(true) && setError("")
      : setSubmit(false) && setError("Message Required");

    if (submit && error !== "") {
      emailjs
        .sendForm(
          "gmail",
          REACT_APP_EMAILJS_TEMPLATEID,
          e.target,
          REACT_APP_EMAILJS_USERID
        )
        .then(
          (result) => {
            console.log(result.text);
            setUserName("");
            setUserTown("");
            setUserEmail("");
            setUserMessage("");
            setSubmit(false);
            setError("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  console.log(userName);
  console.log(userEmail);
  console.log(userTown);
  console.log(userMessage);

  function change(e) {
    if (e.target.name === "user_name") {
      setUserName(e.target.value);
    }

    if (e.target.name === "user_email") {
      setUserEmail(e.target.value);
      reg.test(String(userEmail).toLocaleLowerCase())
        ? setSubmit(true)
        : setSubmit(false);
    }

    if (e.target.name === "user_town") {
      setUserTown(e.target.value);
    }

    if (e.target.name === "user_message") {
      setUserMessage(e.target.value);
    }
  }

  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__form__heading">Contact Us</h2>
        <form className="contact__form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label className="contact__form__label">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="contact__form__input"
            value={userName}
            onChange={change}
          />
          <label className="contact__form__label">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="contact__form__input"
            value={userEmail}
            onChange={change}
          />
          <label className="contact__form__label">Town</label>
          <input
            type="text"
            name="user_town"
            placeholder="Your town"
            className="contact__form__input"
            value={userTown}
            onChange={change}
          />
          <label className="contact__form__label">Message</label>
          <textarea
            name="user_message"
            placeholder="What service are you looking for?"
            className="contact__form__input"
            value={userMessage}
            onChange={change}
          />
          <input className="contact__form__button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
