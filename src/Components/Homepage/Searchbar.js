import React from "react";

class Searchbar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.props.filterword(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <span className="form-control">
          <i className="fas fa-search"></i>
          </span>
        </div>
        <input
          type="search"
          className="form-control"
          placeholder="Buscar"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Searchbar;
