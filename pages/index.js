import React, { Component } from 'react';
import factory from '../etherium/factory';

class RockPaperScissorsIndex extends Component {
  static async getInitialProps(){
    const games = await factory.methods.getDeployedRockPaperScissors().call();

    return {games}
  }

  render() {
    console.log(this.props.games)
    return(
      <div>
        {this.props.games}
      </div>
    )
  }
}

export default RockPaperScissorsIndex
