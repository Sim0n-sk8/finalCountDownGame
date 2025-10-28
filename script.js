 window.onload = () => {
    const countdownEl = document.getElementById("countdown");
    const targetDate = new Date(2025, 10, 30, 0, 0, 0); // Nov 30, 2025

    const timer = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        countdownEl.innerText = "⏰ Time's up!";
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.innerText = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  };





  