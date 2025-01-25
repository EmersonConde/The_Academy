import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Menu(){
  return (
    <>
    <header>
      <div id='logo'>
        <img src="/src/assets/academy-img.png" alt="Academy Logo" />
        <h1>ACADEMY</h1>
      </div>
      <nav>
        <button>Palatines</button>
        <button>Maldições</button>
        <button>Habilidades</button>
        <button>Sistema</button>
        </nav>
    </header>
    <main>
      
    </main>
    </>
  )
}

function App() {
  return (
    <>
      <Menu />
    </>
  )
}

export default App
