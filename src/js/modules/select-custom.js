export function createCustomSelect(selectClass) {
    let selectBlock = document.querySelector(selectClass);

    const className = "select-custom";

    let selectCustom = createSelectCustom(className);
    let selectBody = createSelectBody(className);
    let selectCurrent = createSelectCurrent(className);
    let selectValue = createSelectValue(selectBlock, className);
    let selectIcon = createSelectIcon(className);
    let selectItems = createSelectItems(selectBlock, className);

    const blocks = {
        0: [selectCurrent, "afterbegin", selectValue],
        1: [selectCurrent, "beforeend", selectIcon],
        2: [selectBody, "afterbegin", selectCurrent],
        3: [selectCustom, "afterbegin", selectBody],
        4: [selectCustom, "beforeend", selectItems],
        5: [selectBlock, "afterend", selectCustom],
    };

    appendElements(blocks);
    selectBlock.style.display = "none";

    addActive(selectCustom);
    showItems(selectCustom, className);
}

export function createSelectCustom(className) {
    let selectCustom = document.createElement("div");
    selectCustom.className = className;
    return selectCustom;
}

export function createSelectBody(className) {
    let selectBody = document.createElement("div");
    selectBody.className = `${className}__body`;
    return selectBody;
}

export function createSelectCurrent(className) {
    let selectCurrent = document.createElement("div");
    selectCurrent.className = `${className}__current`;
    return selectCurrent;
}

export function createSelectValue(select, className) {
    let selectValue = document.createElement("div");
    selectValue.className = `${className}__value`;
    selectValue.innerText = select.value;
    return selectValue;
}

export function createSelectIcon(className) {
    let selectIcon = document.createElement("span");
    selectIcon.className = `${className}__icon`;
    return selectIcon;
}

export function createSelectItems(select, className) {
    let selectItems = document.createElement("div");
    selectItems.className = `${className}__items`;
    for (let option of select.options) {
        selectItems.innerHTML += `<div class="${className}__item">${option.value}</div>`;
    }
    return selectItems;
}

export function appendElements(blocks) {
    for (let block in blocks) {
        blocks[block][0].insertAdjacentElement(
            blocks[block][1],
            blocks[block][2]
        );
    }
}

export function addActive(select) {
    select.addEventListener("click", function (option) {
        select.classList.toggle("is-active");
    });
}

export function showItems(select, className) {
    const items = select
        .querySelector(`.${className}__items`)
        .querySelectorAll(`.${className}__item`);
    items.forEach(function (item) {
        item.addEventListener("click", function (element) {
            let text = item.innerText;
            let currentText = item
                .closest(`.${select.classList[0]}`)
                .querySelector(`.${className}__value`);
            currentText.innerText = text;
        });
    });
}
