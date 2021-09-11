import React from "react";

class Searchbar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="form-control">
          <i class="fas fa-search"></i>
          </span>
        </div>
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Searchbar;
