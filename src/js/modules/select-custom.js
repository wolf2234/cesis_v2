/**
 * JSDOC
 */
export function addCustomSelect() {
    let selectBlocks = document.querySelectorAll("select[data-custom-select]");
    const className = "select-custom";
    selectBlocks.forEach(function (selectBlock) {
        createSelect(selectBlock, className);
    });
}

function createSelect(selectBlock, className) {
    let selectCustom = createDiv(className);
    let selectBody = createDiv(`${className}__body`);
    let selectIcon = createDiv(`${className}__icon`);
    let selectValue = createDiv(`${className}__value`, selectBlock.value);
    let selectItems = createSelectItems(selectBlock, className);

    const blocks = {
        0: [selectBody, "afterbegin", selectValue],
        1: [selectBody, "beforeend", selectIcon],
        2: [selectCustom, "afterbegin", selectBody],
        3: [selectCustom, "beforeend", selectItems],
        4: [selectBlock, "afterend", selectCustom],
    };

    appendElements(blocks);
    selectBlock.style.display = "none";
    addActive(selectCustom);
    showItems(selectCustom, className);
    changeSelectValue(selectBlock, selectCustom, className);
}

function createDiv(className, value = null) {
    let element = document.createElement("div");
    element.className = className;
    if (value) {
        element.innerText = value;
    }
    return element;
}

function changeSelectValue(selectOrigin, selectCustom, className) {
    selectCustom.addEventListener("click", function (element) {
        let selectValue = selectCustom.querySelector(`.${className}__value`);
        let selectBlock = removeSelectedOptions(selectOrigin);
        for (let option of selectBlock.options) {
            if (selectValue.innerText == option.value) {
                option.setAttribute("selected", "");
            }
        }
    });
}

function removeSelectedOptions(select) {
    for (let option of select.options) {
        option.removeAttribute("selected");
    }
    return select;
}

function createSelectItems(select, className) {
    let selectItems = document.createElement("div");
    selectItems.className = `${className}__items`;
    for (let option of select.options) {
        selectItems.innerHTML += `<div class="${className}__item">${option.value}</div>`;
    }
    return selectItems;
}

function appendElements(blocks) {
    for (let block in blocks) {
        blocks[block][0].insertAdjacentElement(
            blocks[block][1],
            blocks[block][2]
        );
    }
}

function addActive(select) {
    select.addEventListener("click", function (option) {
        select.classList.toggle("is-active");
    });
}

function showItems(select, className) {
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
