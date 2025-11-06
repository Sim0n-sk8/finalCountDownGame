const buttons = document.querySelectorAll(".optionBtn");
const feedback = document.getElementById("feedback");
const audio = new Audio("assets/MAW.mp3");
const kangaroo = document.getElementById("kangaroo");
const koala = document.getElementById("koala");
const scoob = document.getElementById("scoob");
const irwin = document.getElementById("irwin");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isCorrect = btn.dataset.answer === "true";

    // Reset buttons
    buttons.forEach((b) => {
      b.style.backgroundColor = "#fff";
      b.style.color = "#000";
      b.style.transition = "all 0.2s ease";
    });

    feedback.classList.remove("correct", "incorrect");

    // Reset animations
    kangaroo.classList.remove("show");
    koala.classList.remove("show");
    irwin.classList.remove("show");
    void document.body.offsetWidth; // reflow trick to restart animations

    if (isCorrect) {
      // Feedback
      btn.style.backgroundColor = "#4caf50";
      btn.style.color = "#fff";
      feedback.textContent = "Correct!";
      feedback.classList.add("correct");

      audio.currentTime = 0;
      audio.play().catch(() => {});

      // Start all animations at once
      kangaroo.classList.add("show"); // moves way higher
      koala.classList.add("show");    // chaosKoala
      irwin.classList.add("show");    // fades in at bottom
    } else {
      // Incorrect feedback
      btn.style.backgroundColor = "#e74c3c";
      btn.style.color = "#fff";
      feedback.textContent = "Try again!";
      feedback.classList.add("incorrect");
    }
  });
});
