import React from 'react'
import vid from '../../Assets/Videos/vid1.mp4'
import vid4 from '../../Assets/Videos/vid4.mp4'

const BackgoundVideo = () => {
  return (
    <>
    <div className="flex sm:flex-row flex-col bg-black">
    <div className="-mb-2 bg-black sm:px-24">
      <video autoPlay="autoplay" loop="loop" muted id='video'>
        <source src={vid} type="video/mp4" />
        Your browser does not support video tags
      </video>
    </div>
    <div className="my-12 sm:my-0 bg-black"></div>
    <div className="-mb-2 bg-black sm:px-24 sm:pb-12">
    <video autoPlay="autoplay" loop="loop" muted id='video'>
      <source src={vid4} type="video/mp4" />
      Your browser does not support video tags
    </video>
  </div>
  </div>
  </>
  )
}

export default BackgoundVideo
