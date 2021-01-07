import React from 'react';

import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getSearchResults(this.state.search);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Historical Event: </label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={this.handleSearchChange}
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
