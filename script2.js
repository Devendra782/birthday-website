const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMsg = document.getElementById('surpriseMessage');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = '🔇 Pause Music';
  } else {
    bgMusic.pause();
    musicBtn.textContent = '🎵 Play Music';
  }
});

surpriseBtn.addEventListener('click', () => {
  surpriseMsg.classList.add('show');
  surpriseMsg.classList.remove('hidden');
  confetti({
    particleCount: 150,
    spread: 60,
    origin: { y: 0.6 }
  });
  fadeInPhotos();
});

function fadeInPhotos() {
  document.querySelectorAll('.photo-grid img').forEach((img, i) => {
    setTimeout(() => {
      img.classList.add('fade-visible');
    }, i * 300);
  });
}
