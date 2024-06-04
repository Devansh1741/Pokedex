import React from 'react'
import loadingGif from "../assets/pokeball-loader.gif"
function Loading() {
  return (
    <div className='loading'>
        <img src={loadingGif} alt="loading" />
    </div>
  )
}

export default Loading