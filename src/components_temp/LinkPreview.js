import axios from "axios";
import React from "react";

class LinkPreview extends React.Component {
    state = {};

    getData = async (url) => {
        const apiUrl = "https://api.linkpreview.net";
        const key = "410cde5b43c5fe8e973fee9c87e60f2f";

        try {
            const response = await axios.post(apiUrl, {
                q: url,
                key: key,
            });
            this.setState({ ...response.data });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        this.getData(this.props.url);
        return (
            <div>
                <img
                    src={this.state.image}
                    className="card-img-top"
                    alt="..."
                />
                <p className="text-decoration-none text-body mt-2">{this.state.title}</p>
            </div>
        );
    }
}

export default LinkPreview;
