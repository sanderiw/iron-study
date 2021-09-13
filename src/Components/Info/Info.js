import nataliaImg from "./images/Natalia.jpeg";
import sanderImg from "./images/Sander.jpeg";

function Info() {
    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="mt-5">Desenvolvedores</h1>
            <div className="card text-center mt-5" style={{ width: "22rem" }}>
                <img
                    src={nataliaImg}
                    className="card-img-top rounded-circle"
                    alt="..."
                    style={{ width: "80%", margin: "auto" }}
                />
                <div className="card-body">
                    <h5 className="card-title">Natália Alves</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a
                        href="https://www.linkedin.com"
                        className="btn btn-light btn-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Linkedin
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        className="btn btn-light btn-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        className="btn btn-light btn-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Projects
                    </a>
                </div>
            </div>
            <div className="card text-center mt-5" style={{ width: "22rem" }}>
                <img
                    src={sanderImg}
                    className="card-img-top rounded-circle"
                    alt="..."
                    style={{ width: "80%", margin: "auto" }}
                />
                <div className="card-body">
                    <h5 className="card-title">Sander Iwase</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a
                        href="https://www.linkedin.com"
                        className="btn btn-light btn-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Linkedin
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        className="btn btn-light btn-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        className="btn btn-light btn-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Projects
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Info;
