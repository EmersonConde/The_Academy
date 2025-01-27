import { useState, createContext, useContext } from 'react'
import './App.css'
import SimpleSlider from './slider.jsx'
import {Menu, MenuMobile} from './menu.jsx'

let tela_principal = createContext();

function MainPrincipal() {
  return (
    <main>
      <SimpleSlider />
      <h1>Planos Arcanos</h1>
      <p>Existem 3 planos de arcanos, que não possuem interação direta entre eles, com exceção de 2 portões, o do Norte e o do Sul.</p>

      <h2>Barreira de Eva</h2>
      <p>Situada após o portão Norte, tem sua criação feita por antigos magos e que atualmente é o refúgio dos seres humanos, entretanto, dentro dessa barreira não é possível cultivar e nem criar animais, dessa forma se faz necessário haver colônias no plano terreno que são protegidas pelos manos da barreira, dentro dessa barreira existem 6 castelos que flutuam dentro de uma expécie de vácuo arcano vazio, cada castelo está a uma distância colossal um do outro, porem há um portal ligando o primeiro ao próximo, fazendo uma fila que termina no 7 castelo, chamado de Centro Arcano, a residência dos Clãs Clericais e do Rei Mago.</p>

      <h2>Plano Terreno</h2>
      <p>O mundo que conhecemos, porém após a invasão das maldições vindas da Barreira de Lilith. se passaram mais de 1000 anos da invasão, e atualmente o globo está totalmente dominado pelas maldições e seus fantoches. O início padrão do cenário é 2056 após a queda, um ano repleto de conflitos dentro da academia, principalmente após a recente nomeação de Fênix Blackfire para guardião da casa do fogo, cargo por séculos preenchido apenas por membros da casa Dracon. O plano terreno está situado entre o Portão Norte e o Sul, tendo cada um de seus portões em cada polo.</p>

      <h2>Barreira de Lilith</h2>
      <p>É uma barreira levantada na criação do mundo em tempos desconhecidos, pouco se sabe do que existe após os portais, entretanto é de lá que surgem as maldições. Segundo as lendas é dito também 	que é para lá que vão as almas dos seres humanos após a morte, essa teoria se baseia no fato de que caso um feiticeiro seja morto sem ser por magias de mantra há a possibilidade de que ele retorne como auma maldição.</p>
    </main>
  )
}

function App() {
  let [main, setmain] = useState(<MainPrincipal />)
  tela_principal = () => {
    setmain(<MainPrincipal />)
  }
  let pointbreak = window.innerWidth;
  return (
    <>
      {pointbreak >= 768 ? <Menu /> : <MenuMobile />}
      {main}
    </>
  )
}

export default App
