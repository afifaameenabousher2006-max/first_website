const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionSection = document.getElementById('question-section');
const celebrationSection = document.getElementById('celebration-section');

// 1. The "Runaway" Logic
noBtn.addEventListener('mouseover', () => {
    // Calculate random coordinates based on screen size
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. The "Yes" Logic
yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    celebrationSection.classList.remove('hidden');
});