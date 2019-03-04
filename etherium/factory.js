import web3 from './web3';

import RockPaperScissorsFactory from './build/RockPaperScissorsFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(RockPaperScissorsFactory.interface),
  '0xE6168ab7c83F3904a949ddD6bA3Aad0CF969C461'
);

export default instance;
