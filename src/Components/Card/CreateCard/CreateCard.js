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
        edited: false,
        submitFailed: false,
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
        if (Object.keys(errors).length !== 0) {
            alert("Por favor, complete todos os campos");
            this.setState({ submitFailed: true });
        } else {
            try {
                const response = await axios.post(
                    "https://ironrest.herokuapp.com/natSanderIronStudy",
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
            <CreateForm
                state={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                validateFields={this.validateFields}
                renderValidationClass={this.renderValidationClass}
            />
        );
    }
}

export default CreateCard;
