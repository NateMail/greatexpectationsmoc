import React from "react";

const Rates = () => {
  return (
    <div className="rates" id="rates">
      <h2 className="rates__heading">Rates & Conditions</h2>
      <div className="rates__container">
        <p className="rates__message">
          Our rates vary depending on the length and content of the sessions,
          and the number of students. Family discounts available for multiple
          students. Please call to discuss rates and scheduling a complimentary
          first session.
        </p>

        <div className="conditions">
          <h2 className="conditions__heading">Types of Tutoring</h2>
          <p className="conditions__message">
            Great Expectations is pleased to offer both in-person and remote
            tutoring options for our students.
          </p>
        </div>
        <div className="types">
          <h2 className="types__heading">In Person</h2>
          <p className="types__message--1">
            Our tutors have met with students in the comfort of their own homes,
            at local libraries, at their boarding schools and at other mutually
            convenient locations for years. For in-home tutoring, we are a
            completely dog and cat friendly organization and would love to meet
            your furry companions.
          </p>
          <div className="types__container">
            <div className="types__img"></div>
            <span className="types__img-label">Our dog Jewel</span>
            <p className="types__img-text">
              We understand that the pets sometimes want to be in the room with
              their student for tutoring and that’s ok too. We’re flexible like
              that.
            </p>
          </div>
          <p className="types__message--2">
            We also continue to offer these in-person services during the
            Covid-19 pandemic with the following caveats:
          </p>
          <ul className="types__list">
            <li className="types__item">
              We ask that there be a table to work at where the tutor and
              student can remain 6 feet apart
            </li>
            <li className="types__item">
              Tutors will wear masks. Students should wear a mask during the
              session as well.
            </li>
            <li className="types__item">
              Students should bring their own laptop or other device to the
              session. We don’t want to share devices during this unprecedented
              time!
            </li>
            <li className="types__item">
              If a student is exhibiting any Covid-19 symptoms, we ask that the
              session be either rescheduled or converted to a remote learning
              session. We will do the same if the tutor is exhibiting any
              symptoms.
            </li>
          </ul>

          <h2 className="types__heading">Remote</h2>
          <p className="types__message--3">
            We have all become experts at interacting remotely over the past few
            months. The tutors at Great Expectations are no different, and we
            are happy to bring our tutoring services to your student remotely
            through videoconferencing technologies.
          </p>
        </div>
        <div className="sessions">
          <h2 className="sessions__heading">Session Lengths</h2>
          <p className="sessions__message">
            Our initial tutoring sessions are 60 minutes in length and are
            always complimentary so you can meet us, ask questions and see if we
            are the right fit for your student before making a commitment.
            Thereafter, sessions are available in 60- or 90-minute increments.
            Please call or email for information about rates and packages
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rates;
