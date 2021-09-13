import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class Feed extends React.Component {
    state = {
        allCards: [],
    };

    componentDidMount = async () => {
        try {
            const response = await axios.get(
                "https://ironrest.herokuapp.com/natSanderIronStudy"
            );
            response.data.sort((a, b) => {
                return b._id.localeCompare(a._id)
            })
            this.setState({ allCards: response.data });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className="container mt-2 mb-4 d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center my-2 mb-3">Feed</h1>
                {this.state.allCards.map((card) => {
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
                            <div
                                className="card-body"
                            >
                                <Link to="/share" className="card-link text-dark">
                                    <i
                                        id="share"
                                        class="far fa-share-square"
                                    ></i>
                                </Link>
                                <Link to={`/edit/${card._id}`} className="card-link text-dark">
                                    <i id="edit" class="far fa-edit"></i>
                                </Link>
                                <Link to={`/delete/${card._id}`} className="card-link text-dark">
                                    <i id="delete" class="far fa-trash-alt"></i>
                                </Link>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{card.author}</h5>
                                <p className="card-text">{card.text}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{card.tag}</li>
                                <li className="list-group-item">
                                    {card.author}
                                </li>
                                <li className="list-group-item">
                                    {card.createdTime}
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Feed;
