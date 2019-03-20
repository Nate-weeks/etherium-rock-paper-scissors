import web3 from './web3';

import RockPaperScissorsFactory from './build/RockPaperScissorsFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(RockPaperScissorsFactory.interface),
  '0x6f9Da511AFA84612D01fAdF71e7cd28fF0b96fC0'
);

export default instance;
