document.addEventListener("DOMContentLoaded", function() {
    const text = "reeve";
    const speed = 200; // Typing speed in milliseconds
    const pause = 2000; // Pause before deleting and re-typing in milliseconds
    const h1 = document.querySelector(".typewriter-text");

    let i = 0;
    let isDeleting = false;

    function type() {
        let displayText = text.substring(0, i);
        h1.textContent = displayText;

        if (!isDeleting && i < text.length) {
            i++;
            setTimeout(type, speed);
        } else if (isDeleting && i > 0) {
            i--;
            setTimeout(type, speed);
        } else if (!isDeleting && i === text.length) {
            isDeleting = true;
            setTimeout(type, pause);
        } else if (isDeleting && i === 0) {
            isDeleting = false;
            setTimeout(type, speed);
        }
    }

    type();
});
