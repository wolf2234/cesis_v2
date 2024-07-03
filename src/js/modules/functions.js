/**
 * Show block, when user clicks on link.
 * @param {number} defaultValue
 */
export function showBlock(defaultValue = 0) {
    // Get all div elements with data-block-parent attribute.
    let parentElements = document.querySelectorAll("[data-block-parent]");

    // Go through a loop for each of element.
    parentElements.forEach(function (parentElement) {
        // Get all links with data-block-link attribute.
        const childlinks = parentElement.querySelectorAll("[data-block-link]");

        // Get all items with data-block-item attribute.
        const childblocks = parentElement.querySelectorAll("[data-block-item]");

        if (defaultValue) {
            addActiveByDefault(childlinks, defaultValue);
            addActiveByDefault(childblocks, defaultValue);
        }

        // Go through a loop for each of links.
        childlinks.forEach(function (childlink) {
            childlink.addEventListener("click", function (element) {
                removeActives(childlinks);
                removeActives(childblocks);

                let attrElement = childlink.dataset.blockLink;
                childlink.classList.add("active");

                // Go through a loop for each of items.
                childblocks.forEach(function (childblock) {
                    let attrBlock = childblock.dataset.blockItem;
                    if (attrBlock === attrElement) {
                        childblock.classList.add("active");
                    }
                });
            });
        });
    });
}

/**
 * Add active to the element.
 * It is for to select default element.
 * @param {object} elements
 * @param {number} defaultValue
 */
function addActiveByDefault(elements, defaultValue) {
    elements.forEach(function (element) {
        let attrElement;
        if (element.hasAttribute("data-block-link")) {
            attrElement = element.dataset.blockLink;
        } else if (element.hasAttribute("data-block-item")) {
            attrElement = element.dataset.blockItem;
        }
        if (attrElement == defaultValue) {
            element.classList.add("active");
        }
    });
}

/**
 * Remove active class from elements.
 * @param {object} elements
 */
function removeActives(elements) {
    elements.forEach(function (element) {
        element.classList.remove("active");
    });
}

/**
 * Add hover effect for related elements.
 */
export function hoverElement() {
    // Get all elements with data-hover-block attribute.
    const blocks = document.querySelectorAll("[data-hover-block]");
    // Go through a loop for each of elements.
    blocks.forEach(function (block) {
        // Get all elements with data-hover-attr attribute.
        const hoverTags = block.querySelectorAll("[data-hover-attr]");
        hoverTags.forEach(function (hoverTag) {
            hover(hoverTags, hoverTag);
        });
    });
}

/**
 * Add active class, when the user mouseover on element.
 * If the user mouseout on element, active class removes.
 */
function hover(tags, currentTag) {
    let attrTag = currentTag.dataset.hoverAttr;
    tags.forEach(function (tag) {
        if (attrTag == tag.dataset.hoverAttr) {
            if (!tag.classList.contains("active")) {
                tag.addEventListener("mouseover", function () {
                    tag.classList.add("active");
                    currentTag.classList.add("active");
                });
                tag.addEventListener("mouseout", function () {
                    tag.classList.remove("active");
                    currentTag.classList.remove("active");
                });
            }
        }
    });
}
