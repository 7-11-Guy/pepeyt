const trigger = document.getElementById('flower-trigger');
const overlay = document.getElementById('flower-overlay');
const closeBtn = document.getElementById('close-flowers');

trigger.addEventListener('click', (e) => {
    e.stopPropagation(); // Stops the envelope from closing
    overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});