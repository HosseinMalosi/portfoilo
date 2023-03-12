import React from "react";
import { ProgressBar } from "react-bootstrap";

const Bar = ({ now, label }) => {
  return (
    <div className="p-4 bg-[hsl(0,0%,15%)] rounded">
      <label className=" font-sans text-lg mb-3" htmlFor={label}>{label} :</label>
      <ProgressBar id={label} now={now} label={`${now}`} max="5" variant="success" animated="True"/>
    </div>
  );
};

export default Bar;
