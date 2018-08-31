import React, { Component } from 'react';

class Search extends Component {

  render() {
    return (
      <div className="search">
        <h2>Search</h2>
        <form onSubmit={this.props.handleSubmit}>
        	<input 
            type="text"
            placeholder="Search the list with React" 
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
