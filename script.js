const images = document.querySelectorAll('.quiz-container img');
        const correctButton = document.getElementById('correctButton');
        const incorrectButton = document.getElementById('incorrectButton');
        const result = document.getElementById('result');
        let currentImageIndex = 0;

        function showNextImage() {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }

        correctButton.addEventListener('click', () => {
            result.textContent = 'Korrekt!';
            showNextImage();
        });

        incorrectButton.addEventListener('click', () => {
            result.textContent = 'Forkert!';
            showNextImage();
        });
