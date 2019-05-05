//index.js - landing page for the app, displays a list of game addresses


import React, { Component } from 'react';
import factory from '../etherium/factory';
import Layout from '../components/Layout';
import { Card, Button } from 'semantic-ui-react';
import { Link } from '../routes';

class RockPaperScissorsIndex extends Component {
  // initial method to get the array of rockPaperScissors games
  static async getInitialProps(){
    const games = await factory.methods.getDeployedRockPaperScissors().call();

    return {games}
  }

//function returns a list of game addresses and displays them as links
  renderGames(){
  const items = this.props.games.map(address => {
    return {
      header: address,
      description: (
        <Link route='game' params= {{address: `${address}`}}>
          <a>View Game</a>
        </Link>
    ),
      fluid: true
    }
  });
  return <Card.Group items={items}/>
}

  render() {
    return(
      <Layout>
        <div>
          <h3>Open Games</h3>
          <Link route='/game/new'>
            <a>
              <Button
              content = "Create game"
              icon = "add circle"
              primary
              />
            </a>
          </Link>
            {this.renderGames()}
        </div>
      </Layout>
    )
  }
}

export default RockPaperScissorsIndex
