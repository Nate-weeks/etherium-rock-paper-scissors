import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Game from '../../etherium/game';
import web3 from '../../etherium/web3';
import { Card, Grid, Button } from 'semantic-ui-react';
import JoinGame from '../../components/JoinGame';
import SelectMove from '../../components/SelectMove'


class GameShow extends Component {
  state = {
    player: ''
  }
  static async getInitialProps(props){
    const game = Game(props.query.address)

    const summary = await game.methods.game().call();

    return {
      address: props.query.address,
      title: summary[0],
      wager: summary[1],
      playerOne: summary[2],
      playerTwo: summary[3],
      games: summary[4],
      playerOneMove: summary[5],
      playerTwoMove: summary[6],
      playerOneWinCount: summary[7],
      playerTwoWinCount: summary[8],
      winner: summary[9],
      result: summary[10],
      completed: summary[11]
    }
  }

  async componentDidMount() {
    const players = await web3.eth.getAccounts();
    this.setState({player: players[0]})
  }

  renderInfo(){
    const {
      playerOneMove,
      playerTwoMove,
      playerOneWinCount,
      playerTwoWinCount,
      winner,
      result,
      completed,
    } = this.props

    let complete;
    if(completed == true){
      complete = "true"
    } else {
      complete = "false"
    }

    const items = [
      {
        header: "results",
        meta: result
      },
      {
        header: "Games Player One has won",
        meta: playerOneWinCount,
        description: `${this.props.playerOne}`,
        style: { overflowWrap: 'break-word' }
      },
      {
        header: "Games Player Two has won",
        meta: playerTwoWinCount,
        description: `${this.props.playerTwo}`,
        style: { overflowWrap: 'break-word' }
      },
      {
        header: "Who won the game?",
        meta: winner,
        style: { overflowWrap: 'break-word' }
      },
      {
        header: "game completed?",
        meta: complete
      },
      {
        header: `Join game for ${this.props.wager} wei`,
        meta: <JoinGame address={this.props.address} wager ={this.props.wager} playerOne={this.props.playerOne}/>,
        style: { textAlign: 'center'}
      }
    ]

    return <Card.Group items={items}/>
  }
  render(){
    return(
      <Layout>
      <h1> {`Welcome to ${this.props.title}`} </h1>
        <h2> The Wager is:</h2>
        <h2> {`${web3.utils.fromWei(this.props.wager, 'ether')} ether`}</h2>
        <h3> {`It is best of ${this.props.games}`}</h3>
        {this.renderInfo()}
        <SelectMove
        player = {this.state.player}
        address = {this.props.address}
        playerOne = {this.props.playerOne}
        playerTwo = {this.props.playerTwo}
        />
      </Layout>
    )
  }
}

export default GameShow
