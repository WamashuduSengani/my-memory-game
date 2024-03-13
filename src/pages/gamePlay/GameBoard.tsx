import React, { useState } from "react";
import "./styles.css";
import PlayerCard from "../../components/playerCard/PlayerCard";
import Card from "../../components/card/Card";
import { generateDeck, shuffleDeck } from "../../utils/cardUtils";

// Importing player images
const playerImage1 = require("../../assets/anime/Group 30099.png");
const playerImage2 = require("../../assets/anime/Group 30102.png");
const cardBack = require("../../assets/anime/Card_Back.png");

// Importing club card images
const clubs2 = require("../../assets/clubs/2.png");
const clubs3 = require("../../assets/clubs/3.png");
const clubs4 = require("../../assets/clubs/4.png");
const clubs5 = require("../../assets/clubs/5.png");
const clubs6 = require("../../assets/clubs/6.png");
const clubs7 = require("../../assets/clubs/7.png");
const clubs8 = require("../../assets/clubs/8.png");
const clubs9 = require("../../assets/clubs/9.png");
const clubs10 = require("../../assets/clubs/10.png");
const clubsA = require("../../assets/clubs/A.png");
const clubsJ = require("../../assets/clubs/J.png");
const clubsK = require("../../assets/clubs/K.png");
const clubsQ = require("../../assets/clubs/Q.png");

// Importing diamond card images
const diamonds2 = require("../../assets/diamonds/2.png");
const diamonds3 = require("../../assets/diamonds/3.png");
const diamonds4 = require("../../assets/diamonds/4.png");
const diamonds5 = require("../../assets/diamonds/5.png");
const diamonds6 = require("../../assets/diamonds/6.png");
const diamonds7 = require("../../assets/diamonds/7.png");
const diamonds8 = require("../../assets/diamonds/8.png");
const diamonds9 = require("../../assets/diamonds/9.png");
const diamonds10 = require("../../assets/diamonds/10.png");
const diamondsA = require("../../assets/diamonds/A.png");
const diamondsJ = require("../../assets/diamonds/J.png");
const diamondsK = require("../../assets/diamonds/K.png");
const diamondsQ = require("../../assets/diamonds/Q.png");

// Importing heart card images
const hearts2 = require("../../assets/hearts/2.png");
const hearts3 = require("../../assets/hearts/3.png");
const hearts4 = require("../../assets/hearts/4.png");
const hearts5 = require("../../assets/hearts/5.png");
const hearts6 = require("../../assets/hearts/6.png");
const hearts7 = require("../../assets/hearts/7.png");
const hearts8 = require("../../assets/hearts/8.png");
const hearts9 = require("../../assets/hearts/9.png");
const hearts10 = require("../../assets/hearts/10.png");
const heartsA = require("../../assets/hearts/A.png");
const heartsJ = require("../../assets/hearts/J.png");
const heartsK = require("../../assets/hearts/K.png");
const heartsQ = require("../../assets/hearts/Q.png");

// Importing card images
const spades2 = require("../../assets/spades/2.png");
const spades3 = require("../../assets/spades/3.png");
const spades4 = require("../../assets/spades/4.png");
const spades5 = require("../../assets/spades/5.png");
const spades6 = require("../../assets/spades/6.png");
const spades7 = require("../../assets/spades/7.png");
const spades8 = require("../../assets/spades/8.png");
const spades9 = require("../../assets/spades/9.png");
const spades10 = require("../../assets/spades/10.png");
const spadesA = require("../../assets/spades/A.png");
const spadesJ = require("../../assets/spades/J.png");
const spadesK = require("../../assets/spades/K.png");
const spadesQ = require("../../assets/spades/Q.png");


// Importing joker card images
const joker1 = require("../../assets/joker/Joker_1.png");
const joker2 = require("../../assets/joker/Joker_2.png");

interface Card {
  suit: string;
  rank: string;
  image: string; // Path to the card image
}

const GameBoard = () => {
  const [deck, setDeck] = useState<Card[]>(generateDeck());
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<Card[]>([]);

  const handleExit = () => {
    console.log("TODO!!!!");
  };

  const handleRestart = () => {
    console.log("Restarting the game...");
  };

  const handleCardClick = (clickedCard: Card) => {
    // Placeholder logic
    console.log("Clicked card:", clickedCard);

    if (flippedCards.includes(clickedCard) || matchedCards.includes(clickedCard)) {
      return; // Ignore click if the card is already flipped or matched
    }
  
    // Toggle the clicked card in flippedCards array
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards.push(clickedCard);
    setFlippedCards(updatedFlippedCards);
  };

  // Function to render a card based on game state
  // Update UI based on game state
  // Update UI based on game state
  const renderCard = (card: Card, index: number) => {
    const isFlipped =
      flippedCards.includes(card) || matchedCards.includes(card);
    let cardImage;

    if (isFlipped) {
      // Handle joker cards
      if (card.rank === "Joker") {
        cardImage = card.rank === "Joker" ? joker1 : joker2;
      } else {
        // Handle other cards
        switch (card.rank) {
          case "2":
            cardImage =
              card.suit === "hearts"
                ? hearts2
                : card.suit === "diamonds"
                ? diamonds2
                : card.suit === "clubs"
                ? clubs2
                : spades2;
            break;
          case "3":
            cardImage =
              card.suit === "hearts"
                ? hearts3
                : card.suit === "diamonds"
                ? diamonds3
                : card.suit === "clubs"
                ? clubs3
                : spades3;
            break;
          case "4":
            cardImage =
              card.suit === "hearts"
                ? hearts4
                : card.suit === "diamonds"
                ? diamonds4
                : card.suit === "clubs"
                ? clubs4
                : spades4;
            break;
          case "5":
            cardImage =
              card.suit === "hearts"
                ? hearts5
                : card.suit === "diamonds"
                ? diamonds5
                : card.suit === "clubs"
                ? clubs5
                : spades5;
            break;
          case "6":
            cardImage =
              card.suit === "hearts"
                ? hearts6
                : card.suit === "diamonds"
                ? diamonds6
                : card.suit === "clubs"
                ? clubs6
                : spades6;
            break;
          case "7":
            cardImage =
              card.suit === "hearts"
                ? hearts7
                : card.suit === "diamonds"
                ? diamonds7
                : card.suit === "clubs"
                ? clubs7
                : spades7;
            break;
          case "8":
            cardImage =
              card.suit === "hearts"
                ? hearts8
                : card.suit === "diamonds"
                ? diamonds8
                : card.suit === "clubs"
                ? clubs8
                : spades8;
            break;
          case "9":
            cardImage =
              card.suit === "hearts"
                ? hearts9
                : card.suit === "diamonds"
                ? diamonds9
                : card.suit === "clubs"
                ? clubs9
                : spades9;
            break;
          case "10":
            cardImage =
              card.suit === "hearts"
                ? hearts10
                : card.suit === "diamonds"
                ? diamonds10
                : card.suit === "clubs"
                ? clubs10
                : spades10;
            break;
          case "A":
            cardImage =
              card.suit === "hearts"
                ? heartsA
                : card.suit === "diamonds"
                ? diamondsA
                : card.suit === "clubs"
                ? clubsA
                : spadesA;
            break;
          case "J":
            cardImage =
              card.suit === "hearts"
                ? heartsJ
                : card.suit === "diamonds"
                ? diamondsJ
                : card.suit === "clubs"
                ? clubsJ
                : spadesJ;
            break;
          case "K":
            cardImage =
              card.suit === "hearts"
                ? heartsK
                : card.suit === "diamonds"
                ? diamondsK
                : card.suit === "clubs"
                ? clubsK
                : spadesK;
            break;
          case "Q":
            cardImage =
              card.suit === "hearts"
                ? heartsQ
                : card.suit === "diamonds"
                ? diamondsQ
                : card.suit === "clubs"
                ? clubsQ
                : spadesQ;
            break;
          default:
            break;
        }
      }
    } else {
      cardImage = cardBack;
    }

    return (
      <div
        key={index}
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={() => handleCardClick(card)}
      >
        <img src={cardImage} alt={`${card.rank} of ${card.suit}`} />
      </div>
    );
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
        <div className="rectangle-2">
          {/* Render cards here */}
          {deck.map(renderCard)}
        </div>
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