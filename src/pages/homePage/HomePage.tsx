import React from "react";
import "./styles.css";
import PlayerImage from "../../components/playerImage/PlayerImage";
import PlayerInput from "../../components/playerInput/PlayerInput";


const playerImage1 = require("../../assets/anime/Group 30099.png");
const playerImage2 = require("../../assets/anime/Group 30102.png");

const HomePage = () => {
 

  const handleExit = () => {
    console.log("TODO!!!!");
  };

  const handlePlay = () => {
    console.log("TODO!!!!");
  };

  return (
    <div className="home-page">
      <button className="exit-button" onClick={handleExit}>
        Exit Game
      </button>
      <p className="play-text">Are you ready to play?</p>
      <div className="memory-text">Memory</div>
      <div className="player-images-container">
        <PlayerImage src={playerImage1} alt="Player 1" />
        <PlayerImage src={playerImage2} alt="Player 2" />
      </div>
      <div className="input-container">
        <PlayerInput placeholder="Name of Player 1" />
        <PlayerInput placeholder="Name of Player 2" />
      </div>
      <button className="play-button" onClick={handlePlay}>
        Let's play
      </button>
    </div>
  );
};

export default HomePage;
