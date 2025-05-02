import { useEffect } from 'react'

const Timer = ({ time, setTime, startTime }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Math.floor((Date.now() - startTime) / 1000))
    }, 200)

    return () => clearInterval(interval)
  }, [startTime])
  return (
    <div className="timer">Aika: {time !== 0 ? time : 0} sekuntia</div>
  )
}

export default Timer