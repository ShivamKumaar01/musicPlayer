import React, { useState ,useRef} from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { Typography } from '@mui/material'
import { songs } from '../assets/songs'
import './Herocard.css'
import { FaShuffle } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FaForward } from "react-icons/fa";
import LinearProgress from '@mui/material/LinearProgress';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';


let theme = createTheme();
theme = responsiveFontSizes(theme);
let isPlay=true;


const Herocard = () => {
  const [song,setSong]=useState(0);
  const[img,setImg]=useState(0);
  const[duration,setTotalDuration]=useState();
  const [progress, setProgress] =useState(0);
  
  const audioRef = useRef(null);
  function nextSongHandler(e){
    console.log("hellow")
    if(song===5){
      setSong(0);
      setImg(0)
    }
    else{
      setSong(song+1);
      setImg(img+1);
    }

  }

  function prevSongHandler(e){
    console.log("hi")
    if(song===0){
      setSong(5);
      setImg(5)
    }
    else{

      console.log("fshfshfksdhflks",song,img)
      setSong(song-1);
      setImg(img-1);
    }


  }
  function randomSongHandler(){
    const random= Math.floor(Math.random() * songs.length);
    setImg(random);
    setSong(random);
  }
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      console.log(audioRef.current.duration,"songsdfhsodf")
      console.log("this is current time:",audioRef.current.currentTime)
      console.log("this is total  duration",audioRef.current.duration);
    }
  };
//  function handlePlayPause(){
//   if(isPlay==true){
    
//   }

//  }
  

  return (
  <Box>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" fontSize={18} fontWeight={600} marginTop={3}>Now Playing</Typography>
        
      </ThemeProvider>
    <Box>
      <img className='hero-image' src={songs[img].artwork} ></img>
    </Box>
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      <Box component="section" sx={{marginBottom:'2px',  border: '1px dashed grey',display:'flex',justifyContent:'space-around' }}>
        <Typography>a</Typography>
        <Typography>{duration}</Typography>
        
      </Box>
    <LinearProgress variant="determinate" value={progress} />
    <audio onTimeUpdate={(e)=>{
      let totalTime=(e.target.duration/60).toFixed(2);
      setTotalDuration(totalTime);
      
      let second=e.target.currentTime/1000.00
      console.log("second is ",second)
      let minute=second/60;
      console.log("minute is :",minute.toFixed(2));
      console.log(e.target.currentTime)
      setProgress(second);
    
    }} ref={audioRef} src={songs[img].url}/>
    </Box>
    <Box component="section" sx={{ p: 2,width:'80%',marginLeft:'20%',marginTop:'8px' }}>
      <Box component="section" sx={{ p: 2, display:'flex' }}>
        <Box onClick={randomSongHandler} component="section" sx={{ p: 2, marginLeft:'68px' }}>
        <FaShuffle/>

        </Box>
        <Box onClick={prevSongHandler}  component="section" sx={{ p: 2, marginLeft:'27px' }}><FaBackward /></Box>
        <Box onClick={playAudio}   component="section" sx={{ p: 2, marginLeft:'48px' }}>
        <FaCirclePlay />

        </Box>
        <Box onClick={nextSongHandler} component="section" sx={{ p: 2, marginLeft:'48px' }}><FaForward /></Box>

      </Box>
    
    
    

    </Box>

    <Box>
   
    </Box>


    


  </Box>
  )
}

export default Herocard