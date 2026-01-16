const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f"];
const grid = document.getElementById("grid");
const scoreText = document.getElementById("score");
const gameOverDiv = document.getElementById("gameOver");
const targetBox = document.getElementById("targetColorBox");

let targetColor = "";
let score = 0;
let gameOver = false;

function startGame() {
    grid.innerHTML = "";
    gameOver = false;
    gameOverDiv.classList.add("hidden");

    // 🎯 Target Color
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    targetBox.style.background = targetColor;

    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.className = "tile";

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        tile.style.background = randomColor;

        tile.onclick = () => tileTap(randomColor);
        grid.appendChild(tile);
    }
}

function tileTap(color) {
    if (gameOver) return;

    if (color === targetColor) {
        score++;
        scoreText.innerText = "Score: " + score;
        startGame();
    } else {
        endGame();
    }
}

function endGame() {
    gameOver = true;
    gameOverDiv.classList.remove("hidden");
}

function watchAd() {
    alert("Ad watched ✔ Extra Life Granted");
    startGame();
}

function restartGame() {
    score = 0;
    scoreText.innerText = "Score: 0";
    startGame();
}

startGame();
