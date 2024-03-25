// Variáveis
const screen1 = document.querySelector("#screen1")
const screen2 = document.querySelector("#screen2")
const imgCookieClosed = document.querySelector("#screen1 img")
let randomPhrase = Math.round(Math.random() * 10)

// Frases
let phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Se você quer algo, vá atrás dele.",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "Seu melhor professor é seu último erro.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Siga os bons e aprenda com eles.",
  "É em meio a dificuldade que se encontra a oportunidade",
]

// Eventos
screen2.querySelector("button").addEventListener("click", btnReset)
imgCookieClosed.addEventListener("click", openCookie)

// Funções
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function newPhrase() {
  document.querySelector("#screen2 p").innerText = phrases[randomPhrase]
}

function openCookie() {
  toggleScreen()
  newPhrase()
}

function btnReset() {
  toggleScreen()
  randomPhrase = Math.round(Math.random() * 10)
}
