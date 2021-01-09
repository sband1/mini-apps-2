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
    let turnOrder = 1;
    let nextRound = 0;
    let strikeAmount = 0;
    let spareAmount = 0;

    let allScores = this.state.eachTurnScore.slice();
    allScores[this.state.round][this.state.turn] = score;

    let allTotalScores = this.state.scoreOnTurnTotal.slice();
    allTotalScores[this.state.round] = score + this.state.totalScore;

    if (this.state.turn === 1) {
      turnOrder = 0;
      nextRound = 1;
    }

    // if strike, move onto next round
    if (this.state.turn === 0 && score === 10) {
      turnOrder = 0;
      nextRound = 1;
    }

    // if previous round was a strike, adjust score
    if (this.state.round !== 0 && allScores[this.state.round - 1][0] === 10) {
      allTotalScores[this.state.round - 1] += score;
      strikeAmount += score;
      allTotalScores[this.state.round] += strikeAmount;
    }

    //if pervious round was a spare, adjust score
    if (
      this.state.round !== 0 &&
      this.state.turn === 0 &&
      allScores[this.state.round - 1][0] !== 10 &&
      allScores[this.state.round - 1][0] +
        allScores[this.state.round - 1][1] ===
        10
    ) {
      allTotalScores[this.state.round - 1] += score;
      spareAmount += score;
      allTotalScores[this.state.round] += spareAmount;
    }

    this.setState({
      scoreOnTurnTotal: allTotalScores,
      eachTurnScore: allScores,
      totalScore: this.state.totalScore + score + strikeAmount + spareAmount,
      turn: turnOrder,
      round: this.state.round + nextRound,
    });
  }

  render() {
    return (
      <div>
        <ScordPad handleScore={this.handleScore} />
        <h1>Score Board</h1>
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
