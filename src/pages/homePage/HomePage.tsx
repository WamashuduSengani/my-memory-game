import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./styles.css";
import PlayerImage from "../../components/playerImage/PlayerImage";
import PlayerInput from "../../components/playerInput/PlayerInput";

const playerImage1 = require("../../assets/anime/Group 30099.png");
const playerImage2 = require("../../assets/anime/Group 30102.png");

const HomePage = () => {
  const navigate = useNavigate();
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [error, setError] = useState("");

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  const handlePlay = () => {
    if (player1Name && player2Name) {
      localStorage.setItem("player1Name", player1Name);
      localStorage.setItem("player2Name", player2Name);
      navigate("/game");
    } else {
      setError("Please enter names for both players.");
    }
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
        <PlayerInput
          placeholder="Name of Player 1"
          value={player1Name}
          onChange={(e) => setPlayer1Name(e.target.value)}
        />
        <PlayerInput
          placeholder="Name of Player 2"
          value={player2Name}
          onChange={(e) => setPlayer2Name(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button className="play-button" onClick={handlePlay}>
          Let's play
        </button>
      </div>
    </div>
  );
};

export default HomePage;
