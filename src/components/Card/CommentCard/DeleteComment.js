import React from "react";
import axios from "axios";

class DeleteComment extends React.Component {
    state = {
        comments: [],
        indexToDelete: null,
        newComments: [],
    };

    componentDidMount = async () => {
        try {
            const response = await axios.get(
                `https://ironrest.herokuapp.com/natSanderIronStudy/${this.props.match.params.publication}`
            );
            this.setState({ ...response.data });
            this.findCommentByTime();
            this.deleteComment();
        } catch (error) {
            console.error(error);
        }
    };

    findCommentByTime = () => {
        const comments = [...this.state.comments];
        const index = comments.findIndex(
            (comment) => comment.currentTime === this.props.match.params.time
        );
        comments.splice(index, 1);
        this.setState({ indexToDelete: index, newComments: comments });
    };

    deleteComment = async () => {
        const newComments = {comments: [...this.state.newComments]};
        try {
            const response = await axios.put(
                `https://ironrest.herokuapp.com/natSanderIronStudy/${this.props.match.params.publication}`,
                newComments
            );
            console.log(response);
            this.props.history.push(`/comment/${this.props.match.params.publication}`);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className="container mt-5">
                <p className="ms-5">Deletando o comentário...</p>
            </div>
        );
    }
}

export default DeleteComment;
