import React from 'react';
import Search from './Search.jsx';
import PageBar from './PageBar.jsx';
import Events from './Events.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      pageEvents: [],
      page: '',
      totalEvents: 0,
    };
    this.getSearchResults = this.getSearchResults.bind(this);
    this.getPageEvents = this.getPageEvents.bind(this);
  }

  getSearchResults(searchTerm) {
    this.setState({
      query: searchTerm,
    });
    axios({
      method: 'get',
      url: `/events?q=${searchTerm}&_page=${1}&_limit=10`,
    })
      .then((res) => {
        this.setState({
          pageEvents: res.data,
          totalEvents: Number.parseInt(res.headers['x-total-count']),
        });
      })
      .catch((err) => console.log(err));
  }

  getPageEvents(events, number) {
    this.setState({
      pageEvents: events,
      page: number,
    });
  }

  render() {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <Search getSearchResults={this.getSearchResults} />
        {this.state.pageEvents.length > 0 ? (
          <div>
            {' '}
            <Events events={this.state.pageEvents} />
            <PageBar
              query={this.state.query}
              getPageEvents={this.getPageEvents}
              totalEvents={this.state.totalEvents}
            />{' '}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
