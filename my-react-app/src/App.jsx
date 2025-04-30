import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <div class="navbar">
        
        <div><div class="item">Naeemah</div></div>
        <div class="navbar-second">
          <a><div class="item">About me</div></a>
          <a><div class="item">Resume</div></a>
          <a><div class="item">Portfolio</div></a>
          <a><div class="item">Blog</div></a>
          <a><div class="item">Contact</div></a>
          <a><div class="item">Extra</div></a>
        </div>
      </div>
    </body>
    </>
  )
}

export default App
