const images = document.querySelectorAll('.quiz-container img, .quiz-billede2');
const correctButton = document.getElementById('correctButton');
const incorrectButton = document.getElementById('incorrectButton');
const retryButton = document.getElementById('retryButton');
const result = document.getElementById('result');
const feedbackSection = document.getElementById('feedbackSection');
let currentImageIndex = 0;
let score = 0;

function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex++;
    if (currentImageIndex < images.length) {
        images[currentImageIndex].classList.add('active');
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    result.textContent = `Du fik ${score} point ud af ${images.length}`;
    correctButton.disabled = true;
    incorrectButton.disabled = true;
    retryButton.style.display = 'block';
    feedbackSection.style.display = 'block';
    feedbackSection.scrollIntoView({ behavior: 'smooth' });
}

function resetQuiz() {
    currentImageIndex = 0;
    score = 0;
    result.textContent = '';
    correctButton.disabled = false;
    incorrectButton.disabled = false;
    retryButton.style.display = 'none';
    feedbackSection.style.display = 'none';
    images.forEach(image => image.classList.remove('active'));
    images[0].classList.add('active'); // Vis det første billede igen
}

correctButton.addEventListener('click', () => {
    if (currentImageIndex === 0 || currentImageIndex === 2) { // Billede 1 og 3
        result.textContent = 'Korrekt!';
        score++;
    } else {
        result.textContent = 'Forkert!';
    }
    showNextImage();
});

incorrectButton.addEventListener('click', () => {
    if (currentImageIndex === 1) { // Billede 2
        result.textContent = 'Korrekt!';
        score++;
    } else {
        result.textContent = 'Forkert!';
    }
    showNextImage();
});

retryButton.addEventListener('click', resetQuiz);