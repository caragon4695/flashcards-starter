const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', function() {
  let game;
beforeEach((done) => {
  game = new Game();
});
  it.skip('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it.skip('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should keep track of the current round', function() {
    expect(game.currentRound).to.equal(round)
  })

  it.skip('should start the flash cards game', function() {
    game.start()
    expect(game.start()).to.eqaul()
  });
});
