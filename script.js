document.addEventListener("DOMContentLoaded", function() {
    // Typewriter effect
    const text = "xiorn";
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

    // Ensure DOM elements are fully loaded
    var overlay = document.getElementById('overlay');
    var audio = document.getElementById('background-audio');
    var widgetButton = document.getElementById('widget-button');
    var audioIcon = document.getElementById('audio-icon');
    audio.volume = 0.25;

    // Check if audioIcon is null or undefined
    if (!audioIcon) {
        console.error("Element with id 'audio-icon' not found.");
        return; // Exit function if audioIcon is null or undefined
    }

    // Function to toggle audio state and icon
    function toggleAudio() {
        if (audio.volume === 0) {
            audio.volume = 0.25; // Unmute the audio
            audioIcon.textContent = "volume_up"; // Set icon to unmuted
            console.log("Audio unmuted");
        } else {
            audio.volume = 0; // Mute the audio
            audioIcon.textContent = "volume_off"; // Set icon to muted
            console.log("Audio muted");
        }
    }

    // Click event listener for overlay
    overlay.addEventListener('click', function() {
        // Start playing audio (if not already playing)
        if (audio.paused) {
            audio.play().then(function() {
                console.log("Audio playback started");
                audioIcon.textContent = "volume_up"; // Set icon to unmuted
            }).catch(function(error) {
                console.log("Audio playback failed: " + error);
            });
        }

        // Hide the overlay
        overlay.classList.add('hidden');
    });

    // Click event listener for widget button
    widgetButton.addEventListener('click', function() {
        toggleAudio();
    });

    // Ensure correct initial icon and volume state
    if (audio.volume === 0) {
        audioIcon.textContent = "volume_off"; // Set icon to muted
    } else {
        audioIcon.textContent = "volume_up"; // Set icon to unmuted
    }

    // Debug: Log initial state of audio and icon
    console.log("Initial audio volume:", audio.volume);
    console.log("Initial icon:", audioIcon.textContent);

    // Debug: Log to ensure script is running
    console.log("Script loaded and running");
});
