const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.deck[this.turns];
  };

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (currentTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(currentTurn.card.id);
    }
    return currentTurn.giveFeedback();
  };
};

module.exports = Round;
