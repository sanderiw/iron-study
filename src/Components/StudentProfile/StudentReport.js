import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
              <span className="fw-bold"> <i className="fab fa-youtube"></i> Vídeos: </span>
              <div className="card">
                <ul className="ul">
                  {this.state.types.videosUrls.map((url) => (
                    <li className="li" key={url}>
                      <a href={url} className="a">{url}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {Boolean(this.state.types.articlesUrls.length) && (
            <>
              <span className="fw-bold"> <i className="fas fa-newspaper"></i> Artigos: </span>
              <div className="card">
                <ul className="ul">
                  {this.state.types.articlesUrls.map((url) => (
                    <li className="li" key={url}>
                      <a href={url} className="a">{url}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {Boolean(this.state.types.coursesUrls.length) && (
            <>
              <span className="fw-bold"> <i className="fas fa-graduation-cap"></i> Cursos: </span>
              <div className="card">
                <ul className="ul">
                  {this.state.types.coursesUrls.map((url) => (
                    <li className="li" key={url}>
                      <a href={url} className="a">{url}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {Boolean(this.state.types.repositoriesUrls.length) && (
            <>
              <span className="fw-bold"> <i class="fab fa-github"></i> Repositórios: </span>
              <div className="card">
                <ul className="ul">
                  {this.state.types.repositoriesUrls.map((url) => (
                    <li className="li" key={url}>
                      <a href={url} className="a">{url}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {Boolean(this.state.types.othersUrls.length) && (
            <>
              <span className="fw-bold"> <i class="fas fa-lightbulb"></i> Outros: </span>
              <div className="card">
                <ul className="ul">
                  {this.state.types.othersUrls.map((url) => (
                    <li className="list-group-item" key={url}>
                      <a href={url} className="a">{url}</a>
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
