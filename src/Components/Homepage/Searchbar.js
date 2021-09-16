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
      this.props.onChange(this.state.searchTerm);
    }
  };

  render() {
    return (
      <div className="container mt-0 mb-0 d-flex flex-column justify-content-center align-items-center">
        <div
          className="card border-light mt-1 mb-1"
          style={{ width: "98vw", maxWidth: "740px" }}
        >
          <div className="input-group">
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
        </div>
      </div>
    );
  }
}

export default Searchbar;
