const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
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

  calculatePercentCorrect() {
    return Math.floor(this.incorrectGuesses.length/this.turns * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
};

module.exports = Round;
