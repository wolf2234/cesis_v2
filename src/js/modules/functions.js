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
            // Listen user's click on the link.
            childlink.addEventListener("click", function (element) {
                // Removes active class from links and items
                removeActives(childlinks);
                removeActives(childblocks);
                // Get attribute of link element
                let attrElement = childlink.dataset.blockLink;
                childlink.classList.add("active");

                // Go through a loop for each of items.
                childblocks.forEach(function (childblock) {
                    // Get attribute of item element
                    let attrBlock = childblock.dataset.blockItem;
                    // Check if attribute of link equals attribute of item.
                    // If true, add an active class to item element.
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
        // Check if element has an attribute 'data-block-link' or 'data-block-item'.
        // If one of the conditions is true,
        // then to set an attribute value to the attrElement variable.
        if (element.hasAttribute("data-block-link")) {
            attrElement = element.dataset.blockLink;
        } else if (element.hasAttribute("data-block-item")) {
            attrElement = element.dataset.blockItem;
        }
        // Check if an attribute value equals default value.
        // If true, add active class.
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
        // Go through a loop for each of elements with data-hover-attr attribute.
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
    // Get attribute of element.
    let attrTag = currentTag.dataset.hoverAttr;
    // Go through a loop for each of elements.
    tags.forEach(function (tag) {
        // Check if attrTag value equals value of current element attribute.
        if (attrTag == tag.dataset.hoverAttr) {
            // Check if current element doesn't have class active.
            // If true, we listen user's hover on element.
            if (!tag.classList.contains("active")) {
                // If it's mouseover, then we add class active.
                tag.addEventListener("mouseover", function () {
                    tag.classList.add("active");
                    currentTag.classList.add("active");
                });
                // If it's mouseout, then we remove class active.
                tag.addEventListener("mouseout", function () {
                    tag.classList.remove("active");
                    currentTag.classList.remove("active");
                });
            }
        }
    });
}
