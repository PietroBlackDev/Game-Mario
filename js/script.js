const mario = document.querySelector(".mario");       //Estou puxando as classes css para transformar elas em constantes
const cano = document.querySelector(".cano");
const nuvem = document.querySelector(".nuvem");
const tartaruga = document.querySelector(".tartaruga");
const palco = document.querySelector(".palco-game");
const body = document.querySelector(".bodyjogo");
const audio = new Audio("audios/pulo.mp3");           //criando uma constante para puxar os audios e por eles dentro da mesma
const morte = new Audio("audios/morte.mp3");
const theme = new Audio("audios/theme.mp3");
const theme2 = new Audio("audios/theme2.mp3");

const pulo = () => {
  audio.play();                                       //dando play no audio do pulo
  mario.classList.add("pulo");                        //colocando o pulo na classe do mario

  setTimeout(() => {
    mario.classList.remove("pulo");                   //após certo tempo a classe de pulo é removida do mario
  }, 600);
};

const loop = setInterval(() => {                      //criando uma constante chamada de loop, para que os objetos do jogo fiquem em um loop infinito indo e voltando

  const canoPosition = cano.offsetLeft;               //Retorna a distancia em pixels do elemento pai, levando em consideração a distância à esquerda
  const marioPosition = +window                       //Window é a janela do seu navegador
    .getComputedStyle(mario)                          //Retorna um objeto contendo os valores de todas as propriedades CSS de um elemento
    .bottom.replace("px", "");                        //Permite substituir uma sequencia de caracteres por outra
  const tartarugaPosition = tartaruga.offsetLeft;

  if (canoPosition <= 120 && canoPosition >= 0 && marioPosition < 100 || tartarugaPosition <= 120 && tartarugaPosition >= 0 && marioPosition < 100) {    //nesse if eu uso como condição a posição do mario em comparação com o cano, caso eles colidam o loop é quebrado!

    cano.style.animation = "none";                                           //retirando toda a animação do cano
    cano.style.left = `${canoPosition}px`;

    tartaruga.style.animation = "none";
    tartaruga.style.left = `${tartarugaPosition}px`;
    tartaruga.style.width = "50px";
    tartaruga.style.animation = "morte-animation 600ms forwards ease";           //adicionando uma animação de morte, no momento que a tartaruga "morre" ao colidir com o mario

    mario.style.animation = "morte-animation 600ms forwards ease";           //adicionando uma animação de morte, no momento que o mario "morre" ao colidir com o cano
    mario.style.position = "absolute";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "img/game-over.png";                                         //mudando a imagem do mario para a de morte
    morte.play();                                                            //dando play no som de morte
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    theme.pause();                                                           // pausando a musica tema assim que o mario morre
    theme2.pause();
    pause();                                                                 // pausando o contador de pontuação

    swal({                                                                   // alerta da biblioteca swal com estilização propria
      text: "Você foi muito longe!!",
      title: "Sua pontuação foi de: " + ss,                                  //mostrando a pontuação final
      icon: "img/mariofinal.png",
      buttons: "tentar novamente",
      dangerMode: false,
    }).then((ok) => {
      if (ok) {
        swal((onclick = window.location.href = "index.html"), {});                             //se o usuario clicar em tentar novamente ele recomeça o jogo
      } else {
        swal(location.reload(), {
          icon: "",                                                          //se o usuario clicar fora do alerta, o jogo recomeça tambem
        });
      }
    });

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", pulo);                                  //colocando que o pulo vai ser ativado quando uma tecla do teclado for clicada

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 100;                                                             //a cada quantos milesimos vai ser adicionado 1 na pontuação
var cron;

//Inicia a contagem
function start() {
  cron = setInterval(() => {
    timer();
  }, tempo);
}

//Pausa a contagem
function pause() {
  clearInterval(cron);
}

//Faz a contagem do tempo e exibição
function timer() {
  ss++; //Incrementa +1 na variável ss

  if (ss > 50) {
    theme.pause();
    theme2.play();
    palco.style.background = "linear-gradient(0deg, rgba(111,199,175,1) 20%, rgba(160,211,156,1) 40%, rgba(201,223,140,1) 100%)";
    body.style.background = "linear-gradient(0deg, rgba(21,18,12,1) 0%, rgba(41,35,24,1) 10%, rgba(62,53,36,1) 20%, rgba(83,70,48,1) 30%, rgba(104,88,60,1) 40%, rgba(124,106,71,1) 50%, rgba(145,123,83,1) 60%, rgba(166,141,95,1) 70%, rgba(186,158,107,1) 80%, rgba(207,176,119,1) 90%)";
    cano.src = "img/cacto.png";
    nuvem.src = "img/nuvem2.png";
  }

  //Cria uma variável com o valor tratado de segundos
  var format = ss < 10 ? "0" + ss : ss;

  //Insere o valor tratado no elemento ID counter
  document.getElementById("counter").innerText = format;

  //Retorna o valor tratado
  return format;
}
