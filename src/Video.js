import React, { useRef } from "react";
import "./Video.css";

export default function Video() {
    const [playing, setPlaying] = React.useState(false)
    const videoRef = useRef(null)
    const onVideoPress = () => {
      if (playing){
        videoRef.current.pause();
        setPlaying(false)
      } else {
        videoRef.current.play();
        setPlaying(true)
      }
    }
    return (
    <div className="video">
      <video
        src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/av1/360/Big_Buck_Bunny_360_10s_20MB.mp4"
        className="video__player"
        loop
        autoPlay
        ref={videoRef}
        onClick={onVideoPress}
      ></video>

      {/* <VideoFooter /> */}
      {/* <VideoSidebar /> */}
    </div>
  );
}
