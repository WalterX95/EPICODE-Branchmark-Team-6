document.getElementById('rate').addEventListener('click', function () {
    location.href = 'feedback.html'
});

// Recupera le risposte salvate
const correctAnswer = parseInt(localStorage.getItem("correctAnswer"));
const incorrectAnswer = parseInt(localStorage.getItem("incorrectAnswer"));

// Calcola i totali
/*const totalCorrect = ;
const totalWrong = incorrectAnswer.length;*/

// Evita di contare le domande duplicate
//const totalQuestions = new Set([...correctAnswer, ...incorrectAnswer]).size;

const totalQuestions = correctAnswer + incorrectAnswer;
// Calcola le percentuali
if (totalQuestions === 0) {
  document.getElementById("percentageCorrect").innerText = "0%";
  document.getElementById("questionsCorrect").innerText = "No questions answered";

  document.getElementById("percentageWrong").innerText = "0%";
  document.getElementById("questionsWrong").innerText = "No questions answered";
} else {
  const percentageCorrect = ((correctAnswer / totalQuestions) * 100).toFixed(1);
  const percentageWrong = ((incorrectAnswer  / totalQuestions) * 100).toFixed(1);

  document.getElementById("percentageCorrect").innerText = `${percentageCorrect}%`;
  document.getElementById("questionsCorrect").innerText = `${correctAnswer}/${totalQuestions} questions`;

  document.getElementById("percentageWrong").innerText = `${percentageWrong}%`;
  document.getElementById("questionsWrong").innerText = `${incorrectAnswer}/${totalQuestions} questions`;
}

  
  // Configura il grafico
  const ctx = document.getElementById("resultChart").getContext("2d");
  
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Correct", "Wrong"],
      datasets: [{
        data: [correctAnswer, incorrectAnswer],
        backgroundColor: ["#4CAF50", "#F44336"], // Colori per corrette e sbagliate
        borderColor: ["#FFFFFF", "#FFFFFF"], // Bordo bianco
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        }
      }
    }
  });
  

