const mario = document.querySelector(".mario");
const cano = document.querySelector(".cano");
const nuvem = document.querySelector(".nuvem");
const tartaruga = document.querySelector(".tartaruga");
const palco = document.querySelector(".palco-game");
const body = document.querySelector(".bodyjogo");
const audio = new Audio("audios/pulo.mp3");
const morte = new Audio("audios/morte.mp3");
const theme = new Audio("audios/theme.mp3");
const theme2 = new Audio("audios/theme2.mp3");

// Função para animar o cano
function criarCano() {
  cano.style.display = "block";
  cano.style.right = "-100px";
  cano.style.animation = "cano-animation 1.5s linear";

  setTimeout(() => {
    cano.style.display = "none";
    cano.style.animation = "none";
  }, 1500);
}

// Função para animar a tartaruga
function criarTartaruga() {
  tartaruga.style.display = "block";
  tartaruga.style.right = "-100px";
  tartaruga.style.animation = "tartaruga-animation 2.5s linear";

  setTimeout(() => {
    tartaruga.style.display = "none";
    tartaruga.style.animation = "none";
  }, 2500);
}

// Alterna entre cano e tartaruga
let alternar = true;

setTimeout(() => {
  setInterval(() => {
    if (alternar) {
      criarCano();
    } else {
      criarTartaruga();
    }
    alternar = !alternar;
  }, 2000); // alterna a cada 2 segundos
}, 1000); // atraso inicial



let pulando = false;
let velocidade = 0;
let gravidade = 1;
let alturaMaxima = 200;
let posicao = 0;

// Início do jogo
setTimeout(() => {
  tartaruga.classList.add("ativo");

  setInterval(() => {
    tartaruga.classList.remove("ativo");

    setTimeout(() => {
      tartaruga.classList.add("ativo");
    }, 100); // pequeno intervalo entre animações
  }, 5000); // tempo total da animação da tartaruga
}, 2000); // atraso inicial de 2 segundos

// Início do jogo
setTimeout(() => {
  tartaruga.classList.add("ativo");

  setInterval(() => {
    tartaruga.classList.remove("ativo");

    setTimeout(() => {
      tartaruga.classList.add("ativo");
    }, 100); // pequeno intervalo entre animações
  }, 5000); // tempo total da animação da tartaruga
}, 2000); // atraso inicial de 2 segundos

const pulo = () => {
  if (pulando) return;

  pulando = true;
  velocidade = 20;

  const animar = () => {
    velocidade -= gravidade;
    posicao += velocidade;

    if (posicao <= 0) {
      posicao = 0;
      mario.style.bottom = "0px";
      pulando = false;
      return;
    }

    mario.style.bottom = `${posicao}px`;
    requestAnimationFrame(animar);
  };

  requestAnimationFrame(animar);
};

document.addEventListener("keydown", pulo);

const loop = setInterval(() => {
  const marioRect = mario.getBoundingClientRect();
  const canoRect = cano.getBoundingClientRect();
  const tartarugaRect = tartaruga.getBoundingClientRect();

  const colisaoComCano =
    marioRect.right > canoRect.left &&
    marioRect.left < canoRect.right &&
    marioRect.bottom > canoRect.top &&
    marioRect.top < canoRect.bottom;

  const colisaoComTartaruga =
    marioRect.right > tartarugaRect.left &&
    marioRect.left < tartarugaRect.right &&
    marioRect.bottom > tartarugaRect.top &&
    marioRect.top < tartarugaRect.bottom;

  if (colisaoComCano || colisaoComTartaruga) {
    cano.style.animation = "none";
    cano.style.left = `${cano.offsetLeft}px`;

    tartaruga.style.animation = "none";
    tartaruga.style.left = `${tartaruga.offsetLeft}px`;
    tartaruga.style.width = "50px";
    tartaruga.style.animation = "morte-animation 600ms forwards ease";

    const marioBottom = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
    mario.style.animation = "morte-animation 600ms forwards ease";
    mario.style.position = "absolute";
    mario.style.bottom = `${marioBottom}px`;

    mario.src = "img/game-over.png";
    morte.play();
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    theme.pause();
    theme2.pause();
    pause();

    swal({
      text: "Você foi muito longe!!",
      title: "Sua pontuação foi de: " + ss,
      icon: "img/mariofinal.png",
      buttons: "tentar novamente",
      dangerMode: false,
    }).then((ok) => {
      if (ok) {
        swal((onclick = window.location.href = "index.html"), {});
      } else {
        swal(location.reload(), {
          icon: "",
        });
      }
    });

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", pulo);

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 100;
var cron;

function start() {
  cron = setInterval(() => {
    timer();
  }, tempo);
}

function pause() {
  clearInterval(cron);
}

function timer() {
  ss++;

  if (ss > 150) {
    theme.pause();
    theme2.play();
    palco.style.background =
      "-gradient(0deg, rgba(111,199,175,1) 20%, rgba(160,211,156,1) 40%, rgba(201,223,140,1) 100%)";
    body.style.background =
      "linear-gradient(0deg, rgba(21,18,12,1) 0%, rgba(41,35,24,1) 10%, rgba(62,53,36,1) 20%, rgba(83,70,48,1) 30%, rgba(104,88,60,1) 40%, rgba(124,106,71,1) 50%, rgba(145,123,83,1) 60%, rgba(166,141,95,1) 70%, rgba(186,158,107,1) 80%, rgba(207,176,119,1) 90%)";
    cano.src = "img/cacto.png";
    nuvem.src = "img/nuvem2.png";
  }

  var format = ss < 10 ? "0" + ss : ss;
  document.getElementById("counter").innerText = format;
  return format;
}
