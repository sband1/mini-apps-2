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
            <tr>
              {this.props.eachTurnScore.map((turn) => {
                return (
                  <td>
                    {turn[0]} {turn[1]}
                  </td>
                );
              })}
            </tr>
            <tr>
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
