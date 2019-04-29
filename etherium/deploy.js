//deploy.js - uses the HDWallerProvider and my ethereum account to deploy a
//RockPaperScissorsFactory contract to the rinkeby network

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
