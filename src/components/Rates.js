import React from "react";
import { TiTick } from "react-icons/ti";

const Rates = () => {
  return (
    <div className="rates" id="rates">
      <h2 className="rates__heading">Rates</h2>
      <TiTick className="rates__icon" />
      <div className="rates__container">
        <p className="rates__message">
          Our rates vary depending on the length and content of the sessions,
          and the number of students. Family discounts available for multiple
          students. Please call to discuss rates and scheduling a complimentary
          first session.
        </p>
      </div>
    </div>
  );
};

export default Rates;
