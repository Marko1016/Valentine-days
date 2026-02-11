// PASSWORD CHECK
function checkPassword() {
  const pass = document.getElementById("passwordInput").value;

  if (pass.toLowerCase() === "blok m") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");

    document.getElementById("bgMusic").play();
    createHearts();
  } else {
    alert("Wrong password 💔 Try again");
  }
}

// HEARTS ANIMATION
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

// LETTER TYPEWRITER
const message =
  "Alea, since Blok M, my world has been brighter. Every laugh, every little memory with you means everything to me. You are my happiness and my heart. Forever yours, Omar 💖";

let i = 0;

function openLetter() {
  document.getElementById("letterBox").classList.remove("hidden");
  typeWriter();
}

function typeWriter() {
  if (i < message.length) {
    document.getElementById("typedText").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

// COUNTDOWN
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML =
    "Countdown to Valentine's Day: " + days + " days 💘";
}, 1000);

// MOVING NO BUTTON
function moveNo() {
  const btn = document.getElementById("noBtn");

  btn.style.position = "absolute";
  btn.style.top = Math.random() * 150 + "px";
  btn.style.left = Math.random() * 200 + "px";
}

// YES BUTTON
function yesAnswer() {
  alert("YAYYY 💖 I love you Alea!!");
}
