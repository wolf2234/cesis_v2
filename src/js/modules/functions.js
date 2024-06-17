export function showBlock(parent, link, block, defaultValue = 0) {
    const parentElement = document.querySelector(parent);
    const childlinks = parentElement.querySelectorAll(link);
    const childblocks = parentElement.querySelectorAll(block);

    if (defaultValue) {
        addActiveByDefault(childlinks, defaultValue);
        addActiveByDefault(childblocks, defaultValue);
    }

    childlinks.forEach(function (childlink) {
        childlink.addEventListener("click", function (element) {
            removeActives(childlinks);
            removeActives(childblocks);

            let attrElement = childlink.dataset.linkBlock;
            childlink.classList.add("active");
            childblocks.forEach(function (childblock) {
                let attrBlock = childblock.dataset.linkBlock;
                if (attrBlock === attrElement) {
                    childblock.classList.add("active");
                }
            });
        });
    });
}

export function addActiveByDefault(elements, defaultValue) {
    elements.forEach(function (element) {
        let attrElement = element.dataset.linkBlock;
        if (attrElement == defaultValue) {
            element.classList.add("active");
        }
    });
}

export function removeActives(elements) {
    elements.forEach(function (element) {
        element.classList.remove("active");
    });
}

export function hoverElement(block, hoverTag, HoverElement) {
    const parentElement = document.querySelector(block);
    const hoverTags = parentElement.querySelectorAll(hoverTag);
    const HoverElements = parentElement.querySelectorAll(HoverElement);

    hover(hoverTags, HoverElements, "mouseover");
    hover(hoverTags, HoverElements, "mouseout");
}

export function hover(tags, elements, event) {
    tags.forEach(function (tag) {
        tag.addEventListener(event, function () {
            let tagAttr = tag.dataset.hoverAttr;
            elements.forEach(function (element) {
                let elementAttr = element.dataset.hoverAttr;
                if (elementAttr == tagAttr) {
                    if (event == "mouseover") {
                        element.classList.add("active");
                    } else if (event == "mouseout") {
                        element.classList.remove("active");
                    }
                }
            });
        });
    });
}
