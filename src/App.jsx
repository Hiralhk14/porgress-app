import React, { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [duration, setDuration] = useState(1)
  const [progress, setProgress] = useState(0)
  const [working, setWorking] = useState(false)
  const inputRef = useRef(null)

  const onStart = () => {
    if (!duration || duration <= 0) return
    setProgress(0)
    setWorking(true)

    const step = 100 / (duration * 10)
    inputRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          clearInterval(inputRef.current)
          inputRef.current = null
          setWorking(false)
          return 100
        }
        return prev + step
      })
    }, 100)
  }

  useEffect(() => {
    return () => clearInterval(inputRef.current)
  }, [])

  return (
    <>
      <div className='main-div'>
        <h1> Progress Bar App</h1>

        <div className='input-div'>
          <input
            type="number"
            className='input-box'
            value={duration}
            disabled={working}
            onChange={(e) => setDuration(e?.target?.value)}
          />
          <button 
            className='start-btn'
            onClick={onStart}
            disabled={working}>
            Start
          </button>
        </div>

        <div className='progressbar-div'>
          <div className='progressbar-fill' style={{ width: `${progress}%` }}></div>
          <p className='progressbar-count'>{Math.round(progress)}%</p>
        </div>

      </div>
    </>
  )
}

export default App
