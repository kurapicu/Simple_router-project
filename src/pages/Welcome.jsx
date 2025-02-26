import React from 'react'
import '/src/pages/PlayVideo/PlayVideo.css'
import '/src/pages/video.css'
import PlayVideo from './PlayVideo/PlayVideo'
import Header from './Header'
import Rec from '/src/pages/Recommended/Rec.jsx'

const Welcome = () => {
  return (
    <div className='play-container'>
      <Header/>
      <PlayVideo/>
      <Rec/>
    </div>
  )
}

export default Welcome