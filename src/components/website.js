// src/components/website.js
import React from "react";

function Website({ name, url, logo }) {
  return (
    <div className="website-box" onClick={() => window.open(url, "_blank")}>
      <img src={logo} alt={name + " Logo"} />
      <p>{name}</p>
    </div>
  );
}

export default Website;
