const buttons = document.querySelectorAll(".optionBtn");
const feedback = document.getElementById("feedback");
const audio = new Audio("assets/audiomass-output.mp3");
const kangaroo = document.getElementById("kangaroo");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isCorrect = btn.dataset.answer === "true";

    // Reset buttons (overlay remains off unless correct)
    buttons.forEach((b) => {
      b.style.backgroundColor = "#fff";
      b.style.color = "#000";
      b.style.transition = "all 0.2s ease";
    });

    if (isCorrect) {
      btn.style.backgroundColor = "#4caf50";
      btn.style.color = "#fff";
      feedback.textContent = "Correct!";
      feedback.classList.remove("incorrect");
      feedback.classList.add("correct");

      audio.currentTime = 0;
      audio.play();

      // Show kangaroo overlay
      setTimeout(() => {
        kangaroo.classList.add("show");
      }, 200);
    } else {
      btn.style.backgroundColor = "#e74c3c";
      btn.style.color = "#fff";
      feedback.textContent = "Try again!";
      feedback.classList.remove("correct");
      feedback.classList.add("incorrect");
    }
  });
});
