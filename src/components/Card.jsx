import React from "react";
import "./Card.css"; // Import CSS file for styling

const Card = ({ title, description, children }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {children && <div className="card-content">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
