import React from 'react';
import ScordPad from './ScorePad.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreOnTurn: 0,
      totalScore: 0,
      round: 0,
    };
    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(score) {
    let amount = Number.parseInt(score);
    this.setState({
      scoreOnTurn: amount,
      totalScore: this.state.totalScore + amount,
      round: 1,
    });
  }

  render() {
    return (
      <div>
        <ScordPad handleScore={this.handleScore} />
        <h3>Total Score: {this.state.totalScore}</h3>
      </div>
    );
  }
}

export default App;
