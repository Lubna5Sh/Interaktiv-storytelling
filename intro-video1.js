document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video1');
    const nextPageIcon = document.getElementById('nextPageIcon');

    video.addEventListener('ended', function() {
        nextPageIcon.style.display = 'block';
    });

    nextPageIcon.addEventListener('click', function() {
        window.location.href = 'nextpage.html'; // Erstat 'nextpage.html' med din næste side URL
    });
});
