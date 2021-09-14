import { Link } from "react-router-dom";

import "./StudentsBar.css";
import studentData from "../../StudentData/studentData";

const StudentsBar = () => {
  return (
    <div className="studentsBar-container pb-3 mb-0">
      {studentData.map((person) => (
        <Link to={`/profile/${person.name}`} key={person.name}>
          <img
            src={person.img}
            alt="imgStudentProfile"
            className="rounded-circle mx-1"
            width="60"
          />
        </Link>
      ))}
    </div>
  );
};

export default StudentsBar;
