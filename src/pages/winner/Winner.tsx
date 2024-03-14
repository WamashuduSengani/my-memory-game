import React, { useEffect, useState } from "react";
import "./styles.css";
const winnerImage = require("../../assets/anime/Group 30120.png");
const player1Image = require("../../assets/anime/Group 30116.png");
const player2Image = require("../../assets/anime/Group 30116 (1).png");
const trophy = require("../../assets/anime/Icon.png");

const Winner = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  useEffect(() => {
    const storedPlayer1Name = localStorage.getItem("player1Name");
    const storedPlayer2Name = localStorage.getItem("player2Name");

    
    if (storedPlayer1Name && storedPlayer2Name) {
      setPlayer1Name(storedPlayer1Name);
      setPlayer2Name(storedPlayer2Name);
    }
  }, []);

  return (
    <div className="container">
      <h1>Well Done!</h1>
      <p className="player">{player1Name}</p>
      <img src={winnerImage} alt="Player" />
      <div className="score-board1">
        <img src={player1Image} alt="Player" />
        <p className="">1st Place</p>
        <p className="">{player1Name}</p>
        <p className="">Score:</p>
      </div>

      <img src={trophy} className="trophy-image" alt="Trophy" />
      <div className="score-board2">
        <img src={player2Image} alt="Player" />
        <p className="">2nd Place</p>
        <p className="">{player2Name}</p>
        <p className="">Score:</p>
      </div>
      <button className="playagain">PLAY AGAIN</button>
    </div>
  );
};

export default Winner;
