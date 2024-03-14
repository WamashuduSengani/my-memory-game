import React from "react";
import "./styles.css";

interface PlayerIndicatorProps {
  backgroundColor: string;
  textColor: string;
}

const PlayerIndicator = ({
  backgroundColor,
  textColor,
}: PlayerIndicatorProps) => {
  return (
    <div className="current-player" style={{ backgroundColor }}>
      <span className="turn-text" style={{ color: textColor }}>
        It’s your turn
      </span>
    </div>
  );
};

export default PlayerIndicator;
