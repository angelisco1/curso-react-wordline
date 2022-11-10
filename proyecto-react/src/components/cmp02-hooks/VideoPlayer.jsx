import { useEffect, useRef, useState } from 'react'
import video from '../../../assets/video.mp4'


const VideoPlayer = () => {
  const videoRef = useRef()
  const [volumen, setVolumen] = useState(100)

  useEffect(() => {
    videoRef.current.volume = volumen / 100
  }, [])

  const play = () => {
    videoRef.current.play()
  }

  const pause = () => {
    videoRef.current.pause()
  }

  const cambiarVolumen = (e) => {
    const rangeValue = Number(e.target.value)
    videoRef.current.volume = rangeValue / 100
    setVolumen(rangeValue)
  }

  return (
    <div>
      <video width="200" src={video} ref={videoRef}></video>
      <button type="button" onClick={play}>Play</button>
      <button type="button" onClick={pause}>Pause</button>
      <input type="range" min="0" max="100" value={volumen} onChange={cambiarVolumen} />
    </div>
  )
}

export default VideoPlayer