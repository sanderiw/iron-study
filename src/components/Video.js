import ReactPlayer from "react-player";

function Video(props) {
    return (
        <div style={{height:"400px"}}>
            <ReactPlayer
                url={props.url}
                width="100%"
                height="100%"
            />
        </div>
    );
}

export default Video;
