import { Link } from "react-router-dom";
import studentData from "../StudentData/studentData";
import Video from "../Video";
//import LinkPreview from "../LinkPreview";
import ReactLinkPreview from "../ReactLinkPreview";

//Funções para ajuste da Data

const isToday = (date) => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
};

const isYesterday = (date) => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() - 1 &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
};

const convertDate = (dateStr) => {
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
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let phrase = "";
    if (isToday(date)) {
        phrase = `hoje as ${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}`;
    } else if (isYesterday(date)) {
        phrase = `ontem as ${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}`;
    } else {
        phrase = `${weekDayPtBr[weekDay]}, ${day} de ${monthPtBr[month]}${
            thisYear === year ? "" : ", " + year
        }`;
    }

    return phrase;
};

const renderPreview = (type, url) => {
    if (type === "video") {
        return <Video url={url} />;
    } else {
        return (
          <ReactLinkPreview url={url} />
        );
    }
};

function Card(props) {
    return (
        <div
            className="card border-light mt-2 mb-4"
            style={{ width: "98vw", maxWidth: "740px" }}
        >
            <div className="d-flex align-items-center ms-2 my-2">
                <Link
                    to={`/profile/${
                        studentData.find(
                            (student) => student.name === props.card.author
                        ).name
                    }`}
                >
                    <img
                        src={
                            studentData.find(
                                (student) => student.name === props.card.author
                            ).img
                        }
                        className="rounded-circle mx-1"
                        width="45px"
                        alt="perfil da pessoa"
                    />
                </Link>

                <div className="d-flex flex-column">
                    <Link
                        className="text-decoration-none text-body"
                        to={`/profile/${
                            studentData.find(
                                (student) => student.name === props.card.author
                            ).name
                        }`}
                    >
                        <span
                            className="ms-2 mb-0 fw-bold"
                            style={{ fontSize: "14px" }}
                        >
                            {
                                studentData.find(
                                    (student) =>
                                        student.name === props.card.author
                                ).name
                            }
                        </span>
                    </Link>

                    <span className="ms-2 mb-0" style={{ fontSize: "14px" }}>
                        {`Compartilhou um ${
                            props.card.type === "outros"
                                ? "conteúdo"
                                : props.card.type
                        }`}
                    </span>
                </div>
            </div>

            <a href={props.card.url} target="_blank" rel="noreferrer" className="text-decoration-none text-body">
                {renderPreview(props.card.type, props.card.url)}
            </a>
            <div className="card-body pt-2 pb-0 d-flex justify-content-between mx-0">
                <div>
                    <Link to="/comment" className="card-link text-dark">
                        <i id="comment" className="far fa-comment"></i>
                    </Link>
                    <Link
                        to={`/edit/${props.card._id}`}
                        className="card-link text-dark"
                    >
                        <i id="edit" className="far fa-edit"></i>
                    </Link>
                </div>
                <div>
                    <Link
                        to={`/delete/${props.card._id}`}
                        className="card-link text-dark"
                    >
                        <i id="delete" className="far fa-trash-alt"></i>
                    </Link>
                </div>
            </div>
            <div className="card-body pt-3 pb-0">
                <h6 className="card-title d-inline fw-bold">
                    {props.card.author}
                </h6>
                <p className="card-text d-inline ms-2">{props.card.text}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item border-light pb-0">
                    <span className="fw-bold">Tags: </span>
                    {props.card.tag}
                </li>
                <li
                    className="list-group-item border-light pb-0 text-secondary"
                    style={{ fontSize: "14px" }}
                >
                    {props.card.edited ? "Editado " : "Criado "}
                    {convertDate(props.card.createdTime)}
                </li>
            </ul>
        </div>
    );
}

export default Card;
