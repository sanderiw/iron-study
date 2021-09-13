import React from "react";
import axios from "axios";

class DeleteCard extends React.Component {
    state = {};

    componentDidMount = async () => {
        try {
            await axios.delete(
                `https://ironrest.herokuapp.com/natSanderIronStudy/${this.props.match.params.id}`
            );
            this.props.history.push("/");
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className="container mt-5">
                <h1>Deleting card ...</h1>
            </div>
        );
    }
}

export default DeleteCard;
