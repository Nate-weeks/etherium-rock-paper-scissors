//rockPaperScissors.test.js - tests for the rockPaperScissors and RockPaperScissorsFactory
//contracts 


const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// local blockchain as the provider
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../etherium/build/RockPaperScissorsFactory.json')
const compiledrockPaperScissors = require('../etherium/build/RockPaperScissors.json')

let accounts;
let factory;
let rockPaperScissors;
let game;


beforeEach(async () => {
  // before each test get some new fake accounts
  accounts = await web3.eth.getAccounts();
  // deploy a factory contract
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '5000000' });
  // deploy a game contract
  await factory.methods.createRockPaperScissors(10000, 'game one', 3).send({
    value: 10000,
    from: accounts[0],
    gas: '5000000'
  });
  // get the interface for the game
  [rockPaperScissors] = await factory.methods.getDeployedRockPaperScissors().call();
  game = await new web3.eth.Contract(
    JSON.parse(compiledrockPaperScissors.interface),
    rockPaperScissors
  );
  // join a game with second account
  await game.methods.joinGame().send({
    value: 10000,
    gas: 100000,
    from: accounts[1]
  })
});

describe('rockPaperScissors', () => {
  it('deploys a factory and a game', () => {
    assert.ok(factory.options.address);
    assert.ok(game.options.address);
  });

  it('marks contract creator as playerOne', async () => {
    const gameOne = await game.methods.game().call()
    assert.equal(accounts[0], gameOne.playerOne);
  });

  it('marks the first person to join a game as playerTwo', async () => {
    const gameOne = await game.methods.game().call();
    assert.equal(accounts[1], gameOne.playerTwo);
  });

  it('picks the proper winner if playerone and playertwo choose 1 and 2', async () => {
    await game.methods.playerOneMove(1).send({
      gas: 1000000,
      from: accounts[0]
    })
    await game.methods.playerTwoMove(2).send({
      gas: 1000000,
      from: accounts[1]
    })
    const gameOne = await game.methods.game().call();
    assert.equal(1, gameOne.playerTwoWinCount);
    assert.equal(0, gameOne.playerOneWinCount);
    assert.equal(0, gameOne.winner);
    assert.equal(false, gameOne.completed)
  })

  it('picks the proper winner after player 2 wins twice and sets completed true', async () => {
    await game.methods.playerOneMove(1).send({
      gas: 1000000,
      from: accounts[0]
    })
    await game.methods.playerTwoMove(2).send({
      gas: 1000000,
      from: accounts[1]
    })
    await game.methods.playerOneMove(1).send({
      gas: 1000000,
      from: accounts[0]
    })
    await game.methods.playerTwoMove(2).send({
      gas: 1000000,
      from: accounts[1]
    })
    const gameOne = await game.methods.game().call();
    assert.equal(accounts[1], gameOne.winner)
    assert.equal(true, gameOne.completed)
  })
});
