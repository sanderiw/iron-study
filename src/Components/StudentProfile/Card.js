import { Link } from "react-router-dom";

function Card({ id, edited, url, author, text, tag, createdTime }) {
  return (
    <div key={id} className="card mt-2 mb-5" style={{ width: "100vw" }}>
      <p className="m-0 text-dark">{edited ? "Edited" : ""}</p>
      <a href={url} target="_blank" rel="noreferrer">
        <img
          src={
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          }
          className="card-img-top"
          alt="..."
        />
      </a>
      <div className="card-body">
        <Link to="/share" className="card-link text-dark">
          <i id="share" className="far fa-share-square"></i>
        </Link>
        <Link to={`/edit/${id}`} className="card-link text-dark">
          <i id="edit" className="far fa-edit"></i>
        </Link>
        <Link to={`/delete/${id}`} className="card-link text-dark">
          <i id="delete" className="far fa-trash-alt"></i>
        </Link>
      </div>
      <div className="card-body">
        <h5 className="card-title">{author}</h5>
        <p className="card-text">{text}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{tag}</li>
        <li className="list-group-item">{author}</li>
        <li className="list-group-item">{createdTime}</li>
      </ul>
    </div>
  );
}

export default Card;