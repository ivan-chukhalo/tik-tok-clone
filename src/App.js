import React from "react";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import Video from "./Video";
import "./App.css";

function App() {
  const [videos, setVideos] = React.useState([]);

  async function getVideos(db) {
    const videosCollection = collection(db, "videos");
    const videoSnapshot = await getDocs(videosCollection);
    const videosList = videoSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  React.useEffect(() => {
    getVideos(db);
  }, []);

  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
            key={video.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
