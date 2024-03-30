// src/components/launcher.js
import React from "react";
import Website from "./website";
import websites from "./websites";
import "./launcher.css";

function Launcher() {
  return (
    <div className="website-grid">
      {websites.map((website) => (
        <Website
          key={website.name}
          name={website.name}
          url={website.url}
          logo={website.logo}
        />
      ))}
    </div>
  );
}

export default Launcher;
