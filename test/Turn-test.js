const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store the user\'s guess to a question', function() {
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it.skip('should store the current card object in play', function() {
    const turn = new Turn('cat', card);
    expect(turn.currentCard).to.equal(card);
  });

  it.skip('should be able to return the current guess', function() {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it.skip('should be able to return the current card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it.skip('should be able to return a boolean if the guess matches the correct answer', function() {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should be able to return whether the gues was correct or incorrect', function() {
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
