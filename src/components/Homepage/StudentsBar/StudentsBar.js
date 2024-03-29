import { Link } from "react-router-dom";

import "./StudentsBar.css";
import studentData from "../../StudentData/studentData";

const StudentsBar = (props) => {
    const sortedStudentData = [];
    for (let card of props.state.allCards) {
        let student = studentData.find(
            (student) => student.name === card.author
        );
        if (
            !sortedStudentData.find(
                (sortedStudent) => sortedStudent.name === student.name
            )
        ) {
            sortedStudentData.push(student);
        }
    }

    for (let student of studentData) {
        if (
            !sortedStudentData.find(
                (sortedStudent) => sortedStudent.name === student.name
            )
        ) {
            sortedStudentData.push(student);
        }
    }

    return (
        <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
            <div
                className="card border-light mt-2 mb-1"
                style={{ width: "98vw", maxWidth: "740px" }}
            >
                <div className="studentsBar-container pb-2 mb-0 style-3">
                    {sortedStudentData.map((person) => (
                        <Link to={`/profile/${person.name}`} key={person.name}>
                            <img
                                src={person.img}
                                alt="imgStudentProfile"
                                className="rounded-circle mx-1"
                                width="60px"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentsBar;
