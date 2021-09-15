import { Link } from "react-router-dom";

import "./StudentsBar.css";
import studentData from "../../StudentData/studentData";

const StudentsBar = () => {
  return (
    <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
    <div
      className="card border-light mt-2 mb-4"
      style={{ width: "98vw", maxWidth: "740px"}}
    >
      <div className="studentsBar-container pb-2 mb-0 style-3">
        {studentData.map((person) => (
          <Link to={`/profile/${person.name}`} key={person.name}>
            <img
              src={person.img}
              alt="imgStudentProfile"
              className="rounded-circle mx-1"
              width="90"
            />
          </Link>
        ))}
      </div>
    </div>
  </div>
  );
};

export default StudentsBar;
