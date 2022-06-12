async function univisSetDarkmodeGeneral() {
    document.body.style.backgroundColor = backgroundColor;

    getElementsThatHaveOneTagName(['table', 'tr']).forEach(elem => {
        elem.style.borderColor = tableBorderColor;
        elem.style.backgroundColor = backgroundColor;
        elem.style.color = textColor;
    });

    getElementsThatHaveOneTagName(['td', 'th']).forEach(elem => {
        elem.style.borderColor = tableBorderColor;
        elem.style.backgroundColor = cardColor;
        elem.style.color = textColor;
    });

    /* texts */
    getElementsThatHaveOneTagName(['a', 'font', 'b', 'p']).forEach(p => {
        p.style.color = textColor;
    });

    /* selects */
    getElementsThatHaveOneTagName(['select']).forEach(select => {
        select.style.backgroundColor = buttonColor;
        select.style.borderColor = borderColor;
        select.style.color = textColor;
    });
}

console.log('[DarkCAU UnivIS] Setting Darkmode...');
univisSetDarkmodeGeneral();