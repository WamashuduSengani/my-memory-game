import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const winnerImage = require("../../assets/anime/Group 30120.png");
const player1Image = require("../../assets/anime/Group 30116.png");
const player2Image = require("../../assets/anime/Group 30116 (1).png");
const trophy = require("../../assets/anime/Icon.png");

const Winner = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const storedPlayer1Name = localStorage.getItem("player1Name");
    const storedPlayer2Name = localStorage.getItem("player2Name");
    const storedPlayer1Score = localStorage.getItem("player1Score");
    const storedPlayer2Score = localStorage.getItem("player2Score");

    if (
      storedPlayer1Name &&
      storedPlayer2Name &&
      storedPlayer1Score &&
      storedPlayer2Score
    ) {
      setPlayer1Name(storedPlayer1Name);
      setPlayer2Name(storedPlayer2Name);
      setPlayer1Score(parseInt(storedPlayer1Score, 10));
      setPlayer2Score(parseInt(storedPlayer2Score, 10));
    }
  }, []);

    const handlePlayAgain = () => {
        localStorage.removeItem("player1Name");
        localStorage.removeItem("player2Name");
        localStorage.removeItem("player1Score");
        localStorage.removeItem("player2Score");
        navigate("/");
    };

  // Determine the winner based on scores
  const winner = player1Score > player2Score ? player1Name : player2Name;
  const loser = player1Score > player2Score ? player2Name : player1Name;
  const winnerScore = player1Score > player2Score ? player1Score : player2Score;
  const loserScore = player1Score > player2Score ? player2Score : player1Score;

  return (
    <div className="container">
      <h1>Well Done!</h1>
      <p className="player">{winner}</p>
      <img src={winnerImage} alt="Player" />
      <div className="score-board1">
        <img src={player1Image} alt="Player" />
        <p className="">1st Place</p>
        <p className="">{winner}</p>
        <p className="">Score: {winnerScore}</p>
      </div>

      <img src={trophy} className="trophy-image" alt="Trophy" />
      <div className="score-board2">
        <img src={player2Image} alt="Player" />
        <p className="">2nd Place</p>
        <p className="">{loser}</p>
        <p className="">Score: {loserScore}</p>
      </div>
      <button className="playagain" onClick={handlePlayAgain}>PLAY AGAIN</button>
    </div>
  );
};

export default Winner;
