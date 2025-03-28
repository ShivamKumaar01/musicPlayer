import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { songs } from "../assets/songs";
import "./Herocard.css";
import { FaShuffle } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FaForward } from "react-icons/fa";
import LinearProgress from "@mui/material/LinearProgress";
import { FaRepeat } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
let isPlay = true;

const Herocard = () => {
  const [song, setSong] = useState(0);
  const [img, setImg] = useState(0);

  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setTotalDuration] = useState("0:00");

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  function nextSongHandler(e) {
    console.log("hellow");
    if (song === 5) {
      setSong(0);
      setImg(0);
    } else {
      setSong(song + 1);
      setImg(img + 1);
    }
  }

  function prevSongHandler(e) {
    console.log("hi");
    if (song === 0) {
      setSong(5);
      setImg(5);
    } else {
      console.log("fshfshfksdhflks", song, img);
      setSong(song - 1);
      setImg(img - 1);
    }
  }
  function randomSongHandler() {
    const random = Math.floor(Math.random() * songs.length);
    setImg(random);
    setSong(random);
  }
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      console.log(audioRef.current.duration, "songsdfhsodf");
      console.log("this is current time:", audioRef.current.currentTime);
      console.log("this is total  duration", audioRef.current.duration);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" fontSize={18} fontWeight={600} marginTop={3}>
          Now Playing
        </Typography>
      </ThemeProvider>
      <Box>
        <img className="hero-image" src={songs[img].artwork}></img>
      </Box>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        <Box
          component="section"
          sx={{
            marginBottom: "2px",
            border: "1px dashed grey",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography>{currentTime}</Typography>
          <Typography>{duration}</Typography>
        </Box>
        <LinearProgress variant="determinate" value={progress} />
        <audio
          onTimeUpdate={(e) => {
            const currentTime = e.target.currentTime;
            const totalDuration = e.target.duration;

            if (totalDuration) {
              let progressPercentage = (currentTime / totalDuration) * 100;
              setProgress(progressPercentage);
              setTotalDuration(formatTime(totalDuration));
              setCurrentTime(formatTime(currentTime));
            }
          }}
          onLoadedMetadata={(e) => {
            setTotalDuration(formatTime(e.target.duration));
          }}
          onEnded={nextSongHandler}
          ref={audioRef}
          src={songs[img].url}
        />
      </Box>
      <Box
        component="section"
        sx={{ p: 2, width: "80%", marginLeft: "7%", marginTop: "8px" }}
      >
        <Box
          component="section"
          sx={{ p: 2, display: "flex", border: "1px solid gray" }}
        >
          <Box onClick={randomSongHandler} component="section" sx={{ p: 2 }}>
            <FaShuffle style={{ width: "32px", height: "32px" }} />
          </Box>
          <Box onClick={prevSongHandler} component="section" sx={{ p: 2 }}>
            <FaBackward style={{ width: "32px", height: "32px" }} />
          </Box>
          <Box
            onClick={togglePlayPause}
            component="section"
            sx={{ p: 2, marginLeft: "48px" }}
          >
            {/* if(isPlaying){
            <FaPause style={{ width: '32px', height: '32px' }} />
          }
          else{
          <FaCirclePlay style={{ width: '32px', height: '32px' }} />

          } */}

            {isPlaying && <FaPause style={{ width: "32px", height: "32px" }} />}
            {!isPlaying && (
              <FaCirclePlay style={{ width: "32px", height: "32px" }} />
            )}
          </Box>

          <Box
            onClick={nextSongHandler}
            component="section"
            sx={{ p: 2, marginLeft: "48px" }}
          >
            <FaForward style={{ width: "32px", height: "32px" }} />
          </Box>
          <Box component="section" sx={{ p: 2 }}>
            <FaRepeat style={{ width: "32px", height: "32px" }} />
          </Box>
        </Box>
      </Box>

      <Box></Box>
    </Box>
  );
};

export default Herocard;
