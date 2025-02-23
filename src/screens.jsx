import react from 'react';
import SimpleSlider from './slider.jsx'
import './App.css'
import content from "./content.json"
import img_vont from '/will_image.jpeg'
import bad_vont from "/bad_vont.jpeg"
import atri_img from "/hex-attributes.png"
import criacao from '/criacao.jpeg'

const cp = content.criacao_personagem;
const vont = content.vontade; 
const atri = content.Atributos;
const cruel_vonts = [
  Object.values(vont.ex6).join(""),
  Object.values(vont.ex7).join(""),
  Object.values(vont.ex8).join(""),
  Object.values(vont.ex9).join(""),
  Object.values(vont.ex10).join("")
]
const good_vonts = [
  Object.values(vont.ex1).join(""), 
  Object.values(vont.ex2).join(""), 
  Object.values(vont.ex3).join(""), 
  Object.values(vont.ex4).join(""), 
  Object.values(vont.ex5).join(""),
]


export function MainPalatine(){
  return (
    <main class="mx-10">
      <img src={criacao} class="max-h-100 mx-auto opacity-50" alt="Criação de Personagem" />
      <div id='criacao' class="mt-0 mx-auto mb-10" dangerouslySetInnerHTML={{__html: [cp.t1, cp.p1, cp.p2].join("")}} />
      <section class="flex flex-wrap items-center">
        <div class='vontade' dangerouslySetInnerHTML={{__html: [vont.t1, vont.p1, good_vonts.join("")].join("")}} />
        <img class="max-h-100 my-5 mx-auto opacity-50" src={img_vont} alt="Will Image" />
        <div class='vontade' dangerouslySetInnerHTML={{__html: [vont.p2, cruel_vonts.join(""), vont.interacao].join("")}} />
        <img class="max-h-100 my-5 mx-auto opacity-50" src={bad_vont} alt="Bad Will" />
      </section>
      <section id='atributo' class="flex flex-wrap items-center">
        <img id='atri1' class="max-h-100 my-5 mx-auto opacity-50" src={atri_img} alt="" />
        <div class="max-w-[500px] ml-auto">
          <h2 class="mt-10">{atri.tittle}</h2>
          <p>{atri.p1}</p>
          <h3>{atri.forca.name}</h3><p>{atri.forca.descrip}</p>
          <h3>{atri.agil.name}</h3><p>{atri.agil.descrip}</p>
          <h3>{atri.resi.name}</h3><p>{atri.resi.descrip}</p>
          <h3>{atri.inte.name}</h3><p>{atri.inte.descrip}</p>
          <h3>{atri.sabe.name}</h3><p>{atri.sabe.descrip}</p>
          <h3>{atri.vont.name}</h3><p>{atri.vont.descrip}</p>
        </div>
        <img id='atri2' class="hidden max-h-100 my-5 mx-auto opacity-50" src={atri_img} alt="" />
      </section>
    </main>
  )
}
export function MainMaldições(){
    return (
      <main>
        <h1>Teste do Conteúdo Maldições</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias porro, non optio amet nostrum cum nulla iusto reprehenderit voluptatem exercitationem iure, doloribus doloremque recusandae? Atque facere totam consectetur nemo dolore.</p>
      </main>
    )
  }
export function MainHabilidades(){
    return (
      <main>
        <h1>Teste do Conteúdo Habilidades</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias porro, non optio amet nostrum cum nulla iusto reprehenderit voluptatem exercitationem iure, doloribus doloremque recusandae? Atque facere totam consectetur nemo dolore.</p>
      </main>
    )
  }
export function MainSistema(){
    return (
      <main>
        <h1>Teste do Conteúdo Sistema</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias porro, non optio amet nostrum cum nulla iusto reprehenderit voluptatem exercitationem iure, doloribus doloremque recusandae? Atque facere totam consectetur nemo dolore.</p>
      </main>
    )
  }
export function MainPrincipal() {
    return (
      <main>
        <SimpleSlider />
        <div class='textmain'>
          <h1>Planos Arcanos</h1>
          <p>Existem 3 planos de arcanos, que não possuem interação direta entre eles, com exceção de 2 portões, o do Norte e o do Sul.</p>
          <h2>Barreira de Eva</h2>
          <p>Situada após o portão Norte, tem sua criação feita por antigos magos e que atualmente é o refúgio dos seres humanos, entretanto, dentro dessa barreira não é possível cultivar e nem criar animais, dessa forma se faz necessário haver colônias no plano terreno que são protegidas pelos manos da barreira, dentro dessa barreira existem 6 castelos que flutuam dentro de uma expécie de vácuo arcano vazio, cada castelo está a uma distância colossal um do outro, porem há um portal ligando o primeiro ao próximo, fazendo uma fila que termina no 7 castelo, chamado de Centro Arcano, a residência dos Clãs Clericais e do Rei Mago.</p>
          <h2>Plano Terreno</h2>
          <p>O mundo que conhecemos, porém após a invasão das maldições vindas da Barreira de Lilith. se passaram mais de 1000 anos da invasão, e atualmente o globo está totalmente dominado pelas maldições e seus fantoches. O início padrão do cenário é 2056 após a queda, um ano repleto de conflitos dentro da academia, principalmente após a recente nomeação de Fênix Blackfire para guardião da casa do fogo, cargo por séculos preenchido apenas por membros da casa Dracon. O plano terreno está situado entre o Portão Norte e o Sul, tendo cada um de seus portões em cada polo.</p>
          <h2>Barreira de Lilith</h2>
          <p>É uma barreira levantada na criação do mundo em tempos desconhecidos, pouco se sabe do que existe após os portais, entretanto é de lá que surgem as maldições. Segundo as lendas é dito também 	que é para lá que vão as almas dos seres humanos após a morte, essa teoria se baseia no fato de que caso um feiticeiro seja morto sem ser por magias de mantra há a possibilidade de que ele retorne como auma maldição.</p>
        </div>
      </main>
    )
  }