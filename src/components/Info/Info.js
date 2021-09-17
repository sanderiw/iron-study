import nataliaImg from "./images/Natalia.jpeg";
import sanderImg from "./images/Sander.jpeg";
import ironStudyLogo from "../Homepage/images/iron-study-logo.png";

function Info() {
    return (
        <div className="container d-flex flex-column align-items-center">
            <img
                className="mt-5"
                src={ironStudyLogo}
                alt="logo"
                style={{ width: "300px" }}
            />
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
                        Apaixonada por programação e um bom restaurante! Não é
                        muito fã de calor :)!
                    </p>
                    <a
                        href="https://www.linkedin.com/in/nat%C3%A1lia-alves-5b00891b9/"
                        className="btn btn-light btn-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Linkedin
                    </a>
                    <a
                        href="https://github.com/nat-alvec"
                        className="btn btn-light btn-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
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
                    <p className="card-text mt-3"> Apaixonado por tudo relacionado a computadores, tecnologia e programação! </p>
                    <a
                        href="https://www.linkedin.com/in/sanderiwase/"
                        className="btn btn-light btn-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Linkedin
                    </a>
                    <a
                        href="https://github.com/sanderiw"
                        className="btn btn-light btn-sm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Info;
