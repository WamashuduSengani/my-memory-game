import React from "react";
import "./styles.css";
import PlayerCard from "../../components/playerCard/PlayerCard";
import Card from "../../components/card/Card";

// Importing player images
const playerImage1 = require("../../assets/anime/Group 30099.png");
const playerImage2 = require("../../assets/anime/Group 30102.png");
const cardBack = require("../../assets/anime/Card_Back.png");

const GameBoard = () => {
  const handleExit = () => {
    console.log("TODO!!!!");
  };

  const handleRestart = () => {
    console.log("Restarting the game...");
  };

  return (
    <div className="game-play">
      <div className="memory-text">Memory</div>
      <button className="exit-button" onClick={handleExit}>
        Exit Game
      </button>
      <button className="restart-button" onClick={handleRestart}>
        Restart Game
      </button>
      <div className="game-board">
        <div className="player1">
          <PlayerCard
            playerName="John Doe"
            playerImageSrc={playerImage1}
            score={10}
          />
        </div>
        <div className="rectangle-2"></div>
        <div className="player2">
          <PlayerCard
            playerName="Wanashudu"
            playerImageSrc={playerImage2}
            score={15}
          />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
