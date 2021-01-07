import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class PageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalEvents: 0,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(page) {
    axios({
      method: 'get',
      url: `/events?q=${this.props.query}&_page=${page.selected + 1}&_limit=10`,
    })
      .then((res) => {
        this.props.getPageEvents(res.data, page.selected + 1);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={
            this.props.totalEvents > 0
              ? Math.ceil(this.props.totalEvents / 10)
              : 8
          }
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default PageBar;
