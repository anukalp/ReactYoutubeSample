import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
      super(props);

      this.state = {term : ''};
    }

    render() {
      return  (
        <div className='search-bar'>
        <input
            value= {this.state.term}
            onChange={eventObj => this.onInputChange(eventObj.target.value)}/>
        </div>
      );
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onQueryTextChange(term);
    }
}
export default SearchBar;
