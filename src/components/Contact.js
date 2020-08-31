import React, { useState } from "react";
import emailjs from "emailjs-com";
import { env } from "../vars/config";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTown, setUserTown] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const reg = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const { REACT_APP_EMAILJS_USERID, REACT_APP_EMAILJS_TEMPLATEID } = env;

  function submitForm(event) {
    event.preventDefault();

    if (valid()) {
      sendFeedback({
        user_name: userName,
        user_email: userEmail,
        user_town: userTown,
        user_message: userMessage,
      });
    } else {
      setErrorMessage("All feilds required!");
    }
  }

  function valid() {
    if (
      userName === "" ||
      userEmail === "" ||
      userTown === "" ||
      userMessage === ""
    ) {
      setErrorMessage("All fields required!");
      setTimeout(function () {
        setErrorMessage("");
      }, 2000);
      return false;
    }
    if (!reg.test(String(userEmail).toLocaleLowerCase())) {
      setErrorMessage("All fields required!");
      setTimeout(function () {
        setErrorMessage("");
      }, 2000);
      return false;
    }
    return true;
  }

  function sendFeedback(variables) {
    emailjs
      .send(
        "gmail",
        REACT_APP_EMAILJS_TEMPLATEID,
        variables,
        REACT_APP_EMAILJS_USERID
      )
      .then((res) => {
        setUserName("");
        setUserEmail("");
        setUserTown("");
        setUserMessage("");
        setErrorMessage("Sent sucessfully!");
        setTimeout(function () {
          setErrorMessage("");
        }, 2000);
      })
      .catch((err) => {
        setErrorMessage("All fields required!");
      });
  }

  function change(e) {
    if (e.target.name === "user_name" && e.target.value.length >= 0) {
      setUserName(e.target.value);
    }

    if (e.target.name === "user_email" && e.target.value.length >= 0) {
      setUserEmail(e.target.value);
    }

    if (e.target.name === "user_town" && e.target.value.length >= 0) {
      setUserTown(e.target.value);
    }

    if (e.target.name === "user_message" && e.target.value.length >= 0) {
      setUserMessage(e.target.value);
    }
  }

  const errorMessaging = (msg) => {
    if (msg.length > 0) {
      return <p className="contact__error__message">{msg}</p>;
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__form__heading">Contact Us</h2>
        <div className="contact__error">{errorMessaging(errorMessage)}</div>
        <form className="contact__form" onSubmit={submitForm}>
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
