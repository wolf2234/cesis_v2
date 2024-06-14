const selects = document.querySelectorAll(".select");
const selectsItems = document.querySelectorAll(".select__item");

selects.forEach(function (select) {
    select.addEventListener("click", function (option) {
        select.classList.toggle("is-active");
    });
});

selectsItems.forEach(function (selectItem) {
    selectItem.addEventListener("click", function (selectOption) {
        let text = selectItem.innerText;
        let currentText = selectItem
            .closest(".select")
            .querySelector(".select__current");
        currentText.innerText = text;
    });
});
