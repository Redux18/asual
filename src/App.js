
import './App.css';
import VideoPlayer from './Component/VideoPlayer';


// https://youtu.be/2zsg1YiggQg?si=TWGkB3x_zAk2N3py


const generateRandomVideoId = () => {
  // Assuming YouTube video IDs are 11 characters long
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  const randomVideoId = Array.from({ length: 11 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  return randomVideoId;
};


function App() {
  const videoId = '2zsg1YiggQg';

  // const videoId = generateRandomVideoId();

  return (
    <div className="App">
      <VideoPlayer  videoId={videoId}/>
      
     
    </div>
  );
}

export default App;
