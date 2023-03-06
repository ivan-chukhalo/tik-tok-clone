import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

export default function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        src={url}
        className="video__player"
        loop
        autoPlay
        ref={videoRef}
        onClick={onVideoPress}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

Video.defaultProps = {
  url: "",
  channel: "default channel",
  description: "description",
  song: "song",
  likes: 0,
  messages: 0,
  shares: 0
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  messages: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
}