import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const [duration, setDuration] = useState(5)
  const [progress, setProgress] = useState(0)
  const [working, setWorking] = useState(false)
  const inputRef = useRef(null)
  const navigate = useNavigate()

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

   const handleInputChange = (value) => {
    if (value === '' || Number(value) <= 0) {
      setDuration(1)
    } else {
      setDuration(Number(value))
    }
  }

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
            min={1}
            onChange={(e) => handleInputChange(e?.target?.value)}

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
          <p className='progressbar-count'>{Math?.round(progress)}%</p>
        </div>

        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        onClick={() => navigate('/weather')}>
          go to weather page
        </button>

      </div>
    </>
  )
}

export default App
