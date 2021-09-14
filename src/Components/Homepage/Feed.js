import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import Searchbar from "../../components/Homepage/Searchbar";

class Feed extends React.Component {
  state = {
    filteredCards: [],
    allCards: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/natSanderIronStudy"
      );
      response.data.sort((a, b) => {
        return b._id.localeCompare(a._id);
      });
      this.setState({ allCards: response.data, filteredCards: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  filterCards = (searchTerm) => {
    const normalizedSearchTerm = searchTerm.toLowerCase();

    if (!searchTerm) {
      return this.setState({ filteredCards: [...this.state.allCards] });
    }

    const allCardsClone = [...this.state.allCards];

    //O filter recebe uma callback que precisa retornar boolean

    const filtered = allCardsClone.filter((textCard) => {
      const hasAuthor = textCard.author
        .toLowerCase()
        .includes(normalizedSearchTerm);
      const hasText = textCard.text
        .toLowerCase()
        .includes(normalizedSearchTerm);
      const hasTag = textCard.tag.toLowerCase().includes(normalizedSearchTerm);

      return hasAuthor || hasText || hasTag;
    });

    this.setState({ filteredCards: [...filtered] });
  };

  render() {
    return (
      <div>
        <Searchbar onChange={this.filterCards} />
        <div className="container mt-2 mb-4 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center my-2 mb-3">Feed</h1>
          {this.state.filteredCards.map((card) => {
            return (
              <div
                key={card._id}
                className="card mt-2 mb-5"
                style={{ width: "100vw" }}
              >
                <p className="m-0 text-dark">{card.edited ? "Edited" : ""}</p>
                <a href={card.url} target="_blank" rel="noreferrer">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    }
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="card-body">
                  <Link to="/share" className="card-link text-dark">
                    <i id="share" className="far fa-share-square"></i>
                  </Link>
                  <Link
                    to={`/edit/${card._id}`}
                    className="card-link text-dark"
                  >
                    <i id="edit" className="far fa-edit"></i>
                  </Link>
                  <Link
                    to={`/delete/${card._id}`}
                    className="card-link text-dark"
                  >
                    <i id="delete" className="far fa-trash-alt"></i>
                  </Link>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{card.author}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{card.tag}</li>
                  <li className="list-group-item">{card.author}</li>
                  <li className="list-group-item">{card.createdTime}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Feed;
