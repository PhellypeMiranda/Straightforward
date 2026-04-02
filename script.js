document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  answer.classList.toggle('active');
}

function startFakeCountdown() {
  const countdownElement = document.getElementById("countdown");
  let timeLeft = 3 * 24 * 60 * 60; // 3 days in seconds

  function updateCountdown() {
    if (timeLeft <= 0) {
      timeLeft = 3 * 24 * 60 * 60; // Reset to 3 days
    }
    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = Math.floor(timeLeft % 60);
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    timeLeft--;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000); // Update every second
}

document.addEventListener("DOMContentLoaded", startFakeCountdown);