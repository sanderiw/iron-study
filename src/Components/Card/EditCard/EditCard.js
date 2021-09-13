import React from "react";
import axios from "axios";
import CreateForm from "../../Form/CreateForm";

class EditCard extends React.Component {
    state = {
        url: "",
        type: "",
        text: "",
        tag: "",
        author: "",
        createdTime: "",
        edited: true,
    };

    componentDidMount = async () => {
        try {
            const response = await axios.get(
                `https://ironrest.herokuapp.com/natSanderIronStudy/${this.props.match.params.id}`
            );
            delete response.data._id;
            this.setState({ ...response.data });
        } catch (error) {
            console.error(error);
        }
    };

    createTime = async () => {
        return this.setState({ createdTime: new Date() });
    };

    handleChange = (event) => {
        return this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async (event) => {
        await this.createTime();
        event.preventDefault();
        try {
            const response = await axios.put(
                `https://ironrest.herokuapp.com/natSanderIronStudy/${this.props.match.params.id}`,
                this.state
            );
            console.log(response);
            this.props.history.push("/");
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className="container">
                <h1 className="m-4">Editar o card</h1>
                <CreateForm
                    state={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default EditCard;
