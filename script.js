const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttonRow = document.getElementById("buttonRow");
const loveNote = document.getElementById("loveNote");

let teaseCount = 0;

function moveNoButton() {
  const rowRect = buttonRow.getBoundingClientRect();
  const buttonRect = noBtn.getBoundingClientRect();

  const maxX = rowRect.width - buttonRect.width;
  const maxY = rowRect.height - buttonRect.height;

  const nextX = Math.max(0, Math.random() * maxX);
  const nextY = Math.max(0, Math.random() * maxY);

  noBtn.style.left = `${nextX}px`;
  noBtn.style.top = `${nextY}px`;

  teaseCount += 1;
  if (teaseCount % 4 === 0) {
    noBtn.textContent = ["Nope 😜", "Try me 😆", "Too slow 💨", "Not today 🙃"][Math.floor(Math.random() * 4)];
  }
}

["mouseenter", "touchstart", "pointerdown"].forEach((eventName) => {
  noBtn.addEventListener(eventName, moveNoButton, { passive: true });
});

noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  loveNote.classList.remove("hidden");
  yesBtn.textContent = "Yay! 💞";
  noBtn.classList.add("hidden");

  const hearts = ["💖", "💘", "💝", "❤️", "🌹"];
  const burst = document.createElement("p");
  burst.style.fontSize = "1.4rem";
  burst.style.marginTop = "1rem";
  burst.textContent = hearts.join(" ");
  loveNote.appendChild(burst);
});
