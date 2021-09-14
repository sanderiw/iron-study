import React from "react";
import axios from "axios";
import CreateForm from "../../Form/CreateForm";

class CreateCard extends React.Component {
    state = {
        url: "",
        type: "",
        text: "",
        tag: "",
        author: "",
        createdTime: "",
        edited: false
    };

    handleChange = (event) => {
        return this.setState({ [event.target.name]: event.target.value });
    };

    createTime = async () => {
        return this.setState({ createdTime: new Date() });
    };

    handleSubmit = async (event) => {
        await this.createTime();
        event.preventDefault();
        try {   
            const response = await axios.post("https://ironrest.herokuapp.com/natSanderIronStudy", this.state);
            console.log(response);
            this.props.history.push("/");
        } catch (error) {
            console.error(error);
        }
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
