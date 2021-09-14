import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import studentData from "../StudentData/studentData";

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
                return b._id.localeCompare(a._id);
            });
            this.setState({ allCards: response.data });
        } catch (error) {
            console.error(error);
        }
    };

    convertDate = (dateStr) => {
        const weekDayPtBr = [
            "Dom",
            "Seg",
            "Ter",
            "Qua",
            "Qui",
            "Qui",
            "Sex",
            "Sáb",
        ];
        const monthPtBr = [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Nov",
            "Dez",
        ];
        const date = new Date(dateStr);
        const thisYear = new Date().getFullYear();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const weekDay = date.getDay();

        return `${weekDayPtBr[weekDay]}, ${day} de ${monthPtBr[month]}${
            thisYear === year ? "" : ", " + year
        }`;
    };

    render() {
        return (
            <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
                {/* <h1 className="text-center my-2 mb-3">Feed</h1> */}
                {this.state.allCards.map((card) => {
                    return (
                        <div
                            key={card._id}
                            className="card border-light mt-2 mb-4"
                            style={{ width: "98vw", maxWidth:"740px" }}
                        >
                            <div className="d-flex align-items-center ms-2 my-2">
                                <img
                                    src={
                                        studentData.find(
                                            (student) =>
                                                student.name === card.author
                                        ).img
                                    }
                                    className="rounded-circle mx-1"
                                    width="45px"
                                    alt="perfil da pessoa"
                                />
                                <div className="d-flex flex-column">
                                    <span
                                        className="ms-2 mb-0 fw-bold"
                                        style={{ fontSize: "14px" }}
                                    >
                                        {
                                            studentData.find(
                                                (student) =>
                                                    student.name === card.author
                                            ).name
                                        }
                                    </span>
                                    <span
                                        className="ms-2 mb-0"
                                        style={{ fontSize: "14px" }}
                                    >
                                        {`Compartilhou um ${
                                            card.type === "outros"
                                                ? "conteúdo"
                                                : card.type
                                        }`}
                                    </span>
                                </div>
                            </div>

                            <a href={card.url} target="_blank" rel="noreferrer">
                                <img
                                    src={
                                        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                                    }
                                    className="card-img-top"
                                    alt="..."
                                />
                            </a>
                            <div className="card-body pt-2 pb-0">
                                <Link
                                    to="/share"
                                    className="card-link text-dark"
                                >
                                    <i
                                        id="share"
                                        className="far fa-share-square"
                                    ></i>
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
                                    <i
                                        id="delete"
                                        className="far fa-trash-alt"
                                    ></i>
                                </Link>
                            </div>
                            <div className="card-body pt-3 pb-0">
                                <h6 className="card-title d-inline fw-bold">
                                    {card.author}
                                </h6>
                                <p className="card-text d-inline ms-2">
                                    {card.text}
                                </p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-light pb-0">
                                    <span className="fw-bold">Tags: </span>
                                    {card.tag}
                                </li>
                                <li className="list-group-item border-light pb-0">
                                    {card.edited ? "Editado em " : "Criado em "}
                                    {this.convertDate(card.createdTime)}
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
