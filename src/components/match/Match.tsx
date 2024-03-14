import React from "react";
import "./Match.css";

interface MatchProps {
  imageSrc: string;
}

const Match = ({ imageSrc }: MatchProps) => {
  return (
    <div className="match">
      <img src={imageSrc} />
    </div>
  );
};

export default Match;
