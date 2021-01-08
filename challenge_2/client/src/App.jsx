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
  handleDateSubmit(e) {
    e.preventDefault();
    axios({
      method: 'get',
      url: '/historicalPrices',
      params: {
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>BTC Historical Prices</h1>
        <form onSubmit={this.handleDateSubmit}>
          <label>
            {' '}
            Start Date
            <input
              type='date'
              name='startDate'
              value={this.state.startDate}
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
