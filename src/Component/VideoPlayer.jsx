import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  // YouTube API callback
  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    setPlayer(event.target);
  };

  // YouTube API callback for state changes
  const onStateChange = (event) => {
    // Handle state changes if needed
  };

  // Fetch video details using YouTube API
  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your YouTube API key
    const apiKey = 'AIzaSyCigqToRiz8ixc-0lir-Q0AbloSMVeCO4Y';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,status`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Access video details if needed
        console.log(data);
      })
      .catch((error) => console.error('Error fetching video details:', error));
  }, [videoId]);

  return (
    <div>
      <YouTube
        videoId={videoId}
        onReady={onReady}
        onStateChange={onStateChange}
      />
      {/* Add your custom video player UI here */}
    </div>
  );
};

export default VideoPlayer;
