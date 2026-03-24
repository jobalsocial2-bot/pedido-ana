const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const buttonsArea = document.getElementById("buttonsArea");
const playMusicBtn = document.getElementById("playMusicBtn");
const playerContainer = document.getElementById("playerContainer");

const romanticMessages = [
  "Eu sabia que o seu coração ainda lembrava de mim. 💞",
  "Prometo transformar esse sentimento em algo ainda mais lindo. ✨",
  "Então vem... porque eu ainda escolho você. 💖",
  "Esse é o começo da nossa melhor história. 🌹"
];

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = 16 + Math.random() * 20 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

function burstHearts() {
  for (let i = 0; i < 22; i++) {
    setTimeout(createHeart, i * 120);
  }
}

yesBtn.addEventListener("click", () => {
  const random =
    romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
  message.innerHTML = random;
  burstHearts();
  yesBtn.innerText = "Você me fez feliz 💖";
});

function moveNoButton() {
  const areaRect = buttonsArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = Math.max(0, areaRect.width - btnRect.width);
  const maxY = 50;

  noBtn.classList.add("moving");
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
  message.innerHTML = "Pensa com carinho... meu coração ainda escolhe você. 🥹";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener(
  "touchstart",
  (e) => {
    e.preventDefault();
    moveNoButton();
  },
  { passive: false }
);

playMusicBtn.addEventListener("click", () => {
  playerContainer.innerHTML = `
    <iframe
      width="0"
      height="0"
      src="https://www.youtube.com/embed/4h3z9g7uG0Q?autoplay=1&loop=1&playlist=4h3z9g7uG0Q"
      title="Trevo (Tu) - ANAVITÓRIA"
      frameborder="0"
      allow="autoplay"
    ></iframe>
  `;
  playMusicBtn.innerText = "🎵 Música tocando";
});