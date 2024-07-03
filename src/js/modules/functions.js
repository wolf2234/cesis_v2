export function showBlock(defaultValue = 0) {
    let parentElements = document.querySelectorAll("[data-block-parent]");

    parentElements.forEach(function (parentElement) {
        const childlinks = parentElement.querySelectorAll("[data-block-link]");
        const childblocks = parentElement.querySelectorAll("[data-block-item]");

        if (defaultValue) {
            addActiveByDefault(childlinks, defaultValue);
            addActiveByDefault(childblocks, defaultValue);
        }

        childlinks.forEach(function (childlink) {
            childlink.addEventListener("click", function (element) {
                removeActives(childlinks);
                removeActives(childblocks);

                let attrElement = childlink.dataset.blockLink;
                childlink.classList.add("active");
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

function removeActives(elements) {
    elements.forEach(function (element) {
        element.classList.remove("active");
    });
}

export function hoverElement() {
    const blocks = document.querySelectorAll("[data-hover-block]");
    blocks.forEach(function (block) {
        const hoverTags = block.querySelectorAll("[data-hover-attr]");
        hoverTags.forEach(function (hoverTag) {
            hover(hoverTags, hoverTag);
        });
    });
}

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
