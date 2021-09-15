import React from "react";
import axios from "axios";

import studentData from "../StudentData/studentData";
import StudentReport from "./StudentReport";
import StudentFeed from "./StudentFeed";

class StudentProfile extends React.Component {
  state = {
    name: "",
    img: "",
    phrase: "",
    showPublications: true,
    showReport: false,
    studentCards: [],
    studentName: this.props.match.params.name,
  };

  componentDidMount() {
    const studentProfile = studentData.find(
      (student) => student.name === this.state.studentName
    );

    this.setState({ ...studentProfile });

    this.fetchStudentCards();
  }

  fetchStudentCards = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/natSanderIronStudy"
      );
      this.setState({
        studentCards: [
          ...response.data.filter(
            (studentCard) => studentCard.author === this.state.studentName
          ),
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleShowReport = () => {
    if (!this.state.showReport) {
      this.setState({
        showReport: true,
        showPublications: false,
      });
    }
  };

  handleShowPublications = () => {
    if (!this.state.showPublications) {
      this.setState({
        showPublications: true,
        showReport: false,
      });
    }
  };

  render() {
    return (
      <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
        <div
          className="card border-light mt-2 mb-4"
          style={{ width: "98vw", maxWidth: "740px" }}
        >
          <div>
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={this.state.img}
                    alt={this.state.name}
                    className="rounded-circle"
                    width="120"
                  />
                  <div className="mt-3">
                    <h4>{this.state.name}</h4>
                    <p className="text-secondary mb-1">{this.state.phrase}</p>
                    <div>
                      <button
                        className="btn btn-outline-primary me-2 mt-1"
                        onClick={this.handleShowPublications}
                      >
                        Publicações
                      </button>

                      <button
                        className="btn btn-outline-primary ms-2 mt-1"
                        onClick={this.handleShowReport}
                      >
                        Relatório
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {this.state.showReport ? (
            <StudentReport name={this.state.studentName} />
          ) : (
            <StudentFeed cards={this.state.studentCards} />
          )}
        </div>
      </div>
    );
  }
}

export default StudentProfile;
