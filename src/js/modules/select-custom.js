/**
 * Adds a custom select instead of the base one.
 */
export function addCustomSelect() {
    // Get all selects.
    let selectBlocks = document.querySelectorAll("select[data-custom-select]");
    // Create a class of custom select.
    const className = "select-custom";
    // Go through a loop for each of select.
    selectBlocks.forEach(function (selectBlock) {
        // Create and add a custom select.
        createSelect(selectBlock, className);
    });
}

/**
 * Create and add a custom select.
 * @param {object} selectBlock
 * @param {string} className
 */
function createSelect(selectBlock, className) {
    // Create div elments for a custom select.
    let selectCustom = createDiv(className);
    let selectBody = createDiv(`${className}__body`);
    let selectIcon = createDiv(`${className}__icon`);
    let selectValue = createDiv(`${className}__value`, selectBlock.value);
    let selectItems = createSelectItems(selectBlock, className);

    // Collection div elements in a specific order.
    const blocks = {
        0: [selectBody, "afterbegin", selectValue],
        1: [selectBody, "beforeend", selectIcon],
        2: [selectCustom, "afterbegin", selectBody],
        3: [selectCustom, "beforeend", selectItems],
        4: [selectBlock, "afterend", selectCustom],
    };

    appendElements(blocks);

    // Hide base select
    selectBlock.style.display = "none";

    addActive(selectCustom);
    putValue(selectCustom, className);
    changeSelectValue(selectBlock, selectCustom, className);
}

/**
 * Create div element.
 * @param {string} className
 * @param {string} value
 */
function createDiv(className, value = null) {
    // Create div element with a className.
    let element = document.createElement("div");
    element.className = className;

    // Set selected value for element with class: select-custom__value.
    if (value) {
        element.innerText = value;
    }
    return element;
}

/**
 * Сhange value in base select.
 * @param {object} selectOrigin
 * @param {object} selectCustom
 * @param {string} className
 */
function changeSelectValue(selectOrigin, selectCustom, className) {
    // Listen user's click on the custom select.
    selectCustom.addEventListener("click", function (element) {
        // Get div element with class: select-custom__value.
        let selectValue = selectCustom.querySelector(`.${className}__value`);
        // Remove attribute 'selected' from all <option> elements of base <select>.
        let selectBlock = removeSelectedOptions(selectOrigin);
        // Go through a loop for each of <option> elements of base <select>.
        for (let option of selectBlock.options) {
            // Check if select-custom's value equals <select> value.
            // If true, set an attribute 'selected'.
            if (selectValue.innerText == option.value) {
                option.setAttribute("selected", "");
            }
        }
    });
}

/**
 * Remove value in base select.
 * @param {object} select
 */
function removeSelectedOptions(select) {
    // Go through a loop for each of <option> elements of base <select>.
    // And remove attribute 'selected' from all <option> elements of base <select>.
    for (let option of select.options) {
        option.removeAttribute("selected");
    }
    return select;
}

/**
 * Create div items for a custom select.
 * @param {object} select
 * @param {string} className
 */
function createSelectItems(select, className) {
    // Create div element with a className.
    let selectItems = document.createElement("div");
    selectItems.className = `${className}__items`;

    // Go through a loop for each of <option> elements of base <select>.
    for (let option of select.options) {
        // Add div elements with className and <option> values.
        selectItems.innerHTML += `<div class="${className}__item">${option.value}</div>`;
    }
    return selectItems;
}

/**
 * Append elements in a specific order.
 * @param {object} blocks
 */
function appendElements(blocks) {
    // Go through a loop for each of collection elements.
    for (let block in blocks) {
        // Add div element in a specific order.
        blocks[block][0].insertAdjacentElement(
            blocks[block][1],
            blocks[block][2]
        );
    }
}

/**
 * Add acticve class to the custom select to show items,
 * when user clicks on it.
 * @param {object} select
 */
function addActive(select) {
    select.addEventListener("click", function (option) {
        select.classList.toggle("is-active");
    });
}

/**
 * Put a value to the custom select.
 * @param {object} select
 * @param {string} className
 */
function putValue(select, className) {
    // Get all the div elements with select-custom__item class.
    const items = select
        .querySelector(`.${className}__items`)
        .querySelectorAll(`.${className}__item`);

    // Go through a loop for each of div elements with select-custom__item class.
    items.forEach(function (item) {
        // Listen user's click on div element.
        item.addEventListener("click", function (element) {
            // Get value of div element.
            let text = item.innerText;
            // Get value of div element with select-custom__value class.
            let currentText = item
                .closest(`.${select.classList[0]}`)
                .querySelector(`.${className}__value`);
            // Change value of div element with select-custom__value class.
            currentText.innerText = text;
        });
    });
}
