function calculateScore(callback) {
  const correctAnswers = {
    q1: "nirmala sitaram",
    q2: "delhi",
  };

  const userAnswers = {
    q1: document.getElementById("q1").value.toLowerCase(),
    q2: document.getElementById("q2").value.toLowerCase(),
  };

  return callback(correctAnswers, userAnswers);
}
function strictScoring(correct, user) {
  let score = 0;
  if (user.q1 === correct.q1) score++;
  if (user.q2 === correct.q2) score++;
  return score;
}
function checkScore(scoringMethod) {
  const score = calculateScore(scoringMethod);
  document.getElementById("score").innerText = `Your Score: ${score}/2`;
}
