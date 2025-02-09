import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({ linkto, active, children, onClick }) => {
  const buttonClass = active
    ? "btn btn-warning text-dark shadow-sm"
    : "btn btn-dark text-white shadow-sm";
  return (
    <Link to={linkto} onClick={onclick}>
      <div className={`${buttonClass}`}> {children} </div>
    </Link>
  );
};

export default CTAButton;
