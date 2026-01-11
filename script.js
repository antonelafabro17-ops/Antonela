const password = prompt("Ingresá la contraseña para entrar:");

if (password !== "bauti123taylorteamo") {
  document.body.innerHTML = `
    <div style="
      background:#081a2b;
      color:white;
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      font-family:Montserrat, sans-serif;
      text-align:center;
    ">
      <h2>Acceso denegado</h2>
      <p>Pone bien la contraseña Bautistaaaa</p>
    </div>
  `;
  throw new Error("Acceso denegado, lol que mal :(");
}



const total = 10;

const correctAnswers = {
  q1: "Gustavo Cerati",
  q2: "Frutilla",
  q3: "Lila",
  q4: "House of the Dragon",
  q5: "Lola",
  q6: "Harry Potter y la cámara secreta",
  q7: "La música",
  q8: "Rolón",
  q9: "Plan chill",
  q10: "Licuado de banana"
};

/* ------------------ QUIZ ------------------ */
document.querySelectorAll("input[type=radio]").forEach(input => {
  input.addEventListener("change", updateProgress);
});

function updateProgress() {
  let answered = 0;
  for (let i = 1; i <= total; i++) {
    if (document.querySelector(`input[name="q${i}"]:checked`)) answered++;
  }
  document.getElementById("progressBar").style.width =
    (answered / total) * 100 + "%";
}

function checkQuiz() {
  let score = 0;

  for (let i = 1; i <= total; i++) {
    const ans = document.querySelector(`input[name="q${i}"]:checked`);
    if (ans && ans.value === "1") score++;
  }

  const result = document.getElementById("quizResult");
  const answersDiv = document.getElementById("answers");
  const img = document.getElementById("finalImg");

  const percent = (score / total) * 100;

  let msg = "";

  if (percent >= 50) {
    msg = `ME CONOCES LO SUFICIENTE. GRACIAS POR PRESTARME ATENCION. ${score}/10 respuestas correctas.`;
    img.src = "feliz.jpeg";
  } else {
    msg = `RESPONDISTE CUALQUIERA. REAL, ¿ME QUERES? ${score}/10 respuestas correctas.`;
    img.src = "tristee.jpeg";
  }

  result.textContent = msg;
  result.classList.remove("show");
  setTimeout(() => result.classList.add("show"), 100);

  img.style.display = "block";

  let html = "<h3>Respuestas correctas</h3><ul>";
  for (let k in correctAnswers) {
    html += `<li>${k.toUpperCase()}: ${correctAnswers[k]}</li>`;
  }
  html += "</ul>";
  answersDiv.innerHTML = html;
}

/* ------------------ JUNTADA ------------------ */
const yesBtn = document.getElementById("yesBtn");

function moveYes() {
  const zone = document.querySelector(".btn-zone");
  const maxX = zone.clientWidth - yesBtn.offsetWidth;
  const maxY = zone.clientHeight - yesBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  yesBtn.style.left = x + "px";
  yesBtn.style.top = y + "px";
}

function sayNo() {
  const msg = document.getElementById("finalMsg");
  const img = document.getElementById("finalPhoto");

  msg.textContent =
    "Con que no te querés juntar conmigo gay. Así soooos. <br> Nos vamos a juntar igual. Te quiero :)";

  img.style.display = "block";
}


