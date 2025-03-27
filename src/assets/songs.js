import badLiarImage from './public/album-arts/bad-liar.jpg'
import deathbedImage from './public/album-arts/death-bed.jpg'
import fadedImage from './public/album-arts/faded.jpg'
import hatemeImage from './public/album-arts/hate-me.jpg'
import soloImage from './public/album-arts/solo.jpg'
import withoutmeImage from './public/album-arts/without-me.jpg'
import badLiarsong from './public/audio/Bad Liar.mp3'
import deathBedsong from './public/audio/Death Bed.mp3'
import Fadedsong from './public/audio/Faded.mp3'
import hatemesong from './public/audio/Hate Me.mp3'
import solosong from './public/audio/Solo.mp3'
import Withoutmesong from './public/audio/Without Me.mp3'

export const songs = [
  {
    title: 'Death Bed',
    artist: 'Powfu',
    artwork:badLiarImage,
    url: badLiarsong,
    id: '1',
  },
  {
    title: 'Bad Liar',
    artist: 'Imagine Dragons',
    artwork: deathbedImage,
    url: deathBedsong,
    id: '2',
  },
  {
    title: 'Faded',
    artist: 'Alan Walker',
    artwork: fadedImage,
    url: Fadedsong,
    id: '3',
  },
  {
    title: 'Hate Me',
    artist: 'Ellie Goulding',
    artwork: hatemeImage,
    url: solosong,
    id: '4',
  },
  {
    title: 'Solo',
    artist: 'Clean Bandit',
    artwork: soloImage,
    url: hatemesong,
    id: '5',
  },
  {
    title: 'Without Me',
    artist: 'Halsey',
    artwork: withoutmeImage,
    url: Withoutmesong,
    id: '6',
  },
]
