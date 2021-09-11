import cards from "../Card/Cards";

function Feed() {
    return (
        <div className="container mt-2 mb-4 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center my-2 mb-3">Feed</h1>
            {cards.map((card) => {
                return (
                    <div className="card mt-4" style={{ width: "100vw" }}>
                        <img
                            src={
                                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                            }
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{card.author}</h5>
                            <p className="card-text">{card.text}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{card.tag}</li>
                            <li className="list-group-item">{card.author}</li>
                            <li className="list-group-item">
                                {card.createdTime}
                            </li>
                        </ul>
                        {/* <div className="card-body">
                        <a href="#" className="card-link">
                            Card link
                        </a>
                        <a href="#" className="card-link">
                            Another link
                        </a>
                    </div> */}
                    </div>
                );
            })}
        </div>
    );
}

export default Feed;
