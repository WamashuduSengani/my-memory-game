import React from "react";
import "./Card.css"; // Assuming you'll create a CSS file for styling

interface CardProps {
  imageSrc: string; // Assuming the image source is a string
}

const Card = ({ imageSrc }: CardProps) => {
  return (
    <div className="card-back" style={{ backgroundImage: `url(${imageSrc})` }}>
      {/* Content of the card */}
    </div>
  );
};

export default Card;
