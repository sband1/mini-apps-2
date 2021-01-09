import React from 'react';

class ScorePad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.innerHTML);
    this.props.handleScore(e.target.innerHTML);
  }
  render() {
    return (
      <div>
        <h1>Select Your Score!</h1>
        <table>
          <tbody onClick={this.handleClick}>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <td></td>
              <td>10</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ScorePad;
