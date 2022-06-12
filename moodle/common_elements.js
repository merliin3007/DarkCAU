async function moodleSetDarkmodeGeneric() {
    // body
    document.body.style.backgroundColor = backgroundColor;

    Array.from(document.getElementsByTagName('nav')).forEach(nav => {
        try {
            nav.style.backgroundColor = "";
            nav.style.opacity = "";
            nav.style.color = textColor;
        } catch (e) { }
    });
    Array.from(document.getElementsByTagName('div')).forEach(div => {
        try {
            div.style.backgroundColor = "";
            div.style.opacity = "";
            div.style.color = textColor;
        } catch (e) { }
    });
    Array.from(document.getElementsByTagName('a')).forEach(a => {
        a.style.backgroundColor = "";
        a.style.opacity = "";
        a.style.color = textColor;
    });

    Array.from(document.getElementsByClassName('bg-white')).forEach(bg => {
        bg.classList.remove('bg-white');
        bg.style.backgroundColor = backgroundColor;
        bg.style.background = backgroundColor;
    });

    Array.from(document.getElementsByClassName('bg-gray')).forEach(bg => {
        bg.classList.remove('bg-gray');
        bg.style.backgroundColor = backgroundColor;
        bg.style.background = backgroundColor;
    });

    /* navigation items */
    Array.from(document.getElementsByClassName('nav-item')).forEach(navItem => {
        navItem.style.backgroundColor = backgroundColor;
        navItem.style.borderColor = borderColor;
    });
    Array.from(document.getElementsByClassName('nav-link')).forEach(navItem => {
        navItem.style.backgroundColor = listGroupItemColor;
        navItem.style.borderColor = buttonBorderColor;
    });
    Array.from(document.getElementsByClassName('nav-link active')).forEach(navItem => {
        navItem.style.backgroundColor = listGroupItemSelectedColor;
        navItem.style.borderColor = borderColor;
    });

    /* Tabellen */
    getElementsThatHaveOneTagName(['td', 'th']).forEach(td => {
        if (td.style.backgroundColor != '') {
            td.style.backgroundColor = tableColAccentColor;
        }
        td.style.color = textColor;
    });

    /* Table borders */
    Array.from(document.getElementsByTagName('tr')).forEach(tr => {
        tr.style.borderColor = tableBorderColor;
    });

    classes = [
        'card',
        'has-blocks',
        'card-body',
        'section'
    ]

    // region-main
    elem = document.getElementById('region-main');
    elem.style.background = backgroundColor;
    elem.style.color = textColor;
    elem.style.borderColor = borderColor;

    // classes
    classes.forEach(className => {
        elems = document.getElementsByClassName(className);
        Array.from(elems).forEach(elem => {
            elem.style.backgroundColor = cardColor;
            elem.style.color = textColor;
            elem.style.borderColor = borderColor;
        });
    });

    // text fields
    Array.from(document.getElementsByTagName('input')).forEach(elem => {
        elem.style.backgroundColor = backgroundColorLight;
        elem.style.color = textColor;
    });

    // text fields
    Array.from(document.getElementsByTagName('textarea')).forEach(elem => {
        elem.style.backgroundColor = backgroundColorLight;
        elem.style.color = textColor;
    });

    // selects
    Array.from(document.getElementsByTagName('select')).forEach(elem => {
        elem.style.backgroundColor = backgroundColorLight;
        elem.style.color = textColor;
    });

    // scroll up button
    try {
        elem = document.querySelectorAll('[role="button"]')[13]
        elem.style.backgroundColor = backgroundColor;
        elem.style.color = textColor;
    } catch (e) { }

    // buttons
    Array.from(document.getElementsByClassName('btn-secondary')).forEach(button => {
        button.style.backgroundColor = backgroundColorLightest;
        button.style.color = textColor;
        button.style.borderColor = menuBorderColor;
    });

    Array.from(document.getElementsByClassName('btn')).forEach(button => {
        button.style.backgroundColor = backgroundColorLightest;
        button.style.color = textColor;
        button.style.borderColor = menuBorderColor;
    });

    Array.from(document.getElementsByClassName('page-item')).forEach(button => {
        button.style.backgroundColor = buttonColor;
    });

    // dropdown-menu
    Array.from(document.getElementsByClassName('dropdown-menu')).forEach(dropdownMenu => {
        dropdownMenu.style.backgroundColor = backgroundColorLightest;
        dropdownMenu.style.color = textColor;
        dropdownMenu.style.borderColor = menuBorderColor;
    });

    // dropdown-item
    Array.from(document.getElementsByClassName('dropdown-item')).forEach(dropdownItem => {
        dropdownItem.style.backgroundColor = backgroundColorLightest;
        dropdownItem.style.color = textColor;
        dropdownItem.style.borderColor = menuBorderColor;
    });

    // table
    Array.from(document.querySelectorAll('[border="1"]')).forEach(table => {
        table.style.border = '1px solid ' + textColor;
    });
    Array.from(document.getElementsByClassName('generaltable')).forEach(tabble => {
        table.style.backgroundColor = backgroundColor;
        table.style.borderColor = tableBorderColor;
        table.style.color = textColor;
    });

    // table hover
    getElementsThatHaveOneClassName(['cell', 'leveleven', 'levelodd']).forEach(cell => {
        cell.style.backgroundColor = backgroundColor;
        cell.style.color = textColor;
    });

    // general box
    Array.from(document.getElementsByClassName('generalbox')).forEach(generalBox => {
        generalBox.style.backgroundColor = backgroundColor;
        generalBox.style.color = textColor;
    });

    // legend
    Array.from(document.getElementsByClassName('legend')).forEach(legend => {
        legend.style.backgroundColor = backgroundColor;
        legend.style.color = textColor;
    });

    // icon
    Array.from(document.getElementsByClassName('icon fa fa-comment fa-fw iconsmall')).forEach(elem => elem.style.color = textColor);

    // Mitteilungen
    Array.from(document.getElementsByClassName('header-button-title')).forEach(elem => elem.style.color = textColor);
}

async function moodleSetDarkmodeBanner() {
    /* menu icon */
    ///menuIcon = document.getElementsByClassName('btn nav-link float-sm-left mr-1 btn-light bg-gray')[0];
    ///menuIcon.classList.remove('bg-gray');
    ///menuIcon.style.backgroundColor = backgroundColorLightest;
    ///menuIcon.style.color = textColor;
    ///menuIcon.style.border = '1px solid ' + borderColor;

    /* title bar */
    Array.from(document.getElementsByClassName('navbar')).forEach(topBar => {
        topBar.style.backgroundColor = backgroundColor;
    });

    /* title */
    Array.from(document.getElementsByClassName('site-name')).forEach(siteName => {
        siteName.style.color = textColor;
        siteName.innerText = 'DarkCAU Moodle'
    });

    /* search box */
    try {
        Array.from(document.getElementsByClassName('form-control')).forEach(searchBox => {
            searchBox.style.backgroundColor = backgroundColorLight;
            searchBox.style.color = textColor;
        });
    } catch (e) {  }

    /* username or login */
    getElementsThatHaveOneClassName(['usertext', 'login']).forEach(username => {
        username.style.color = textColor;
    });

    getElementsThatHaveOneClassName(['popover-region-container', 'popover-region-footer-container']).forEach(element => {
        element.style.backgroundColor = backgroundColor;
        element.style.color = textColor;
    });
}

async function moodleSetDarkmodeMenu() {
    getElementsThatHaveOneClassName(['list-group', 'list-group-item']).forEach(listGroup => {
        listGroup.style.backgroundColor = backgroundColorLight;
        listGroup.style.color = textColor;
        listGroup.style.borderColor = menuBorderColor;
    });
}

async function moodleSetDarkmodeDrawer() {
    document.getElementById('nav-drawer').style.backgroundColor = backgroundColor;

    /* list group item */
    Array.from(document.getElementsByClassName('list-group-item')).forEach(listGroupItem => {
        listGroupItem.style.backgroundColor = listGroupItemColor;
        listGroupItem.style.color = textColor;
    });

    /* list group item */
    Array.from(document.getElementsByClassName('list-group-item list-group-item-action')).forEach(listGroupItem => {
        listGroupItem.style.backgroundColor = listGroupItemColor;
        listGroupItem.style.color = textColor;
    });

    /* list group item selected */
    Array.from(document.getElementsByClassName('list-group-item list-group-item-action active active_tree_node')).forEach(listGroupItem => {
        listGroupItem.style.backgroundColor = listGroupItemSelectedColor;
        listGroupItem.style.borderColor = listGroupItemSelectedColor;
        listGroupItem.style.color = textColor;
    });

    /* event name */
    Array.from(document.getElementsByClassName('event-name')).forEach(eventName => {
        eventName.style.color = eventNameColor;
    });

    /* event */
    Array.from(document.getElementsByClassName('event')).forEach(eventName => {
        eventName.style.color = eventNameColor;
        eventName.childNodes.forEach(child => {
            try {
                child.style.color = eventNameColor;
            } catch (e) { }
        });
    });
}

async function moodleSetDarkmodeCourseOverview() {
    Array.from(document.getElementsByClassName('region_main_settings_menu_proxy')).forEach(elem => {
        elem.style.backgroundColor = backgroundColor;
        elem.style.color = textColor;
    });
}

async function moodleSetDarkmodeGrades() {

}

async function moodleSetDarkmode() {
    try {
        moodleSetDarkmodeGeneric();
    } catch(e) { }
    try {
        moodleSetDarkmodeBanner();
    } catch(e) { }
    try {
        moodleSetDarkmodeMenu();
    } catch(e) { }
    try{
        moodleSetDarkmodeDrawer();
    } catch(e) { }
    try{
        moodleSetDarkmodeCourseOverview();
    } catch(e) { }
}

/* timer to also affect elements that are loaded delayed. */
setInterval(function(){ 
    moodleSetDarkmode();
}, 1000);

moodleSetDarkmode();