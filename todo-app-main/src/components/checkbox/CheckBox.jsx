import React, { useState, useEffect } from "react";

import "./Checkbox.css";

const Checkbox = ({ checked, onChange, greenCheck }) => {
  return (
    <div className="round">
      <input
        checked={checked}
        onChange={() => onChange(!checked)}
        type="checkbox"
      />
      <label
        className={`checkbox ${checked ? "checkbox--active" : ""} ${
          greenCheck ? "green-check" : ""
        }`}
        htmlFor="checkbox"
      ></label>
    </div>
  );
};

export default Checkbox;
