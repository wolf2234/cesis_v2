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
            video.addEventListener("pause", function (el) {
                if (
                    video.hasAttribute("controls") &&
                    video.dataset.parent == button.dataset.parent
                ) {
                    video.removeAttribute("controls");
                    button.style.display = "block";
                }
            });
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
