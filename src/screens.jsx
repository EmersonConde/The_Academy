import react from 'react';
import SimpleSlider from './slider.jsx'
import './App.css'
import content from "./content.json"
import img_vont from '/will_image.jpeg'
import bad_vont from "/bad_vont.jpeg"
import atri_img from "/hex-attributes.png"
import criacao from '/criacao.jpeg'
import scale from '/scale_image.jpeg'
import macarico from './assets/bem_macarico.jpeg'

const cp = content.criacao_personagem;
const vont = content.vontade; 
const atri = content.Atributos;
const atrsec = content.Atributos_Secudarios;
const hab = content.habilidades;

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
      {/* Presentation */}
      <img src={criacao} class="max-h-100 mx-auto opacity-50" alt="Criação de Personagem" />
      <div id='criacao' class="mt-0 mx-auto mb-10" dangerouslySetInnerHTML={{__html: [cp.t1, cp.p1, cp.p2].join("")}} />
      <section class="flex flex-wrap items-center">
        <img class="max-h-150 my-5 mx-auto opacity-50" src={img_vont} alt="Will Image" />
        <div class='vontade' dangerouslySetInnerHTML={{__html: [vont.t1, vont.p1, good_vonts.join("")].join("")}} />
        <div class='vontade' dangerouslySetInnerHTML={{__html: [vont.p2, cruel_vonts.join(""), vont.interacao].join("")}} />
        <img class="max-h-150 my-5 mx-auto opacity-50" src={bad_vont} alt="Bad Will" />
      </section>
      {/* Scale */}
      <section class="mx-auto max-w-[500px]">
        <h2>{atri.escala}</h2>
        <p>{atri.p0}</p>
        <p class="my-5">{atri.test_scale}</p>
        <img class="max-h-100 my-5 mx-auto opacity-50" src={scale} alt="Academy Scale" />
      </section>
      {/* Basic Attributes */}
      <section id='atributo' class="flex flex-wrap items-center">
        <img id='atri1' class="max-h-150 my-5 mx-auto opacity-50" src={atri_img} alt="Attributes Hex" />
        <div class="max-w-[500px] ml-auto">
          <h2 class="mt-10">{atri.atbasico}</h2>
          <p>{atri.p1}</p>
          <h3>{atri.forca.name}</h3><p>{atri.forca.descrip}</p>
          <h3>{atri.agil.name}</h3><p>{atri.agil.descrip}</p>
          <h3>{atri.resi.name}</h3><p>{atri.resi.descrip}</p>
          <h3>{atri.inte.name}</h3><p>{atri.inte.descrip}</p>
          <h3>{atri.sabe.name}</h3><p>{atri.sabe.descrip}</p>
          <h3>{atri.vont.name}</h3><p>{atri.vont.descrip}</p>
          <h3>{atri.luck.name}</h3><p>{atri.luck.descrip}</p>
        </div>
        <img id='atri2' class="hidden max-h-150 my-5 mx-auto opacity-50" src={atri_img} alt="Attributes Hex" />
      </section>
      {/* Secondary Attributes */}
      <section class="flex flex-wrap items-center">
        <div class="max-w-[500px] ml-auto">
          <h2 class="mt-10">{atrsec.name}</h2>
          <p>{atrsec.descrip}</p>
          <h3>{atrsec.storage.name}</h3><p>{atrsec.storage.descrip}</p>
          <h3>{atrsec.life.name}</h3><p>{atrsec.life.descrip}</p>
          <h3>{atrsec.liberation.name}</h3><p>{atrsec.liberation.descrip}</p>
          <h3>{atrsec.preparation.name}</h3><p>{atrsec.preparation.descrip}</p>
          <h3>{atrsec.refinement.name}</h3><p>{atrsec.refinement.descrip}</p>
          <h3>{atrsec.defense.name}</h3><p>{atrsec.defense.descrip}</p>
          <h3>{atrsec.load.name}</h3><p>{atrsec.load.descrip}</p>
          <h3>{atrsec.stamps.name}</h3><p>{atrsec.stamps.descrip}</p>
        </div>
        <img class="max-h-100 my-5 mx-auto opacity-50" src={macarico} alt="Storage Image" />
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
      <div class="flex flex-wrap justify-center gap-12 container mx-auto">
          <div class="w-[360px] h-[480px] py-8 px-1">
              <div class="relative flex flex-col justify-center items-center w-[300px] h-[400px] mx-auto p-2 bg-slate-50 border-slate-900 border-2 rounded-3xl">

                  <h3 class="absolute -top-5 -left-5 w-64 p-2 bg-inherit border-slate-900 text-slate-900 border-2 rounded-3xl text-2xl font-merriweather text-center">{hab.id1.title}</h3>

                  <h3 class="absolute flex justify-around flex-wrap top-10 w-64 p-2 text-slate-900 rounded-3xl text-2xl font-merriweather text-center">
                    <small>Armas: 12(3)</small>
                    <small>Desarmado: 0</small>
                    <small>Corpo: 0</small>
                    <small>Estudo: 0</small>
                    <small>Mantra: 0</small>
                  </h3>

                  <a href="https://eazyip.github.io/" target="__blank" class="block w-full mx-auto p-2 md:mx-auto hover:rotate-2 transition ease-in-out delay-75 duration-150"><img src="https://imgur.com/iUzX7FD.png" alt="Eazy IP Web app showcase mockup" class="object-fill"/></a>

                  <p class="descrip1 absolute -bottom-8 left-6 w-[300px] p-4 bg-slate-800 text-slate-50 rounded-3xl hover:text-white">{hab.id1.book}<br />{hab.id1.cost}</p>
                  <p class="descrip2 hidden font-light absolute -bottom-20 left-6 w-[300px] p-4 bg-slate-800 text-slate-50 rounded-3xl hover:text-white">{hab.id1.description}</p>
              </div>
          </div>
          <div class="w-[360px] h-[480px] py-8 px-1">
              <div class="relative flex flex-col justify-center items-center w-[300px] h-[400px] mx-auto p-2 bg-slate-50 border-slate-900 border-2 rounded-3xl">

                  <h3 class="absolute -top-5 -left-5 w-64 p-2 bg-inherit border-slate-900 text-slate-900 border-2 rounded-3xl text-2xl font-merriweather text-center leading-4">{hab.id2.title} <small class="text-xs">{hab.id2.necess}</small> </h3>

                  <h3 class="absolute flex justify-around flex-wrap top-10 w-64 p-2 text-slate-900 rounded-3xl text-2xl font-merriweather text-center">
                    <small>Armas: 48(12)</small>
                    <small>Desarmado: 0</small>
                    <small>Corpo: 0</small>
                    <small>Estudo: 0</small>
                    <small>Mantra: 0</small>
                  </h3>

                  <a href="https://eazyip.github.io/" target="__blank" class="block w-full mx-auto p-2 md:mx-auto hover:rotate-2 transition ease-in-out delay-75 duration-150"><img src="https://imgur.com/iUzX7FD.png" alt="Eazy IP Web app showcase mockup" class="object-fill"/></a>

                  <p class="descrip1 absolute -bottom-8 left-6 w-[300px] p-4 bg-slate-800 text-slate-50 rounded-3xl hover:text-white">{hab.id2.book}<br />{hab.id2.cost}</p>

                  <p class="descrip2 hidden font-light absolute -bottom-20 left-6 w-[300px] p-4 bg-slate-800 text-slate-50 rounded-3xl hover:text-white">{hab.id2.description}</p>
              </div>
          </div>
      </div>
    )
  }
export function MainItens(){
    return (
      <main>
        <h1>Teste do Conteúdo Itens</h1>
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