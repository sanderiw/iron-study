// Style import
import "./App.css";
//import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Package Imports
import { BrowserRouter, Route } from "react-router-dom";
import Searchbar from "./Homepage/Searchbar";
import StudentsBar from "./Homepage/StudentsBar";

// Components Import
import CreateCard from "./CreateCard/CreateCard";
import Navbar from "./Homepage/Navbar";
import Feed from "./Homepage/Feed";

// Others

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={StudentsBar} />
            <Route exact path="/" component={Searchbar} />
            <Route exact path="/" component={Feed} />
            <Route path="/create" component={CreateCard} />
        </BrowserRouter>
    );
}

export default App;
