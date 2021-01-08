import React from 'react';
import Chart from './Chart.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      data: [],
    };
    this.handleDateSubmit = this.handleDateSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleDateSubmit() {
    e.preventDefault();
    axios({
      method: 'get',
      url: '/historicalPrices',
      params: {
        startDate: this.startDate,
        endDate: this.endDate,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleDateSubmit}>
          <label>
            {' '}
            Start Date
            <input
              type='date'
              name='startDate'
              value={this.state.startDate}
              require={true}
              onChange={this.handleDateChange}
            ></input>
          </label>
          <label>
            {' '}
            End Date
            <input
              type='date'
              type='date'
              name='endDate'
              value={this.state.endDate}
              require={true}
              onChange={this.handleDateChange}
            ></input>
          </label>
          <button type='submit'>Submit</button>
        </form>
        <Chart />
      </div>
    );
  }
}

export default App;
