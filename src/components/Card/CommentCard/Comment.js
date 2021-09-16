import React from "react";
import axios from "axios";

import studentData from "../../StudentData/studentData";

class Comment extends React.Component {
  state = {
    author: "",
    text: "",
    commentObject: { currentComment: "", currentAuthor: "", currentTime: "" },
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
    if (this.state.comments.length !== 0) {
      return this.state.comments.map((comment) => {
        return (
          <div className="card-body pt-3 pb-0">
          {this.renderImg(comment.currentAuthor)}
            <h6 className="card-title d-inline fw-bold">
              {comment.currentAuthor}
            </h6>
            <p className="card-text d-inline ms-2">{comment.currentComment}</p>
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  };

  handleSubmit = async (event) => {
    await this.createTime();
    this.setState({
      commentObject: {
        currentComment: this.state.currentComment,
        currentAuthor: this.state.currentAuthor,
        currentTime: this.state.currentTime,
      },
    });
    event.preventDefault();
    const commentsToPush = this.state.comments;
    commentsToPush.push(this.state.commentObject);
    const object = { comments: commentsToPush };

    try {
      const response = await axios.put(
        `https://ironrest.herokuapp.com/natSanderIronStudy/${this.props.match.params.id}`,
        object,
        this.props.history.push(
          `/comment/${this.props.match.params.id}`
        )
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  renderImg = (authorName) => {
    if (this.state.author.length !== 0) {
        const author = this.state.studentData.find((student) => student.name === authorName)
      return (
        <img
          src={
            author.img  
          }
          className="rounded-circle mx-1"
          width="30px"
          alt="perfil da pessoa"
        />
      );
    } else {
      return <div></div>;
    }
  };

  render() {
    console.log(this.state.author);
    return (
      //Autor do texto//
      <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
        <div
          className="card border-light mt-2 mb-4"
          style={{ width: "98vw", maxWidth: "740px" }}
        >
          <div className="d-flex align-items-center ms-2 my-2">
            <div className="card">
              <div className="card-body pt-3 pb-0">
              {this.renderImg(this.state.author)}
               
                <h6 className="card-title d-inline fw-bold">
                  {this.state.author}
                </h6>
                <p className="card-text d-inline ms-2">{this.state.text}</p>
              </div>

              {/* Comentários */}
              <div className="mt-3">{this.renderComments()}</div>

              {/* Input para o comentário */}
              <form onSubmit={this.handleSubmit}>
                <div className="m-4">
                  <label htmlFor="commentDropdown" className="form-label">
                    Quem é você?
                  </label>
                  <select
                    id="commentDropdown"
                    className="form-select"
                    aria-label="Select author from a menu"
                    onChange={this.handleChange}
                    value={this.state.currentAuthor}
                    name="currentAuthor"
                  >
                    <option defaultValue>Selecione o autor</option>
                    {this.students.map((name) => {
                      return (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="m-4">
                  <textarea
                    className="form-control"
                    id="commentbox"
                    rows="3"
                    placeholder="Adicione um comentário"
                    name="currentComment"
                    value={this.state.currentComment}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-light m-4 mt-0">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
