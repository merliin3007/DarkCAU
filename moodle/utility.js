function getElementsThatHaveOneClassName(doc, classNames) {
    let elements = [];
    classNames.forEach(className => {
        elements.concat(Array.from(doc.getElementsByClassName(className)));
    });
    return Array.from(new Set(elements))
}