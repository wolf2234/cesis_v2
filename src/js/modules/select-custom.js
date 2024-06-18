export function createCustomSelect(selectClass) {
    let selectBlock = document.querySelector(selectClass);

    const selectClassCustom = "select-custom";
    const selectClassCustomValue = `${selectClassCustom}__value`;
    const selectClassCustomItems = `${selectClassCustom}__items`;
    const selectClassCustomItem = `${selectClassCustom}__item`;

    let selectCustom = document.createElement("div");
    let selectItems = document.createElement("div");

    selectCustom.className = selectClassCustom;
    selectItems.className = selectClassCustomItems;

    selectCustom.innerHTML = `
            <div class="${selectClassCustom}__body">
                <div class="${selectClassCustom}__current">
                    <div class="${selectClassCustomValue}"></div>
                    <span class="${selectClassCustom}__icon"></span>
                </div>
            </div>`;

    for (let option of selectBlock.options) {
        selectItems.innerHTML += `<div class="${selectClassCustomItem}">${option.value}</div>`;
    }

    let selectValue = selectCustom.querySelector(`.${selectClassCustomValue}`);
    selectValue.innerText = selectBlock.value;

    selectCustom.insertAdjacentElement("beforeend", selectItems);
    selectBlock.insertAdjacentElement("afterend", selectCustom);
    selectBlock.style.display = "none";

    selectCustom.addEventListener("click", function (option) {
        selectCustom.classList.toggle("is-active");
    });

    addValueToSelect(
        selectCustom,
        selectValue,
        selectItems,
        selectClassCustomItem
    );
}

export function addValueToSelect(select, currentValue, items, itemClass) {
    const selectsItems = items.querySelectorAll(`.${itemClass}`);
    selectsItems.forEach(function (selectItem) {
        selectItem.addEventListener("click", function (item) {
            let text = selectItem.innerText;
            let currentText = selectItem
                .closest(`.${select.classList[0]}`)
                .querySelector(`.${currentValue.classList[0]}`);
            currentText.innerText = text;
        });
    });
}
