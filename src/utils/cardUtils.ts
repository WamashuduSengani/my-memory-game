interface Card {
  suit: string;
  rank: string;
  image: string;
}
export const generateDeck = () => {
  const suits = ["hearts", "diamonds", "clubs", "spades"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const jokers = ["Joker_1", "Joker_2"];

  const deck = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      const image = require(`../assets/${suit}/${rank}.png`);
      deck.push({ suit, rank, image });
    }
  }

  // Add jokers to the deck
  for (const joker of jokers) {
    const image = require(`../assets/joker/${joker}.png`);
    deck.push({ suit: "joker", rank: joker, image });
  }

  return deck;
};

export const shuffleDeck = (deck: Card[]) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};
