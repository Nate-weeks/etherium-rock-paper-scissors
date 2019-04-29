//SelectMove.js - form that handles for the selection of a move in a radio-button menu

import React, { Component } from 'react';
import { Checkbox, Form, Input, Message, Button } from 'semantic-ui-react';
import Game from '../etherium/game';
import web3 from '../etherium/web3.js';
import { Router } from '../routes';


class SelectMove extends Component {
  state = {
    selected: '1',
    loading: false,
    errorMessage:''
  }

  // function handles for the click of radio buttons
  handleChange = (e, { value }) => this.setState({selected: value })

  // handles for the submission of a move - re-renders the page after success or fail
  onSubmit = async (event) => {
    event.preventDefault();
    const game = Game(this.props.address)
    this.setState({ loading: true, errorMessage: '' })
    // handle for player 1 move
    if(this.props.player == this.props.playerOne){
    try{
      await game.methods.playerOneMove(this.state.selected)
      .send({
        from: this.props.player
      })
      Router.pushRoute(`/game/${this.props.address}`)
    } catch (err) {
      this.setState({
        errorMessage: err.message
      })
    }
      this.setState({ loading: false })
    } else {
      // handle for player 2 move
      try{
        await game.methods.playerTwoMove(this.state.selected)
        .send({
          from: this.props.player
        })
        Router.pushRoute(`/game/${this.props.address}`)
      } catch (err) {
        this.setState({
          errorMessage: err.message
        })
      }
        this.setState({ loading: false })
    }
  }

  render() {
    return (
      <Form error ={!!this.state.errorMessage} onSubmit={this.onSubmit}>
        <Form.Field>
          Select a Move!
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Rock'
            name='checkboxRadioGroup'
            value='1'
            checked={this.state.selected === '1'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Paper'
            name='checkboxRadioGroup'
            value='2'
            checked={this.state.selected === '2'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Scissors'
            name='checkboxRadioGroup'
            value='3'
            checked={this.state.selected === '3'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>Choose your Move!</Button>
      </Form>
    )
  }
}

export default SelectMove
