pragma solidity ^0.4.17;

contract RockPaperScissorsFactory {
    address[] public deployedRockPaperScissors;

    function createRockPaperScissors(uint wager, string gameName, uint numberOfGames) public {
        address newRockPaperScissors = new RockPaperScissors(wager, msg.sender, gameName, numberOfGames);
        deployedRockPaperScissors.push(newRockPaperScissors);
    }

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
        bool completed;
    }

    address public manager;
    uint public gameWager;
    string public gameName;
    Game public game;
    uint bestOfX;


     function RockPaperScissors(uint wager, address creator, string name, uint bestOf) public {
        manager = creator;
        gameWager = wager;
        gameName = name;
        bestOfX = bestOf;
    }

    function createGame() public payable{
        require(msg.sender == manager);
        require(msg.value == gameWager);
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
            completed: false
        });
        game = newGame;
    }

    function joinGame() public payable{
        require(msg.value == gameWager);
        game.playerTwo = msg.sender;
    }

    function playerOneMove(uint move) public{
        require(msg.sender == game.playerOne);
        require(move == 1 || move == 2 || move == 3);
        require(game.playerOneMove == 0);
        game.playerOneMove = move;
        if(game.playerTwoMove != 0){
            selectWinner();
        }
    }

    function playerTwoMove(uint move) public {
        require(msg.sender == game.playerTwo);
        require(move == 1 || move == 2 || move == 3);
        require(game.playerTwoMove == 0);
        game.playerTwoMove = move;
        if(game.playerOneMove != 0){
            selectWinner();
        }
    }

    function selectWinner() private {
        if(game.playerOneMove == game.playerTwoMove){
            game.playerOneMove = 0;
            game.playerTwoMove = 0;
        }
        else if(game.playerOneMove == 1 && game.playerTwoMove == 2){
            game.playerOneWinCount += 1;
        }
        else if(game.playerOneMove == 1 && game.playerTwoMove == 3){
            game.playerTwoWinCount += 1;
        }
        else if(game.playerOneMove == 2 && game.playerTwoMove == 1){
            game.playerTwoWinCount += 1;
        }
        else if(game.playerOneMove == 2 && game.playerTwoMove == 3){
            game.playerOneWinCount += 1;
        }
        else if(game.playerOneMove == 3 && game.playerTwoMove == 2){
            game.playerTwoWinCount += 1;
        }
        else if(game.playerOneMove == 3 && game.playerTwoMove == 1){
            game.playerTwoWinCount += 1;
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
