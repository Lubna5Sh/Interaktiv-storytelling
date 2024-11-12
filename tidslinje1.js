document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".tidslinje-wrapper");

    let startX;

    wrapper.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    wrapper.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        // Scroll til næste eller forrige element baseret på swipe-retningen
        if (deltaX > 50) {
            smoothScroll(wrapper, wrapper.scrollLeft + wrapper.clientWidth, 300); // Scroll til højre
        } else if (deltaX < -50) {
            smoothScroll(wrapper, wrapper.scrollLeft - wrapper.clientWidth, 300); // Scroll til venstre
        }
    });

    function smoothScroll(element, target, duration) {
        const start = element.scrollLeft;
        const distance = target - start;
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            element.scrollLeft = start + distance * progress;

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }
});
