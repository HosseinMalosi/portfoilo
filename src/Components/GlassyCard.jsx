import React from "react";
import "./Glassy.css"

const GlassyCard = ({className, children}) => {
  return (
    <div
      className={className}
    >
    {children}
    </div>
  );
};

export default GlassyCard;
