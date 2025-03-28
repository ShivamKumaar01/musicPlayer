import logo from './logo.svg'
import './App.css'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';


import { songs } from './assets/songs'
import Herocard from './components/Herocard'

function App() {
  function clickHandler(e){
    console.log('Button clicked');
   
    
  }
  return (
    <div className='App'>
      <Box
        component='section'
        sx={{ p: 2, display: 'flex' }}
      >
        <Box
          component='section'
          sx={{ p: 2, width: '25%' }}
        >
          <Box
            component='section'
            sx={{
              p: 2,
              
              color: '#333333',
              width: '70%',
              marginLeft: '32',
              fontWeight: '700',
              fontSize: '32px',
            }}
          >
            Discover New music
          </Box>
          <Box
            component='section'
            sx={{
              p: 2,
            
              marginTop: '41px',
              width: '90%',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >

            {songs.map((song) => {
              return (
                <Card sx={{ maxWidth: '45%', margin: '2px' }}>
                  <CardMedia
                    component='img'
                    alt='green iguana'
                    height='140'
                    image={song.artwork}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {song.title}
                    </Typography>
                  </CardContent>
                </Card>
              )
            })}
          </Box>
        </Box>
        <Box
          component='section'
          sx={{ p: 2, border: '1px dashed grey', width: '50%' }}
        >
          <Herocard></Herocard>
        </Box>

        <Box
          component='section'
          sx={{ p: 2, width: '25%' }}
        >
          <Box
            component='section'
            sx={{ p: 2, width: '30%' }}
          >
            <Typography>Track-List</Typography>
          </Box>
          {/* <Box
            component='section'
            sx={{ p: 2, width: '20%' }}
          >
            <Typography>icons</Typography>
          </Box> */}
          <Box
            component='section'
            sx={{ p: 2, border: '1px solid grey', width: '95%' }}
          >
            <Box
              component='section'
              sx={{ border: '1px solid grey', width: '40%' }}
            >
              <Typography >Playing-next</Typography>
            </Box>
            <Box
              component='section'
              sx={{  width: '100%' }}
            >
              {songs.map((song) => {
                return (
                  <Box onClick={clickHandler} component='section'sx={{display:'flex',border:'1px solid grey',marginTop:'2px' }}>
                    <Box
                      component='section'
                      sx={{ paddingTop:2, width: '9%' }}
                    >
                      <FormatAlignCenterIcon></FormatAlignCenterIcon>
                    </Box>
                    <Box
                      component='section'
                      sx={{ width: '15%',marginLeft:'3px',marginTop:'2px',marginBottom:'2px' }}
                    >
                      <img className='side-image' src={song.artwork}></img>
                    </Box>
                    <Box
                      component='section'
                      sx={{ width: '90%',paddingLeft:'3px' }}
                    >
                      <Typography align='start'>{song.title}</Typography>
                      <Typography align='start'>{song.artist}</Typography>

                    </Box>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default App
