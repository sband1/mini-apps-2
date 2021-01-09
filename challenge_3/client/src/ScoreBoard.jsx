import React from 'react';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <table>
          <tbody onClick={this.handleClick}>
            <tr className='roundHeader'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((round) => {
                return <td>Round {round}</td>;
              })}
            </tr>
            <tr className='scoreTurn'>
              {this.props.eachTurnScore.map((turn) => {
                return (
                  <td>
                    {turn[0]} {turn[1]}
                  </td>
                );
              })}
            </tr>
            <tr className='totalScore'>
              {this.props.scoreOnTurnTotal.map((score) => {
                return <td>{score}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ScoreBoard;
