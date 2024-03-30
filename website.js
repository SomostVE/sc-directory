// Website.js
import React from "react";

function website({ name, url, logo }) {
  return (
    <div className="website-box" onClick={() => window.open(url, "_blank")}>
      <img src={logo} alt={name + " Logo"} />
      <p>{name}</p>
    </div>
  );
}

export default website;
