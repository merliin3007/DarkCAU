function getElementsThatHaveOneClassName(classNames) {
    let elements = [];
    classNames.forEach(className => {
        elements = elements.concat(Array.from(document.getElementsByClassName(className)));
    });
    return Array.from(new Set(elements));
}

function getElementsThatHaveOneTagName(tagNames) {
    let elements = [];
    tagNames.forEach(tagName => {
        elements = elements.concat(Array.from(document.getElementsByTagName(tagName)));
    });
    return Array.from(new Set(elements));
}