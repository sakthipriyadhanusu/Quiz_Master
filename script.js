document.getElementById("checkScore").addEventListener("click", function() {
  let score = 0;

  const ans1 = document.getElementById("q1").value.trim();
  const ans2 = document.getElementById("q2").value.trim().toLowerCase();

  if (ans1 === "11") score += 1;
  if (ans2 === "paris") score += 1;

  document.getElementById("scoreOutput").textContent = `Your score: ${score} / 2`;
});
