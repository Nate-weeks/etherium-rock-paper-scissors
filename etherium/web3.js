//web3.js - handles for the establishing of an ethereum wallet to interract with
//my app - uses their metamask log-in or fetches data with my infura account if
//a local wallet is unavailable


import Web3 from 'web3';

let web3;

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

export default web3
