const button = document.getElementById('openLetter');
const letter = document.getElementById('letter');

button.addEventListener('click', () => {
  letter.classList.toggle('hidden');
  letter.classList.toggle('reveal');
  button.textContent = 'Te amo más 💞';
  button.disabled = true;
  button.style.opacity = '0.8';
  button.style.cursor = 'default';
});

const heartsLayer = document.querySelector('.bg-hearts');
const heartCount = window.innerWidth < 480 ? 25 : window.innerWidth < 768 ? 40 : 70;

for (let i = 0; i < heartCount; i++) {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = ['💖', '💗', '💞', '💕', '💘'][i % 5];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDelay = `${(Math.random() * 10).toFixed(2)}s`;
  heart.style.animationDuration = `${(8 + Math.random() * 9).toFixed(2)}s`;
  heart.style.setProperty('--drift', `${(Math.random() * 160 - 80).toFixed(2)}px`);
  heartsLayer.appendChild(heart);
}
