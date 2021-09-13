import React from "react";
import CreateForm from "../Form/CreateForm";
import axios from "axios";

class CreateCard extends React.Component {
    state = {
        _id: "",
        url: "",
        type: "",
        text: "",
        tag: "",
        author: "",
        createdTime: "",
    };

    handleChange = (event) => {
        return this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(
                "https://ironrest.herokuapp.com/natSanderIronStudy",
                this.state
            )
            .then((response) => {
                console.log(response);
                this.props.history.push("/");
            })
            .catch((err) => console.error(err));
    };

    render() {
        return (
            <CreateForm
                state={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default CreateCard;
