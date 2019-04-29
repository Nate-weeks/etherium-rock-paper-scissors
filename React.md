Compiling and Deploying
============

Since my RockPaperScissors contract was written in Solidity, I needed to compile it into Ethereum Bytecode before deploying it to the Ethereum network.  To do this I used the solc compiler, version 0.4.19, which is a bit outdated now.  I wrote a script that took the contracts and outputted the compiled bytecode to a json file.  I then used that file to deploy the contract.

Deploying the contract required the use of several tools. First, when interacting with the Ethereum blockchain the easiest way to do it is through a wallet provider, which keeps track of your private key and signs/sends messages on your behalf.  I used a piece of software called metamask.  Metamask is a browser extension that acts as an Ethereum wallet.  It algorithmically generates a set of private/public keys from a specific 12-word passphrase.  These keys let you interact with the Ethereum blockchain by sending messages on the network.  In my this case, I connected to the Rinkby Test Network, which is functionally the equivalent of the main Ethereum network except you can get Ether on the network for free from a "faucet".  At the Rinkby faucet, users can request Ether at reasonable intervals, but only after posting a specific code on social media to avoid people spamming and crashing the network.  It's a great place to test the functionality of decentralized applications without spending actual Ether to deploy and interact with the contract. (https://metamask.io/)(https://faucet.rinkeby.io/)

To deploy the contract I used the web3.js library.  Web3 is basically the api for interacting with the Ethereum blockchain.  It is the only way to talk between any app you might like to write and the Ethereum network.  To sign a transaction and send it to the proper network I had to integrate one other library and a service called Infura.  To deploy a contract on the Ethereum network, one could either run their own node, or sign up for a service that runs a node and will make the transaction on your behalf.  I signed up for a free account on the Infura network.(https://infura.io/about)  To sign transactions using Web3 I also had to utilize a software library called the Truffle HD Wallet Provider.  This took the 12-word mnemonic I used to set up my metamask wallet and output the same set of private/public keys to be used for signing transactions.  I then sent a message to the rinkby network, through the Infura service, signed by my personal Ethereum account, containing the bytecode of my contract and enough gas to process the deployment of the contract.  When the message was signed into a block approximately 15 seconds after broadcasting the transaction - my contract became deployed onto the Rinkby test network.  Here's the deploy script:

```js
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/RockPaperScissorsFactory.json')

const provider = new HDWalletProvider(
  'robot april fatigue siren blade unfold normal minimum mercy series obvious bread',
  'https://rinkeby.infura.io/v3/9319195d62034106b0e7b86277444e17'
);
const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('attempting to deploy from account', accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
      .deploy({ data: compiledFactory.bytecode })
      .send({ gas: '5000000', from: accounts[0] });
  console.log('contract deployed to', result.options.address);
};
deploy();
```

If you notice in the above code, the contract I actually deploy is a factory contract for deploying games of rock-paper-scissors.  It's a rather simple contract.  It takes the arguments necessary to create a rock-paper-scissors game contract, then deploys that contract, like so:

```js
function createRockPaperScissors(uint wager, string gameName, uint numberOfGames) public payable{
    address newRockPaperScissors = new RockPaperScissors(wager, msg.sender, gameName, numberOfGames);
    gameContract = RockPaperScissors(newRockPaperScissors);
    gameContract.transfer(msg.value);
    deployedRockPaperScissors.push(newRockPaperScissors);
}
```

It also has a function that returns an array of the addresses of deployed rock-paper-scissors games.  Calls to this contract get made to display a list of games and to create a new game.

Mocha, Ganache and Web3.js
===========
[https://mochajs.org/][https://truffleframework.com/ganache][https://github.com/ethereum/web3.js/]

To set up automated tests for my contract, I utilized mocha to write simple declarative tests, Ganache to set up a local ethereum blockchain for testing purposes and web3.js to communicate between my contract and my local blockchain.

Mocha is a popular testing framework for Javascript.  I used it to set up simple, declarative tests for my contract before deploying it.  It's the only way to interact with my contract outside of testing it in remix.

The syntax for test writing is pretty straightforward and commonly seen.  There's a beforeEach helper method mocha provides that let's us set up the test environment before each test.  In this case I used ganache and web3 to create a local wallet and deploy a factory contract and a game contract to my local blockchain.  I then ran some tests that tested things like, does the contract deploy properly and have a return address? Is the proper winner picked when 2 moves are selected? The syntax used is a describe block that refers to a larger function or object (in this case my rock paper scissors contract) with nested "it" statements.  Each "it" tests a specific piece of functionality with a string that describes the expected behavior and then a series of assert statements that test for it.  Every function that makes a call to the contract interface is marked async, because all actions that interact with the blockchain take time and are dealt with asynchronously.  The async/await syntax is from ES6 and makes sure we wait for the value to be returned before moving on with our code execution.

```ruby
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
}
```

Next.js, React and the front-end (https://nextjs.org/)(https://reactjs.org/)
==========

Next.js is a framework that utilizes react and aims to ease the creation of server-side rendered front-end applications.  React is a javascript library maintained by facebook to aid in creating single-page dynamic web apps.  The main innovation in react is keeping track of a virtual DOM that gets compared with the real DOM so that when changes are made, only each individual element that actually changed gets refreshed.  This speeds up page rendering drastically.  Due to this performance upgrade, and the fact that React is an un-opinionated lightweight library that lets developers pick and choose the tools they use, it has become the most popular front-end framework on the market over the last few years.

I chose to use next.js instead of another react-based framework like facebook's create-react-app because it comes out of the box with server-side rendering.  This means that the javascript first gets run on the server and the first response to an http request is a statically rendered html template generated on the server.  Only after this template is sent to the requesting browser is the rest of the javascript bundle passed along.  With create-react-app the bundle is sent first and everything is generated client-side.  Server-side rendering results in slightly better performance, but more importantly for my application, it lets me fetch initial data from my deployed contracts using web3.js and my infura account.  This is important, because interacting with the Ethereum blockchain requires a wallet.  My app will not function unless the user is signed in to their metamask web extension. If I didn't render things server-side they would just see a blank page because they would be unable to fetch the data.  With server-side rendering they still won't be able to create a game, join a game or view a game, but they will at least see an initial list of games available on the homepage.  The code below checks if the javascript is being run on the browser (gets the account name from the metamask extension), or the server (sets the provider name to my infura account).

```js
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in browser
  web3 = new Web3(window.web3.currentProvider)
} else {
  // we are on the server or user is not using metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/9319195d62034106b0e7b86277444e17'
  );
  web3 = new Web3(provider)
}
```

Next.js has a built in routing scheme where any file in the pages directory is rendered at <website address>/<name of file>.  For instance if I had an about.js file in my pages directory, it would render at http://localhost:3000/about.  In my case I only have an index.js page, which renders by default at the root page, localhost:3000/.  By nesting folders inside of the pages directory I can add routes to my page.  I have a game folder with new.js and show.js which render at /game/new and /game/<address of the contract>.  Show.js renders a dynamic route and the address of the contract we are viewing is passed into the url.  This means that I essentially have 3 pages in my app.  The index page displays a list of games with a link to view each game and link to create a new game.  When you click the view game button you are taken to the show page for that specific game.  Here you can join the game, pick a move if you've already joined the game, and see information about the game.  The new game button takes you to a page with a form that lets you deploy a rockPaperScissors contract to create a new game.

<screenshots>

To bundle up all my dependencies I used the Node Package Manager.  Below is my package.json file, which keeps track of installed dependencies and macros.  The macros are kept in the "scripts" hash and the dependencies are kept in the "dependencies" hash.  Most of the libraries I've already talked about.  I make heavy use of semantic-ui-react, which is a library of front-end components like menus and buttons, for styling a page.  To populate this list I used npm install --save <package name> but if you clone my repository and want to install this list of packages the command is just npm install.  Dependencies get installed to node_modules.

```JSON
{
  "name": "etherium-rock-paper-scissors",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha",
    "dev": "node server.js",
    "build": "next build",
    "start": "next start -p $PORT"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "fs-extra": "^7.0.1",
    "ganache-cli": "^6.3.0",
    "mocha": "^5.2.0",
    "next": "^4.1.4",
    "next-routes": "^1.4.2",
    "react": "^16.8.3",
    "react-dom": "^16.8.3",
    "semantic-ui-react": "^0.85.0",
    "solc": "^0.4.19",
    "truffle-hdwallet-provider": "0.0.3",
    "web3": "^1.0.0-beta.35"
  }
}
```

The layout of my file-structure is pretty standard for a react app.  I have a number of individual components that get imported and rendered inside parent components that are located, in this case, in my pages directory.  Each component in React essentially has some functions for fetching data or handling user interaction, then some JSX that gets rendered to the page.  JSX is an HTML-like syntax used in React that lets you write javascript that looks like html.  Every React component has a render function that returns an HTML element, which is usually written using JSX.  This code will render a profile photo and an h1 using JSX:

```js
<div>
  <img src="profile.jpg" alt="Profile photo" />
  <h1>Welcome back Ari</h1>
</div>
```

It is functionally equivalent to this code, which could also be used in React, but looks much messier:

```js
React.createElement("div", null,
  React.createElement("img", {src: "profile.jpg", alt: "Profile photo"}),
  React.createElement("h1", null, "Welcome back Ari")
);
```

At the top of each of my components there is a selection of import statements.  This will always include React, as well as whatever components I'm rendering on the page and whichever contracts I am interacting with.  I also import quite a few components from the semantic-ui-react library to make my user interface.  The function getInitialProps comes after in my index and show components.  It's a method built into the Next.js framework that runs server-side before anything else.  In this case I am using it to fetch the initial information from my factory contract.  The getDeployedRockPaperScissors() method returns an array of deployed game contract addresses that I later render to the page using JSX and a semantic-ui-react component.

```js
import React, { Component } from 'react';
import factory from '../etherium/factory';
import Layout from '../components/Layout';
import { Card, Button } from 'semantic-ui-react';
import { Link } from '../routes';

class RockPaperScissorsIndex extends Component {
  static async getInitialProps(){
    const games = await factory.methods.getDeployedRockPaperScissors().call();

    return {games}
  }}
```

State in react is an important concept.  It's essentially a cache of variables accessible to us inside the scope of the component.  State is often used to save information inputted into form fields, to keep track of button toggles or any other type of variable data.  Here's the state hash of my new.js component:

```js
state = {
bet: '',
name: '',
bestOf: '',
errorMessage: '',
loading: false
}
```

Handling form submissions in React can be a little verbose.  The below function handles for the submission of the create a new game of rockPaperScissors form.  There's a bit to unpack here.  We first have to prevent the default submission action with event.preventDefault().  Then, because every interaction with the Ethereum blockchain takes at least 15 seconds, we set the loading variable saved in state to true.  This will cause a little spinny loading button symbol to appear until we set it to false after the transaction completes.  Then, we attempt to send a message to our factory contract using web3.js and getting the account information from the users metamask extension.  If successful, Router.pushroute('/') will re-direct us to the index page and we will see our new game in the list.  If the transaction failed we will display a message that hopefully tells the user why.  In a normal application I'd be sending this request to a database on my server, but in my application the Ethereum blockchain is essentially acting as my entire backend.

```js
onSubmit = async (event) => {
  event.preventDefault();
  this.setState({ loading: true, errorMessage: '' })
  try{
    const accounts = await web3.eth.getAccounts()
    await factory.methods.createRockPaperScissors(this.state.bet, this.state.name, this.state.bestOf)
    .send({
      from: accounts[0],
      value: this.state.bet
    })
    Router.pushRoute('/')
  } catch (err) {
    this.setState({
      errorMessage: err.message
    })
  }
    this.setState({ loading: false })
}
```

The way my rockPaperScissors game contract functions, whoever creates the game gets to set a wager and how many games will be played (best of 1, best of 3, etc.).  When a player creates a game or joins the game they have to pay ether equal to the amount of the wager.  After each player chooses a move, a winner is automatically declared, the result is displayed on the screen and the moves are reset.  Users can only pick a move if no move has already been set.  When one player wins all the Ether sent to the contract is automatically sent to the winner. Using the Ethereum blockchain as my back-end really simplifies this process in a lot of ways.  Every transaction is cryptographically secure, unalterable and get's timestamped as soon as it is confirmed.  This makes it virtually impossible to cheat and all the monetary transfers are handled securely.  However, there are some serious downsides.  The way I have it set up every time you choose a move the user will owe about 10 cents just to make the transaction.  The user also has to wait a long time - at least 30 seconds - for every transaction to complete.  Making requests to view information also take some time and the user has to be using Metamask for the application to work.

I think the potential is there for Ethereum and smart contracts to have some great use cases but right now it's all a little too slow and way too expensive.  My contracts don't use that much computing power and still cost a relatively significant amount for users to interact with.
