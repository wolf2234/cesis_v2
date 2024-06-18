export function createCustomSelect(selectClass) {
    let selectBlock = document.querySelector(selectClass);

    let selectValue = document.createElement("div");
    selectValue.className = "select-custom__value";
    selectValue.innerHTML = selectBlock.value;

    let selectItems = document.createElement("div");
    selectItems.className = "select-custom__items";

    for (let option of selectBlock.options) {
        selectItems.innerHTML += `<div class="select-custom__item">${option.value}</div>`;
    }

    let selectCustom = document.createElement("div");
    selectCustom.className = "select-custom";
    selectCustom.innerHTML = `
            <div class="select-custom__body">
                <div class="select-custom__current">
                    <span class="select-custom__icon"></span>
                </div>
            </div>`;

    let current = selectCustom.querySelector(".select-custom__current");
    current.insertAdjacentElement("afterbegin", selectValue);
    selectCustom.insertAdjacentElement("beforeend", selectItems);

    selectBlock.insertAdjacentElement("afterend", selectCustom);
    selectBlock.style.display = "none";

    const selectsItems = selectItems.querySelectorAll(".select-custom__item");

    selectCustom.addEventListener("click", function (option) {
        selectCustom.classList.toggle("is-active");
    });

    selectsItems.forEach(function (selectItem) {
        selectItem.addEventListener("click", function (selectOption) {
            let text = selectItem.innerText;
            let currentText = selectItem
                .closest(`.select-custom`)
                .querySelector(`.select-custom__value`);
            currentText.innerText = text;
        });
    });
}
