// Style import
import "./App.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Package Imports
import { BrowserRouter, Route } from "react-router-dom";
import Searchbar from "./Homepage/Searchbar";
import StudentsBar from "./Homepage/StudentsBar";

// Components Import
import DeleteCard from "./Card/DeleteCard/DeleteCard";
import CreateCard from "./Card/CreateCard/CreateCard";
import EditCard from "./Card/EditCard/EditCard";
import Navbar from "./Homepage/Navbar";
import Feed from "./Homepage/Feed";
import Info from "./Info/Info";

// Others

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={StudentsBar} />
            <Route exact path="/" component={Searchbar} />
            <Route exact path="/" component={Feed} />
            <Route path="/create" component={CreateCard} />
            <Route path="/delete/:id" component={DeleteCard} />
            <Route path="/edit/:id" component={EditCard} />
            <Route path="/info" component={Info} />
        </BrowserRouter>
    );
}

export default App;
