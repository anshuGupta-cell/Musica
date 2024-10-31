import React, { useState, useEffect } from 'react';
import SongItem from './SongItem.js';
import PlayBar from './PlayBar.js';

const Home = () => {
  const songs = [
    { name: 'Ninja Hattori - title track', src: 'song/0.mp3', id: 0 },
    { name: 'NEFFEX - Grateful', src: 'song/1.mp3', id: 1 },
    { name: 'Cartoon, Jéja - On & On (feat. Daniel Levi) | Electronic Pop', src: 'song/2.mp3', id: 2 },
  
  ];

  const [index, setIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  let [progress, setProgress] = useState(1)
  const [songName, setSongName] = useState(null)
  const [audio] = useState(new Audio());

  useEffect(() => {
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [audio]);

  function onLoad() {
    audio.addEventListener('loadedmetadata', () => {
      setDuration(secondsToMinutesSeconds(audio.duration))
    }, { once: true });
  }

  function sName(index) {
    setSongName(songs[index].name)
    console.log(songName)
  }
  const handleClick = (src, id, name) => {
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
    setPlaying(true);
    setIndex(id);
    onLoad();
    updateTime();
    setSongName(name);

  };

  const handlePause = () => {
    if (audio.paused) {
      audio.play();
      setPlaying(true);

    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const handleNext = () => {
    let nextIndex = (index + 1) % songs.length;
    audio.src = songs[nextIndex].src;
    audio.currentTime = 0;
    audio.play();
    setPlaying(true);
    setIndex(nextIndex);
    onLoad();
    updateTime();
    sName(nextIndex);
  };

  const handlePrev = () => {
    let prevIndex = (index - 1 + songs.length) % songs.length;
    audio.src = songs[prevIndex].src;
    audio.currentTime = 0;
    audio.play();
    setPlaying(true);
    setIndex(prevIndex);
    onLoad();
    updateTime();
    sName(prevIndex);
  };

  function updateTime() {
    audio.addEventListener('timeupdate', () => {
      setCurrentTime(secondsToMinutesSeconds(audio.currentTime))
      setProgress((audio.currentTime / audio.duration * 96) + 1)
    });
  }
  /* Seconds to minutes 00:00 format */
  function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
      return "Invalid input";
    }
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;

  }

  const handleProgress = (e) => {
    let percent = ((e.nativeEvent.offsetX / e.target.getBoundingClientRect().width) * 96) + 1;
    setProgress(percent)
    audio.currentTime = (audio.duration) * percent / 96;
  }

''
  return (

    <div className="container my-3">
      <div className=" my-cont text-white p-3 rounded"
      style={{
      backgroundImage: 'url(background/2.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}
      >


          {songs.map(song => (
            <SongItem
              key={song.id}
              name={song.name}
              src={song.src}
              id={song.id}
              handleClick={handleClick}
            />
          ))}
      
      </div>
        <PlayBar 
        handlePause={handlePause} 
        isPlaying={isPlaying} 
        handleNext={handleNext} 
        handlePrev={handlePrev}
        duration={duration}
        currentTime={currentTime}
        progress={progress}
        handleProgress={handleProgress}
        songName={songName}
        />
  
    </div>
  );
};

export default Home;
