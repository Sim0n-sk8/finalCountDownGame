const buttons = document.querySelectorAll(".optionBtn");
const feedback = document.getElementById("feedback");
const audio = new Audio("assets/audiomass-output.mp3");
const kangaroo = document.getElementById("kangaroo");
const koala = document.getElementById("koala");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isCorrect = btn.dataset.answer === "true";

    // Reset all buttons
    buttons.forEach((b) => {
      b.style.backgroundColor = "#fff";
      b.style.color = "#000";
      b.style.transition = "all 0.2s ease";
    });

    feedback.classList.remove("correct", "incorrect");

    // Always remove animations before reapplying
    kangaroo.classList.remove("show");
    koala.classList.remove("show");
    void document.body.offsetWidth; // reflow trick to restart animation

    if (isCorrect) {
      // Set correct feedback
      btn.style.backgroundColor = "#4caf50";
      btn.style.color = "#fff";
      feedback.textContent = "Correct!";
      feedback.classList.add("correct");

      // play sound
      audio.currentTime = 0;
      audio.play().catch(() => {});

      // Start both animations at once
      kangaroo.classList.add("show");
      koala.classList.add("show");

    } else {
      // Incorrect feedback
      btn.style.backgroundColor = "#e74c3c";
      btn.style.color = "#fff";
      feedback.textContent = "Try again!";
      feedback.classList.add("incorrect");
    }
  });
});
