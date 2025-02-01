import react from 'react';
import SimpleSlider from './slider.jsx'
import './App.css'

export function MainPalatine(){
    return (
      <main>
        <div class="textmain">
          <h1>Criação de Personagem</h1>
          <p>Cada mago dentro do mundo de blades & magic é único, portanto antes de começar a criar seu personagem é necessário ter em mente que seu mago deve ser único, deve possuir uma forte vontade e personalidade, podendo assim manifestar sua vontade no mundo real a partir da energia mantra.</p>
          <h2>Informações Básicas</h2>
          <p>Inicialmente é necessário criar seu personagem como um humano normal, ter uma noção do que ele era antes de entrar na academia e os motivos que o levaram a se juntar a ela. Defina, nome, idade, altura, aparência, história e caráter da vontade.</p>
          <h2>Caráter da Vontade</h2>
          <p>Magos extraem força de suas vontades positivas, que canalizam através da mantra para criar grimórios e habilidades. As principais vontades positivas são:</p>
          <h3>Vontade de Proteção</h3>
          <ul>
              <li>Descrição: Desejo de proteger alguém ou algo amado.</li>
              <li>Influência: Magos com essa vontade tendem a desenvolver habilidades defensivas e suporte.</li>
              <li>Exemplo: Um escudo mágico criado para proteger aliados.</li>
          </ul>
          <h3>Vontade de Superação</h3>
          <ul>
              <li>Descrição: Motivação para vencer desafios ou superar limitações pessoais.</li>
              <li>Influência: Gera magos resilientes, com habilidades de regeneração ou resistência.</li>
              <li>Exemplo: Um mago que pode continuar lutando mesmo quando gravemente ferido.</li>
          </ul>
          <h3>Vontade de Justiça</h3>
          <ul>
              <li>Descrição: Desejo de corrigir erros ou punir os que causam sofrimento.</li>
              <li>Influência: Estilos de combate direto e punitivo, com foco em desarmar ou subjugar o inimigo.</li>
              <li>Exemplo: Golpes mágicos que enfraquecem os adversários ao revelar suas fraquezas.</li>
          </ul>
          <h3>Vontade de Conhecimento</h3>
          <ul>
              <li>Descrição: Fome insaciável por aprender e entender o mundo.</li>
              <li>Influência: Estilos técnicos e inteligentes, com habilidades de análise e manipulação do ambiente.</li>
              <li>Exemplo: Feitiços que leem ou copiam habilidades inimigas.</li>
          </ul>
          <h3>Vontade de Criação</h3>
          <ul>
              <li>Descrição: Desejo de construir algo duradouro ou belo.</li>
              <li>Influência: Magos com habilidades de invocação, construção de barreiras ou objetos mágicos.</li>
              <li>Exemplo: Um mago que cria artefatos temporários para atacar ou defender.</li>
          </ul>
          <p>As maldições nascem de emoções negativas e desejos destrutivos, frequentemente associados à dor e ao sofrimento. As principais vontades negativas são:</p>
          <h3>Vontade de Vingança</h3>
          <ul>
              <li>Descrição: Desejo de punir quem causou sofrimento.</li>
              <li>Influência: Maldições vingativas com poderes focados em dano contínuo e perseguição implacável.</li>
              <li>Exemplo: Uma maldição que drena vitalidade enquanto persegue seu alvo incansavelmente.</li>
          </ul>
          <h3>Vontade de Ódio</h3>
          <ul>
              <li>Descrição: Fúria irracional e destrutiva.</li>
              <li>Influência: Maldições poderosas, mas descontroladas, com explosões de energia destrutiva.</li>
              <li>Exemplo: Golpes explosivos que causam dano indiscriminado.</li>
          </ul>
          <h3>Vontade de Desespero</h3>
          <ul>
              <li>Descrição: Angústia profunda que corrompe o espírito.</li>
              <li>Influência: Maldições com poderes que enfraquecem ou paralisam adversários emocionalmente.</li>
              <li>Exemplo: Uma aura que espalha medo e apatia ao redor.</li>
          </ul>
          <h3>Vontade de Ganância</h3>
          <ul>
              <li>Descrição: Desejo insaciável de obter mais, seja poder, riqueza ou status.</li>
              <li>Influência: Maldições que roubam força ou recursos dos adversários.</li>
              <li>Exemplo: Sugadores de energia que enfraquecem inimigos enquanto se fortalecem.</li>
          </ul>
          <h3>Vontade de Controle</h3>
          <ul>
              <li>Descrição: Desejo de dominar tudo ao redor.</li>
              <li>Influência: Maldições com habilidades de manipulação e controle mental.</li>
              <li>Exemplo: Um feitiço que transforma aliados em servos temporários.</li>
          </ul>
          <h2>Interação entre Vontades</h2>
          <ul>
              <li>Magos: Os Magos podem desenvolver suas habilidades ao focar em suas vontades positivas, criando estratégias únicas.</li>
              <li>Maldições: Maldições nascem das vontades negativas e se tornam mais perigosas quanto maior for o foco nessa negatividade.</li>
              <li>Conflito: Magos enfrentam maldições que exploram suas fraquezas emocionais, enquanto maldições lutam para destruir a resiliência dos magos.</li>
              <li>Magos Malignos: Normalmente magos que possuem vontades negativas se tornam manipuladores de maldições que buscam trazer o caos, movidos a partir de desejos profanos.</li>
          </ul>
          <h2>Atributos Básicos</h2>
          <p>Na criação do personagem devem ser rolados 1d4 individualmente para cada atributo, sem a opção de alterar a posição após a rolagem.</p>
          <p>Força: Representa a potência física do personagem, influenciando sua capacidade de causar dano físico, carregar objetos pesados e resistir a ataques baseados em força bruta. Magos com alta força são mais eficazes em combate corpo a corpo.</p>
          <p>Agilidade: Reflete a velocidade e destreza do personagem, afetando sua capacidade de se mover rapidamente, esquivar de ataques e realizar acrobacias. Agilidade alta é crucial para magos que dependem de ataques rápidos ou evasão.</p>
          <p>Resistência: Mede a capacidade do personagem de suportar danos físicos e o desgaste físico, incluindo a resistência a venenos, doenças e fadiga. A resistência é vital para resistir a ataques poderosos e prolongar a eficácia durante longas batalhas.</p>
          <p>Inteligência: Relacionada à capacidade cognitiva, resolução de problemas e aprendizado de magias. Magos com alta inteligência têm um melhor controle sobre suas habilidades mágicas, além de uma maior eficiência ao aprender novas magias.</p>
          <p>Sabedoria: Reflete a percepção, intuição e entendimento profundo sobre o mundo ao redor. Afeta a capacidade de tomar decisões sensatas e usar estratégias eficazes. Magos sábios possuem maior conexão com o maná e podem manipular magia com mais controle e precisão.</p>
          <p>Vontade: A força interna e determinação do personagem, essencial para o uso da magia (mantra). Vontade alta aumenta a capacidade do mago de canalizar sua energia interna para realizar feitos mágicos poderosos, resistir a efeitos mentais ou controlar o próprio destino em momentos críticos.</p>
        </div>
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