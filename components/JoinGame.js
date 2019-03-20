import React, { Component } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';
import Game from '../etherium/game';
import web3 from '../etherium/web3.js';
import { Router } from '../routes';

class JoinGame extends Component {
  state = {
    errorMessage: '',
    loading: false
  };

  onClick = async event => {
    event. preventDefault();

    const game = Game(this.props.address)

    this.setState({ loading: true})

    try {
      const accounts = await web3.eth.getAccounts();
      await game.methods.joinGame().send({
        from: accounts[0],
        value: this.props.wager
      });

      Router.replaceRoute(`/game/${this.props.address}`)
    } catch (err) {
      this.setState({ errorMessage: err.message});
      console.log(this.state.errorMessage)
    }

    this.setState({ loading: false })
  };

  render(){
    return (
      <Form error={!!this.state.errorMessage}>
        <Button primary loading={this.state.loading} onClick = {this.onClick}>
          Join Game
        </Button>
        <Message error header="Oops!" content={this.state.errorMessage}/>
      </Form>
    );
  }
}

export default JoinGame
