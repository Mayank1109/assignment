import React from "react";
import "./progressBar.css";

const ProgressBar = ({ value, max, className }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`status-bar ${className}`}>
      <div
        className="status-bar__progress"
        style={{ width: `${percentage}%` }}
      />
      <div className="status-bar__label"></div>
    </div>
  );
};

export default ProgressBar;
