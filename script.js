document.body.style.overflow = 'hidden';

const overlay = document.getElementById('envelopeOverlay');
const seal = document.getElementById('envelopeSeal');
const music = document.getElementById('bgMusic');
const soundToggle = document.getElementById('soundToggle');

music.addEventListener('play', () => {
    soundToggle.classList.remove('muted');
});

music.addEventListener('pause', () => {
    soundToggle.classList.add('muted');
});

seal.addEventListener('click', () => {
    overlay.classList.add('opening');
    music.play().catch(() => {});

    setTimeout(() => {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    soundToggle.classList.add('visible');
}, 1500);
});

soundToggle.addEventListener('click', () => {
    if (music.paused) {
    music.play();
} else {
    music.pause();
}
});