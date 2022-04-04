import React, { useState } from "react";

import "../body/body.css";

const Body = () => {
  const [user, setUser] = useState("");
  const [value, setValue] = useState("");

  const clearQuery = () => {
    setUser("");
    setValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    setValue(user);
  };
  return (
    <>
      <div className="google-name">
        <span style={{ color: " blue" }}>G</span>
        <span style={{ color: "red" }}>o</span>
        <span style={{ color: "yellow" }}>o</span>
        <span style={{ color: "blue" }}>g</span>
        <span style={{ color: "green" }}>l</span>
        <span style={{ color: "red" }}>e</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="googling"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <p className="p-user">{value}</p>
        </div>
        <div className="google-container">
          <button className="google-search" type="submit">
            Google Search
          </button>
          <button className="felling-lazy" onClick={clearQuery}>
            I'm felling lazy
          </button>
        </div>
      </form>
      <div>
        <h3 className="google-offered">
          Google offered in:
          <a className="nepali" href="https://www.google.com/">
            नेपाली
          </a>
        </h3>
      </div>
    </>
  );
};

export default Body;
