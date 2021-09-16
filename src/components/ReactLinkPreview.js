import { LinkPreview } from "@dhaiwat10/react-link-preview";
import axios from "axios";
import React from "react";

class ReactLinkPreview extends React.Component {
    state = { url: this.props.url, error: false };

    //const url = "https://www.youe.com/watch?v=b_rn7bwD8qQ";

    getData = async () => {
        try {
            const response = await axios.get(
                "https://rlp-proxy.herokuapp.com/v2?url=" + this.state.url
            );
        } catch (error) {
            console.log(error.response.status);
            this.setState({ error: true });
        }
    };

    renderCard = (error) => {
        if (error) {
            return (
                <img
                    src={
                        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    }
                    className="card-img-top"
                    alt="link preview"
                    style={{ height: "350px" }}
                />
            );
        } else {
            return (
                <LinkPreview
                    margin="auto auto"
                    url={this.state.url}
                    height="400px"
                    className="border-light text-muted"
                />
            );
        }
    };

    componentDidMount = async () => {
        try {
            this.getData();
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return this.renderCard(this.state.error);
    }
}

export default ReactLinkPreview;
