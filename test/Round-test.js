const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
beforeEach((done) => {
card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
deck = new Deck([card1, card2, card3]);
round = new Round(deck);
done();
});

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store the current deck', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(round.deck[0]);
  });

  it('should have no turns taken yet', function() {
    expect(round.turns).to.equal(0);
  });

  it('should be able to store the incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should allow the user to take some turns and return whether it was correct or incorrect', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
  });

  it.skip('should have 2 turns taken', function() {
    expect(round.turns).to.equal(2);
  });

  it.skip('should add the incorrect guesses\'s id', function() {
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it.skip('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(round.deck[2]);
  });

  it.skip('should calculate and return the percentage of correct guesses', function() {
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it.skip('should alert the user that the round is over and what percentage of questions they guessed correctly', function() {
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
});
