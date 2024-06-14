const serviceIcons = document.querySelectorAll(".services__icon");

serviceIcons.forEach(function (serviceIcon) {
    serviceIcon.addEventListener("mouseover", function (icon) {
        let parent = serviceIcon.closest(".services__item");
        let title = parent.querySelector(".services__title");
        title.classList.add("active");
    });
    serviceIcon.addEventListener("mouseout", function (icon) {
        let parent = serviceIcon.closest(".services__item");
        let title = parent.querySelector(".services__title");
        title.classList.remove("active");
    });
});
