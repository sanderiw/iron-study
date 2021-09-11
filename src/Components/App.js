// Style import
import "./App.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Package Imports
import { BrowserRouter } from "react-router-dom";
import Searchbar from './Homepage/Searchbar'
import StudentsBar from './Homepage/StudentsBar'

// Components Import
import Navbar from "./Homepage/Navbar";
import Feed from "./Homepage/Feed";

// Others

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <StudentsBar />
            <Searchbar />
            <Feed />
        </BrowserRouter>
    );
}

export default App;
