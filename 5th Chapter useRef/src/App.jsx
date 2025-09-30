import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const inputRef = useRef(null)

  const focus=()=>{
    inputRef.current.focus();
    inputRef.current.classList.toggle("bg-sky-400");
  }

  return (
    <div>
      <div>
        <input type="number" ref={inputRef} readOnly/>
        <div>
          <button onClick={focus}>Focus</button>
        </div>
      </div>
    </div>
  )
}

export default App
