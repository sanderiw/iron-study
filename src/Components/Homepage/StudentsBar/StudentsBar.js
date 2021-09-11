import Alexandre from "./img/Alexandre.jpeg";
import Anna from "./img/Anna.jpeg";
import Caio from "./img/Caio.jpeg";
import Filipe from "./img/Filipe.jpeg";
import Guilherme from "./img/Guilherme.jpeg";
import Manoel from "./img/Manoel.jpeg";
import Natalia from "./img/Natalia.jpeg";
import Nicollas from "./img/Nicollas.jpeg";
import Nilton from "./img/Nilton.jpeg";
import Pedro from "./img/Pedro.jpeg";
import Raul from "./img/Raul.jpeg";
import Sander from "./img/Sander.jpeg";

import Student from "../Student/Student";
import "./StudentsBar.css";

const studentsImages = [
  Alexandre,
  Anna,
  Caio,
  Filipe,
  Guilherme,
  Manoel,
  Natalia,
  Nicollas,
  Nilton,
  Pedro,
  Raul,
  Sander,
];

const StudentsBar = () => {
  return (
    <div className="studentsBar-container">
      {studentsImages.map((img) => (
        <Student img={img} />
      ))}
    </div>
  );
};

export default StudentsBar;
