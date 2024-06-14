const plansButtons = document.querySelectorAll(".plans__button");

plansButtons.forEach(function (plansButton) {
    plansButton.addEventListener("mouseover", function (button) {
        let parent = plansButton.closest(".plans__item");
        let price = parent.querySelector(".plans__price");
        price.classList.add("active");
    });
    plansButton.addEventListener("mouseout", function (button) {
        let parent = plansButton.closest(".plans__item");
        let price = parent.querySelector(".plans__price");
        price.classList.remove("active");
    });
});
