import React, { useState } from 'react'
import yesGif from './assets/yess-yes.gif'

const App = () => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [yesClicked, setYesClicked] = useState(false)

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 300
    const randomY = (Math.random() - 0.5) * 300
    setNoPosition({ x: randomX, y: randomY })
  }

  if (yesClicked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink-100">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
          <img 
            src={yesGif} 
            alt="YESSSSS!!" 
            className="w-64 h-auto mx-auto rounded-lg"
          />
          <h1 className="text-3xl font-bold text-pink-600 mt-6">Yaaay! 💖</h1>
          <p className="text-gray-600 mt-2">I knew you'd say yes!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center relative">
        {/* Cute hamster/cat emoji with heart */}
        <div className="text-6xl mb-4">
          🐹💕
        </div>
        
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">
          Hey will you be my valentine?
        </h1>
        
        <div className="flex gap-4 justify-center items-center">
          {/* Yes Button */}
          <button
            onClick={() => setYesClicked(true)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-8 rounded-full transition-all duration-200 hover:scale-110"
          >
            Yes
          </button>
          
          {/* No Button - runs away on hover */}
          <button
            onMouseEnter={handleNoHover}
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            }}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-8 rounded-full transition-all duration-200"
          >
            No
          </button>
        </div>
        
        <p className="text-gray-400 text-sm mt-6">
          *"No" seems a bit shy 💜
        </p>
      </div>
    </div>
  )
}

export default App