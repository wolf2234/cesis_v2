const videos = document.querySelectorAll(".video__item");
const videoButtons = document.querySelectorAll(".video__button");

videoButtons.forEach(function (button) {
    button.addEventListener("click", function (element) {
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
