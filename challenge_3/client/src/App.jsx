import React from 'react';
import ScordPad from './ScorePad.jsx';
import ScoreBoard from './ScoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eachTurnScore: [
        ['-', '-'],
        ['-', '-'],
        ['-', '-'],
        ['-', '-'],
        ['-', '-'],
        ['-', '-'],
        ['-', '-'],
        ['-', '-'],
        ['-', '-'],
        ['-', '-'],
      ],
      scoreOnTurnTotal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      totalScore: 0,
      turn: 0,
      round: 0,
    };
    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(amount) {
    let score = Number.parseInt(amount);
    let allScores = this.state.eachTurnScore.slice();
    allScores[this.state.round][this.state.turn] = score;
    let allTotalScores = this.state.scoreOnTurnTotal.slice();
    allTotalScores[this.state.round] = score + this.state.totalScore;

    let turnOrder = 1;
    let nextRound = 0;

    if (this.state.turn === 1) {
      turnOrder = 0;
      nextRound = 1;
    }

    this.setState({
      scoreOnTurnTotal: allTotalScores,
      eachTurnScore: allScores,
      totalScore: this.state.totalScore + score,
      turn: turnOrder,
      round: this.state.round + nextRound,
    });
  }

  render() {
    return (
      <div>
        <ScordPad handleScore={this.handleScore} />
        <h3>Total Score: {this.state.totalScore}</h3>
        <ScoreBoard
          eachTurnScore={this.state.eachTurnScore}
          scoreOnTurnTotal={this.state.scoreOnTurnTotal}
        />
      </div>
    );
  }
}

export default App;
