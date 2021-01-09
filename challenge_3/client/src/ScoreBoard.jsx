import React from 'react';

const ScoreBoard = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr className='roundHeader'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((round, index) => {
              return <td key={index}>Round {round}</td>;
            })}
          </tr>
          <tr className='scoreTurn'>
            {props.eachTurnScore.map((turn, index) => {
              return (
                <td key={index}>
                  {turn[0]} {turn[1]}
                </td>
              );
            })}
          </tr>
          <tr className='totalScore'>
            {props.scoreOnTurnTotal.map((score, index) => {
              return <td key={index}>{score}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreBoard;
