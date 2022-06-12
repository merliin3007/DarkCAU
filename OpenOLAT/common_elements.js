async function openOlatSetDarkmodeGeneral() {
    getElementsThatHaveOneTagName(['h2']).forEach(span => {
        span.innerText = 'asdf';
        span.style.color = textColor;
    });

    /* body */
    let body = document.getElementById('o_body');
    body.style.backgroundColor = backgroundColor;

    /* main wrapper */
    let mainWrapper = document.getElementById('o_main_wrapper');
    mainWrapper.style.backgroundColor = backgroundColor;

    /* main container */
    let mainContainer = document.getElementById('o_main_container');
    mainContainer.style.backgroundColor = backgroundColor;

    /* navbar */
    Array.from(document.getElementsByClassName('o_navbar')).forEach(navbar  => {
        navbar.classList.remove('o_navbar');
        navbar.style.backgroundColor = backgroundColor;
    });

}

async function OpenOlatSetDarkmodeCss() {
    Array.from(document.getElementsByTagName('link')).forEach(link => {
        console.log('link');
    });

    console.log('no error!');
}

async function openOlatSetDarkmode() {

    /* Set Generic Elements */
    try {
        openOlatSetDarkmodeGeneral();
    } catch (e) { 
        console.error('[DarkCAU OpenOlat] Error while setting DarkMode: ' + e);
    }
}

console.log('[DarkCAU OpenOlat] Setting Darkmode...');

openOlatEnableDarkmode();