import React from "react";
import "./styles.css";
const winnerImage = require("../../assets/anime/Group 30120.png");
const player1 = require("../../assets/anime/Group 30116.png");
const player2 = require("../../assets/anime/Group 30116 (1).png");
const trophy = require("../../assets/anime/Icon.png");

const Winner = () => {
  return (
    <div className="container">
      <h1>Well Done!</h1>
      <p className="player">Player 1</p>
      <img src={winnerImage} alt="Player" />
      <div className="score-board1">
        <img src={player1} alt="Player" />
        <p className="">1st Place</p>
        <p className="">Player 1</p>
        <p className="">Score:</p>
      </div>

      <img src={trophy} className="trophy-image" alt="Trophy" />
      <div className="score-board2">
        <img src={player2} alt="Player" />
        <p className="">2nd Place</p>
        <p className="">Player 2</p>
        <p className="">Score:</p>
      </div>
      <button className="playagain">PLAY AGAIN</button>
    </div>
  );
};

export default Winner;
