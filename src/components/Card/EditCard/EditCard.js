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
        submitFailed: false,
    };

    componentDidMount = async () => {
        try {
            const response = await axios.get(
                `https://ironrest.herokuapp.com/natSanderIronStudy/${this.props.match.params.id}`
            );
            delete response.data._id;
            response.data["edited"] = true;
            response.data["comments"] = [];
            response.data["submitFailed"] = false;
            this.setState({ ...response.data });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = (event) => {
        return this.setState({ [event.target.name]: event.target.value });
    };

    createTime = async () => {
        return this.setState({ createdTime: new Date() });
    };

    validateFields = (state) => {
        const errors = {};
        const fields = ["url", "type", "text", "tag", "author"];
        for (let field of fields) {
            if (!state[field]) {
                errors[field] = true;
            } else {
                errors[field] = false;
            }
        }
        return errors;
    };

    renderValidationClass = (error) => {
        let validationClassStr = "";
        if (error) {
            validationClassStr = "is-invalid";
        } else {
            validationClassStr = "is-valid";
        }
        return validationClassStr;
    };

    handleSubmit = async (event) => {
        await this.createTime();
        event.preventDefault();
        const errors = this.validateFields(this.state);
        let isNotValid = false;
        for (let error of Object.keys(errors)) {
            if (errors[error] === true) {
                isNotValid = true;
                break;
            }
        }
        if (isNotValid) {
            this.setState({ submitFailed: true });
        } else {
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
        }
    };

    render() {
        return (
            <div className="container">
                <h3 className="m-4">Edite esta publicação</h3>
                <CreateForm
                    state={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    validateFields={this.validateFields}
                    renderValidationClass={this.renderValidationClass}
                />
            </div>
        );
    }
}

export default EditCard;
