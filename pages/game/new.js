//new.js - form for creating a new game of rockPaperScissors

import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../etherium/factory';
import web3 from '../../etherium/web3';
import {Router} from '../../routes';

class GameNew extends Component {
  state = {
  bet: '',
  name: '',
  bestOf: '',
  errorMessage: '',
  loading: false
}

// handles the submission of the new form, creates a new rockPaperScissors game
onSubmit = async (event) => {
  event.preventDefault();
  this.setState({ loading: true, errorMessage: '' })  // loading ticker on
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
      errorMessage: err.message  // set the error message
    })
  }
    this.setState({ loading: false })  // loading ticker off
}

  render(){
    return(
      <Layout>
      <h1> Create a new rockPaperScissors Game</h1>
        <Form error={!!this.state.errorMessage} onSubmit= {this.onSubmit}>
          <Form.Field>
            <label>
            Game Name
            </label>
            <Input
            label="name"
            labelPosition="right"
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
             />
          </Form.Field>
          <Form.Field>
            <label>
            Bet
            </label>
            <Input
            label="wei"
            labelPosition="right"
            value={this.state.bet}
            onChange={event => this.setState({ bet: event.target.value })}
             />
          </Form.Field>
          <Form.Field>
            <label>
            Best of How Many Games?
            </label>
            <Input
            label="odd number"
            labelPosition="right"
            value={this.state.bestOf}
            onChange={event => this.setState({ bestOf: event.target.value })}
             />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>Create!</Button>
        </Form>

      </Layout>
    )
  }
}

export default GameNew
