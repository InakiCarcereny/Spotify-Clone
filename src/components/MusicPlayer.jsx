import { useState, useEffect } from 'react'
import { useRef } from 'react'

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" >
  <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"/>
  <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"/>
</svg>
)

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"/>
  </svg>
)

export function MusicPlayer () {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.src = '/tracks/1/track2.mp3'
  },[])
  
  const handleclick = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
      audioRef.current.volume = 0.1
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="text-white flex items-center justify-between mt-6">
      <div> 
        aca va la cancion que se esta reproduciendo...
      </div>
      <div className="flex flex-col items-center">
        <button className="bg-white rounded-full px-1 py-1" onClick={handleclick}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <div>
        aca va el volumen de la cancion...
      </div>

      <audio ref={audioRef}></audio>
    </div>
  )
}