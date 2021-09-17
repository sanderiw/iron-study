import React from "react";
import axios from "axios";

import './studentReport.css'

class StudentReport extends React.Component {
  state = {
    data: [],
    types: {
      videosUrls: [],
      articlesUrls: [],
      coursesUrls: [],
      repositoriesUrls: [],
      othersUrls: [],
    },
  };

  componentDidMount() {
    this.fetchStudentsData();
  }

  fetchStudentsData = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/natSanderIronStudy"
      );
      this.setState({ data: [...response.data] });
      this.filterCardsTypes();
    } catch (error) {
      console.error(error);
    }
  };

  filterCardsTypes() {
    const types = {
      video: [],
      artigo: [],
      curso: [],
      repositorio: [],
      outros: [],
    };

    this.state.data.forEach((studentData) => {
      if (studentData.author === this.props.name) {
        types[studentData.type].push(studentData.url);
        //types.video
        // retorna o array [] do types.video
      }
    });

    this.setState({
      types: {
        videosUrls: [...types.video],
        articlesUrls: [...types.artigo],
        coursesUrls: [...types.curso],
        repositoriesUrls: [...types.repositorio],
        othersUrls: [...types.outros],
      },
    });
  }

  render() {
    return (
      <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
        <div
          className="card border-light mt-2 mb-4"
          style={{ width: "98vw", maxWidth: "740px" }}
        >
          {Boolean(this.state.types.videosUrls.length) && (
            <>
              <span className="fw-bold ms-2 mb-3"> <i className="fab fa-youtube fa-lg"></i> Vídeos: </span>
              <div className="card border-light">
                <ul className="ul mb-3">
                  {this.state.types.videosUrls.map((url) => (
                    <li className="li" key={url}>
                      <a href={url} target="_blank" rel="noreferrer" className="a">{url}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {Boolean(this.state.types.articlesUrls.length) && (
            <>
              <span className="fw-bold ms-2 mb-3"> <i className="fas fa-newspaper fa-lg"></i> Artigos: </span>
              <div className="card border-light">
                <ul className="ul mb-3">
                  {this.state.types.articlesUrls.map((url) => (
                    <li className="li" key={url}>
                      <a href={url} target="_blank" rel="noreferrer" className="a">{url}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {Boolean(this.state.types.coursesUrls.length) && (
            <>
              <span className="fw-bold ms-2 mb-3"> <i className="fas fa-graduation-cap fa-lg"></i> Cursos: </span>
              <div className="card border-light">
                <ul className="ul mb-3">
                  {this.state.types.coursesUrls.map((url) => (
                    <li className="li" key={url}>
                      <a href={url} target="_blank" rel="noreferrer" className="a">{url}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {Boolean(this.state.types.repositoriesUrls.length) && (
            <>
              <span className="fw-bold ms-2 mb-3"> <i class="fab fa-github fa-lg"></i> Repositórios: </span>
              <div className="card border-light">
                <ul className="ul mb-3">
                  {this.state.types.repositoriesUrls.map((url) => (
                    <li className="li" key={url}>
                      <a href={url} target="_blank" rel="noreferrer" className="a">{url}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {Boolean(this.state.types.othersUrls.length) && (
            <>
              <span className="fw-bold ms-2 mb-3"> <i class="fas fa-lightbulb fa-lg"></i> Outros: </span>
              <div className="card border-light">
                <ul className="ul mb-3">
                  {this.state.types.othersUrls.map((url) => (
                    <li className="li" key={url}>
                      <a href={url} target="_blank" rel="noreferrer" className="a">{url}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default StudentReport;
