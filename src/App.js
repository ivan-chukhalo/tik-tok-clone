import "./App.css";
import Video from "./Video"

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video 
          url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/av1/360/Big_Buck_Bunny_360_10s_20MB.mp4"
          channel="francheskadeer"
          description="Sunny mood"
          song="U2 - With Or Without You"
          likes={984}  
          messages={541}
          shares={564}  
        />
        <Video 
          url="https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4"
          channel="lanadarcy"
          description="POV, every single time"
          song="Bruno Mars - Uptown Funk"
          likes={2}  
          messages={7}
          shares={1}
        />
        <Video 
          url="https://test-videos.co.uk/vids/sintel/mp4/av1/360/Sintel_360_10s_1MB.mp4"
          channel="bigboy2009"
          description="Bros before hoes"
          song="Metallica - Ride the Lightning"
          likes={11}  
          messages={423}
          shares={99}
        />
        <Video 
          url="https://test-videos.co.uk/vids/sintel/mp4/av1/360/Sintel_360_10s_1MB.mp4"
          channel="greenrat27"
          description="A Gentleman In The Streets But A Freak In The Sheets"
          song="George Michael - Careless Whisper"
          likes={489}  
          messages={109}
          shares={3}
        />
      </div>
    </div>
  );
}

export default App;
