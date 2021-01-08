import React from 'react';
import ChartJS from 'chart.js';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.renderChart = this.renderChart.bind(this);
  }

  componentDidMount() {
    this.renderChart();
  }
  componentDidUpdate(prevProps) {
    if (this.props.dates !== prevProps.dates) {
      this.renderChart();
    }
  }

  renderChart() {
    var ctx = document.getElementById('myChart');
    var myChart = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: this.props.dates,
        datasets: [
          {
            label: '$',
            data: this.props.prices,
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <canvas id='myChart'></canvas>
      </div>
    );
  }
}

export default Chart;
