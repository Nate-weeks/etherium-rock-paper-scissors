//rockPaperScissors.sol - RockPaperScissorsFactory contract and rockPaperScissors
//contract - compiled and deployed to the blockchain in other scripts


pragma solidity ^0.4.17;

contract RockPaperScissorsFactory {
    address[] public deployedRockPaperScissors;
    RockPaperScissors gameContract;
    // function to create and deploy a rockPaperScissors contract and add it's
    // address to the array of addresses
    function createRockPaperScissors(uint wager, string gameName, uint numberOfGames) public payable{
        address newRockPaperScissors = new RockPaperScissors(wager, msg.sender, gameName, numberOfGames);
        gameContract = RockPaperScissors(newRockPaperScissors);
        gameContract.transfer(msg.value);
        deployedRockPaperScissors.push(newRockPaperScissors);
    }
    // return the array of addresses of deployed rockPaperScissors contracts
    function getDeployedRockPaperScissors() public view returns(address[]) {
        return deployedRockPaperScissors;
    }
}

contract RockPaperScissors {

    struct Game {
        string title;
        uint wager;
        address playerOne;
        address playerTwo;
        uint games;
        uint playerOneMove;
        uint playerTwoMove;
        uint playerOneWinCount;
        uint playerTwoWinCount;
        address winner;
        string result;
        bool completed;
    }

    address public manager;
    uint public gameWager;
    string public gameName;
    Game public game;
    uint bestOfX;

    // constructor - initiates a contract with some data
     function RockPaperScissors(uint wager, address creator, string name, uint bestOf) public payable{
        manager = creator;
        gameWager = wager;
        gameName = name;
        bestOfX = bestOf;
        Game memory newGame = Game({
            title: gameName,
            wager: gameWager,
            playerOne: manager,
            playerTwo: 0,
            games: bestOfX,
            playerOneMove: 0,
            playerTwoMove: 0,
            playerOneWinCount: 0,
            playerTwoWinCount: 0,
            winner: 0,
            result: "no games have been played yet",
            completed: false
        });
        game = newGame;
    }
    // anonomous function that allows the contract to handle value sent
    function () public payable {

    }
    // function that allows a user to send ether equal to the wager and join
    function joinGame() public payable{
        require(msg.value == gameWager);
        require(msg.sender != game.playerOne);
        require(msg.sender != game.playerTwo);
        game.playerTwo = msg.sender;
    }
    // handle for player one move
    function playerOneMove(uint move) public{
        require(msg.sender == game.playerOne);
        require(move == 1 || move == 2 || move == 3);
        require(game.playerOneMove == 0);
        game.playerOneMove = move;
        if(game.playerTwoMove != 0){
            selectWinner();
        }
    }
    // handle for player two move
    function playerTwoMove(uint move) public {
        require(msg.sender == game.playerTwo);
        require(move == 1 || move == 2 || move == 3);
        require(game.playerTwoMove == 0);
        game.playerTwoMove = move;
        if(game.playerOneMove != 0){
            selectWinner();
        }
    }
    // function called when both players have selected a move - handles for ties
    // individual game winner and winner of the whole game then transfers value
    // or resets moves as necessary
    function selectWinner() private {
        if(game.playerOneMove == game.playerTwoMove){
            game.playerOneMove = 0;
            game.playerTwoMove = 0;
            game.result = "Player One and Player Two chose the same move, Tie!";
        }
        else if(game.playerOneMove == 1 && game.playerTwoMove == 2){
            game.playerTwoWinCount += 1;
            game.result = "Player One chose Rock, Player Two chose Paper, Player Two Wins!";
        }
        else if(game.playerOneMove == 1 && game.playerTwoMove == 3){
            game.playerOneWinCount += 1;
            game.result = "Player One chose Rock, Player Two chose Scissors, Player One Wins!";
        }
        else if(game.playerOneMove == 2 && game.playerTwoMove == 1){
            game.playerOneWinCount += 1;
            game.result = "Player One chose Paper, Player Two chose Rock, Player One Wins!";
        }
        else if(game.playerOneMove == 2 && game.playerTwoMove == 3){
            game.playerTwoWinCount += 1;
            game.result = "Player One chose Paper, Player Two chose Scissors, Player Two Wins!";
        }
        else if(game.playerOneMove == 3 && game.playerTwoMove == 2){
            game.playerOneWinCount += 1;
            game.result = "Player One chose Scissors, Player Two Chose Paper, Player One Wins!";
        }
        else if(game.playerOneMove == 3 && game.playerTwoMove == 1){
            game.playerTwoWinCount += 1;
            game.result = "Player One Chose Scissors, Player Two chose Rock, Player Two Wins!";
        }
        if(game.playerOneWinCount == game.games / 2 + 1){
            game.winner = game.playerOne;
        } else {
            game.playerOneMove = 0;
            game.playerTwoMove = 0;
        }
        if(game.playerTwoWinCount == game.games / 2 +1){
            game.winner = game.playerTwo;
        } else {
            game.playerOneMove = 0;
            game.playerTwoMove = 0;
        }
        if(game.winner != 0){
            game.winner.transfer(this.balance);
            game.completed = true;
        }
    }
}
