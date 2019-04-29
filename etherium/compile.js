//compile.js - compiles rockPaperScissors.json and RockPaperScissorsFactory.json
//from solidity - the json compilation objects include bytecode and an ABI for
//web3 to interface with.

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const rockPaperScissorsPath = path.resolve(__dirname, 'contracts', 'RockPaperScissors.sol');
const source = fs.readFileSync(rockPaperScissorsPath, 'utf-8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
