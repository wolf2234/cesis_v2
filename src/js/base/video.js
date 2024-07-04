// Get all elements with class video__item.
const videos = document.querySelectorAll(".video__item");

// Get all elements with class video__button.
const videoButtons = document.querySelectorAll(".video__button");

// Go through a loop for each of buttons.
videoButtons.forEach(function (button) {
    // Listen user's click.
    button.addEventListener("click", function (element) {
        // Go through a loop for each of video elements.
        videos.forEach(function (video) {
            // Listen if user clicks on pause button.
            video.addEventListener("pause", function (el) {
                // Check if video has an attribute 'controls' and
                // its attribute equals the attribute of video button.
                // If true, remove the attribute 'controls' from video and show play button.
                if (
                    video.hasAttribute("controls") &&
                    video.dataset.parent == button.dataset.parent
                ) {
                    video.removeAttribute("controls");
                    button.style.display = "block";
                }
            });
            // Check if video has an attribute 'data-parent' and
            // its attribute equals the attribute of video button.
            // If true, set the attribute 'controls' in video, hide play button,
            // open video in full screen and start to play.
            if (
                video.hasAttribute("data-parent") &&
                video.dataset.parent == button.dataset.parent
            ) {
                video.setAttribute("controls", "");
                button.style.display = "none";
                video.requestFullscreen();
                video.play();
            }
        });
    });
});
