document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video2');
    const nextPageIcon = document.getElementById('nextPageIcon');

    // Mulighed for at stoppe/start video ved klik
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Next page icon klik event
    nextPageIcon.addEventListener('click', function() {
        window.location.href = 'tidslinje1.html'; // Skift til din næste side URL
    });
});
