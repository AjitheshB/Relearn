const subjectName = new URLSearchParams(window.location.search).get("subject") || "General";
document.getElementById("quiz-subject").innerText = `${subjectName} Quiz`;

const questions = [
  {
    question: "What is 5 + 7?",
    options: ["10", "12", "14", "16"],
    answer: "12"
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which one is a programming language?",
    options: ["HTML", "CSS", "Python", "Photoshop"],
    answer: "Python"
  }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question-text").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("btn", "option-btn");
    btn.innerText = option;
    btn.onclick = () => {
      if (option === q.answer) {
        btn.style.backgroundColor = "green";
      } else {
        btn.style.backgroundColor = "red";
      }
    };
    optionsDiv.appendChild(btn);
  });
}

document.getElementById("next-btn").addEventListener("click", () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = "<h3>Quiz Complete 🎉</h3>";
  }
});

loadQuestion();
