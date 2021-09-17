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
        comments: [],
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
            <div className="container">
                <div className="m-5 mt-4">
                    <h3 className="ms-3 mt-0 mb-2 ps-2" >Crie uma publicação</h3>
                    <p className="ms-3 ps-2 mt-3 fw-lighter fst-italic">
                        Pretende estudar algum conteúdo? Fez alguma aula ou
                        curso interessante? Compartilha com a gente!
                    </p>
                    <CreateForm
                        state={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        validateFields={this.validateFields}
                        renderValidationClass={this.renderValidationClass}
                    />
                </div>
            </div>
        );
    }
}

export default CreateCard;
