import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { convertDate } from "../Card";

import studentData from "../../StudentData/studentData";

class Comment extends React.Component {
    state = {
        author: "",
        text: "",
        commentObject: {
            currentComment: "",
            currentAuthor: "",
            currentTime: "",
        },
        currentComment: "",
        currentAuthor: "",
        currentTime: "",
        comments: [],
        studentData: studentData,
    };

    students = [
        "Alexandre",
        "Anna",
        "Caio",
        "Filipe",
        "Guilherme",
        "Manoel",
        "Natalia",
        "Nicollas",
        "Nilton",
        "Pedro",
        "Raul",
        "Sander",
    ];

    componentDidMount = async () => {
        try {
            const response = await axios.get(
                `https://ironrest.herokuapp.com/natSanderIronStudy/${this.props.match.params.id}`
            );
            const commentState = {
                author: response.data.author,
                text: response.data.text,
                comments: response.data.comments,
            };
            this.setState({ ...commentState });
        } catch (error) {
            console.error(error);
        }
    };

    createTime = async () => {
        return this.setState({ currentTime: new Date() });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.setState({
            commentObject: {
                currentComment: this.state.currentComment,
                currentAuthor: this.state.currentAuthor,
                currentTime: this.state.currentTime,
            },
        });
    };

    renderComments = () => {
        const commentsCopy = [...this.state.comments];

        if (commentsCopy.length !== 0) {
            commentsCopy.sort((a, b) => {
                return b.currentTime.localeCompare(a.currentTime);
            });
            return commentsCopy.map((comment, index) => {
                return (
                    <div
                        key={index}
                        className="card-body pt-3 pb-0 d-flex justify-content-between align-content-center"
                    >
                        <div className="d-flex align-items-center">
                            <div>{this.renderImg(comment.currentAuthor)}</div>
                            <div>
                                <Link
                                    to={`/profile/${comment.currentAuthor}`}
                                    className="text-decoration-none text-body"
                                >
                                    <h6 className="card-title d-inline fw-bold ms-1">
                                        {comment.currentAuthor}
                                    </h6>
                                </Link>
                                <p className="card-text d-inline ms-3">
                                    {comment.currentComment}
                                </p>
                                <p
                                    className="text-secondary ms-1 mb-0"
                                    style={{ fontSize: "12px" }}
                                >
                                    {convertDate(comment.currentTime)}
                                </p>
                            </div>
                        </div>
                        <div>
                            <Link
                                to={`/comment/delete/${comment.currentTime}/${this.props.match.params.id}`}
                                className="card-link text-dark ms-5"
                            >
                                <i id="delete" className="far fa-trash-alt"></i>
                            </Link>
                        </div>
                    </div>
                );
            });
        } else {
            return <div></div>;
        }
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.createTime();
        this.setState({
            commentObject: {
                currentComment: this.state.currentComment,
                currentAuthor: this.state.currentAuthor,
                currentTime: this.state.currentTime,
            },
        });
        const commentsToPush = [...this.state.comments];
        commentsToPush.push({ ...this.state.commentObject });
        const object = { comments: commentsToPush };
        const errors = this.validateFields(this.state);
        let isNotValid = false;
        for (let error of Object.keys(errors)) {
            if (errors[error] === true) {
                isNotValid = true;
                break;
            }
        }
        if (isNotValid) {
            this.setState({ submitFailed: true });
        } else {
            try {
                const response = await axios.put(
                    `https://ironrest.herokuapp.com/natSanderIronStudy/${this.props.match.params.id}`,
                    object
                );
                window.location.reload();
                console.log(response);
                this.setState({
                    currentComment: "",
                    currentAuthor: "",
                    currentTime: "",
                    commentObject: {
                        currentComment: this.state.currentComment,
                        currentAuthor: this.state.currentAuthor,
                        currentTime: this.state.currentTime,
                    },
                });
            } catch (error) {
                console.error(error);
            }
        }
    };

    renderImg = (authorName) => {
        if (this.state.author.length !== 0) {
            const author = this.state.studentData.find(
                (student) => student.name === authorName
            );
            return (
                <Link to={`/profile/${authorName}`}>
                    <img
                        src={author.img}
                        className="rounded-circle mx-1"
                        width="30px"
                        alt="perfil da pessoa"
                    />
                </Link>
            );
        } else {
            return <div></div>;
        }
    };

    validateFields = (state) => {
        const errors = {};
        const fields = ["currentComment", "currentAuthor"];
        for (let field of fields) {
            if (!state[field]) {
                errors[field] = true;
            } else {
                errors[field] = false;
            }
        }
        return errors;
    };

    renderValidationClass = (error) => {
        let validationClassStr = "";
        if (error) {
            validationClassStr = "is-invalid";
        } else {
            validationClassStr = "is-valid";
        }
        return validationClassStr;
    };

    render() {
        return (
            //Autor do texto//
            <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
                <div
                    className="border-light mt-2 mb-4"
                    style={{ width: "100%", maxWidth: "740px" }}
                >
                    <div className="d-flex justify-content-center ms-2 my-2 card border-light">
                        <div className="card-body pt-3 pb-0 border-light">
                            {this.renderImg(this.state.author)}

                            <h6 className="card-title d-inline fw-bold ms-1">
                                {this.state.author}
                            </h6>
                            <p className="card-text d-inline ms-2">
                                {this.state.text}
                            </p>
                        </div>

                        {/* Comentários */}
                        <div className="mt-1">{this.renderComments()}</div>

                        {/* Input para o comentário */}
                        <form onSubmit={this.handleSubmit}>
                            <div className="m-4 pt-2">
                                <label
                                    htmlFor="commentDropdown"
                                    className="form-label"
                                >
                                    Quem é você?
                                </label>
                                <select
                                    id="commentDropdown"
                                    className={`form-select mt-2 ${
                                        this.state.submitFailed
                                            ? this.renderValidationClass(
                                                  this.validateFields(
                                                      this.state
                                                  )["currentAuthor"]
                                              )
                                            : ""
                                    }`}
                                    aria-label="Select author from a menu"
                                    onChange={this.handleChange}
                                    value={this.state.currentAuthor}
                                    name="currentAuthor"
                                >
                                    <option defaultValue>
                                        Selecione seu nome
                                    </option>
                                    {this.students.map((name) => {
                                        return (
                                            <option key={name} value={name}>
                                                {name}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div className="invalid-feedback">
                                    Coloque o seu nome :)
                                </div>
                            </div>
                            <div className="m-4 mt-5">
                                <textarea
                                    className={`form-control ${
                                        this.state.submitFailed
                                            ? this.renderValidationClass(
                                                  this.validateFields(
                                                      this.state
                                                  )["currentComment"]
                                              )
                                            : ""
                                    }`}
                                    id="commentbox"
                                    rows="3"
                                    placeholder="Adicione um comentário"
                                    name="currentComment"
                                    value={this.state.currentComment}
                                    onChange={this.handleChange}
                                ></textarea>
                                <div className="invalid-feedback">
                                    Digite sua mensagem!
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-light m-4 mt-0"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;
