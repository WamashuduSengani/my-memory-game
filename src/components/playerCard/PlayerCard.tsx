import React from "react";
import "./styles.css";

interface PlayerCardProps {
  playerName: string;
  playerImageSrc: string;
  score: number;
}

const PlayerCard = ({ playerName, playerImageSrc, score }: PlayerCardProps) => {
  return (
    <div className="player-card">
      <img src={playerImageSrc} alt="Player" className="player-image" />
      <div className="player-name">{playerName}</div>
      <div className="player-score">Score: {score}</div> {/* Updated score display */}
    </div>
  );
};

export default PlayerCard;
