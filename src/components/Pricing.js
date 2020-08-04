import React, { useState } from "react";

const Pricing = () => {
  const [value, setValue] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setValue(event);
  }

  return (
    <div className="pricing" id="pricing">
      <h1 className="pricing__heading">Pricing</h1>

      <form>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Pricing;
