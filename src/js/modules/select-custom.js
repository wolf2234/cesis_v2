/**
 * JSDOC 
 */
export function enableCustomSelect() {
    let selectBlocks = document.querySelectorAll("select[data-custom-select]");
    const className = "select-custom";
    selectBlocks.forEach(function (selectBlock) {
        let selectCustom = createSelectCustom(className);
        let selectBody = createSelectBody(className);
        let selectValue = createSelectValue(selectBlock, className);
        let selectIcon = createSelectIcon(className);
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
    });
}

export function changeSelectValue(selectOrigin, selectCustom, className) {
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

export function removeSelectedOptions(select) {
    for (let option of select.options) {
        option.removeAttribute("selected");
    }
    return select;
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
