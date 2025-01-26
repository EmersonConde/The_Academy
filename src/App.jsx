import { useState } from 'react'
import academyLogo from '/academy-img.png'
import './App.css'
function Menu(){
  return (
    <>
    <header>
      <div id='logo'>
        <img src={academyLogo} alt="Academy Logo" />
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
