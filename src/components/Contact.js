import React from "react";
// import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    // emailjs
    //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  }

  return (
    <div className="contact">
      <div className="contact__form__container">
        <h2 className="contact__form__heading">Contact Us</h2>
        <form className="contact__form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label className="contact__form__label">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="name"
            className="contact__form__input"
          />
          <label className="contact__form__label">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="email"
            className="contact__form__input"
          />
          <label className="contact__form__label">Message</label>
          <textarea
            name="message"
            placeholder="message"
            className="contact__form__input"
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
