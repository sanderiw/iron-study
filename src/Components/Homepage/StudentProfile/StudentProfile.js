import React from "react";

import studentData from "../../StudentData/studentData"

class StudentProfile extends React.Component {
  state = {
    name: "",
    img: "",
    phrase: ""
  };

  componentDidMount() {
    const studentName = this.props.match?.params.name
    
    const studentProfile = studentData.find(student => student.name === studentName)

   this.setState({...studentProfile})
  }

  render() {

    return (
        <div className="row gutters-sm">
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
                  <button className="btn btn-primary">Posts</button>
                  <button className="btn btn-outline-primary">Statistics</button>
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
