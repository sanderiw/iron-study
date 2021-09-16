import { Link } from "react-router-dom";
import studentData from "../StudentData/studentData";


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

// Função para a estilização do card

function Card(props) {
  return (
    <div
      className="card border-light mt-2 mb-4"
      style={{ width: "98vw", maxWidth: "740px" }}
    >
      <div className="d-flex align-items-center ms-2 my-2">
        <img
          src={studentData.find((student) => student.name === props.card.author).img}
          className="rounded-circle mx-1"
          width="45px"
          alt="perfil da pessoa"
        />
        <div className="d-flex flex-column">
          <span className="ms-2 mb-0 fw-bold" style={{ fontSize: "14px" }}>
            {studentData.find((student) => student.name === props.card.author).name}
          </span>
        </div>
      </div>

      <a href={props.card.url} target="_blank" rel="noreferrer">
        <img
          src={
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          }
          className="card-img-top"
          alt="..."
        />
      </a>
      <div className="card-body pt-2 pb-0">
        <Link to="/share" className="card-link text-dark">
          <i id="share" className="far fa-share-square"></i>
        </Link>
        <Link to={`/edit/${props.card._id}`} className="card-link text-dark">
          <i id="edit" className="far fa-edit"></i>
        </Link>
        <Link to={`/delete/${props.card._id}`} className="card-link text-dark">
          <i id="delete" className="far fa-trash-alt"></i>
        </Link>
      </div>
      <div className="card-body pt-3 pb-0">
        <h6 className="card-title d-inline fw-bold">{props.card.author}</h6>
        <p className="card-text d-inline ms-2">{props.card.text}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item border-light pb-0">
          <span className="fw-bold">Tags: </span>
          {props.card.tag}
        </li>
        <li className="list-group-item border-light pb-0">
          {props.card.edited ? "Editado " : "Criado "}
          {convertDate(props.card.createdTime)}
        </li>
      </ul>
    </div>
  );
}

export default Card;
