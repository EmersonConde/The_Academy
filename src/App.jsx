import { useState } from 'react'
import './App.css'
import {Menu, FloatingMenu, MobileMenu} from './menu.jsx'
import {MainPrincipal, MainItens, MainPalatine, MainMaldições, MainHabilidades} from './screens.jsx'

function App() {
  let [main, setmain] = useState(<MainPrincipal />)
  let tela_principal = () => {
    setmain(<MainPrincipal />)
    document.getElementById('openned').style.display = "none"
  }
  let tela_palatines = () => {
    setmain(<MainPalatine />)
    document.getElementById('openned').style.display = "none"
  }
  let tela_maldições = () => {
    setmain(<MainMaldições />)
    document.getElementById('openned').style.display = "none"
  }
  let tela_habilidades = () => {
    setmain(<MainHabilidades />)
    document.getElementById('openned').style.display = "none"
  }
  let tela_itens = () => {
    setmain(<MainItens />)
    document.getElementById('openned').style.display = "none"
  }
  return (
    <>
          <Menu
            tela_principal={tela_principal} 
            tela_palatines={tela_palatines} 
            tela_maldições={tela_maldições}
            tela_habilidades={tela_habilidades}
            tela_itens={tela_itens}
          />
          <FloatingMenu/>
          <MobileMenu 
            tela_principal={tela_principal} 
            tela_palatines={tela_palatines} 
            tela_maldições={tela_maldições}
            tela_habilidades={tela_habilidades}
            tela_itens={tela_itens}
          />
          {main}
          <footer></footer>
    </>
  )
}

export default App
