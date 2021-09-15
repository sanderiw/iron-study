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
    this.setState((state) => ({
      showPublications: !state.showPublications,
      showReport: !state.showReport,
    }));
  };

  render() {
    return (
      <div className="row gutters-sm d-flex justify-content-around mt-3">
        <div className="col-md-4 mb-3">
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
                      onClick={this.handleShowReport}
                    >
                      Publicações
                    </button>

                    <button
                      className="btn btn-outline-primary ms-2 mt-1"
                      onClick={this.handleShowReport}
                    >
                      Relatório
                    </button>

                    {this.state.showReport ? (
                      <StudentReport />
                    ) : (
                      <StudentFeed cards={this.state.studentCards} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentProfile;
