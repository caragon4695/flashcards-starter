const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card;
  let turn;
beforeEach((done) => {
  card = new Card(1, 'What is Robbie\'s favorite animal',
  ['sea otter', 'pug', 'capybara'], 'sea otter');
  turn = new Turn('pug', card);
  done();
});

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store the user\'s guess to a question', function() {
    expect(turn.guess).to.equal('pug');
  });

  it('should store the current card object in play', function() {
    expect(turn.card).to.deep.equal(card);
  });

  it('should be able to return the current guess', function() {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should be able to return the current card', function() {
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should be able to return false if the guess doesn\'t match the correct answer', function() {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to return whether the guess was incorrect', function() {
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
