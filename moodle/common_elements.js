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
    });

    Array.from(document.getElementsByClassName('bg-gray')).forEach(bg => {
        bg.classList.remove('bg-gray');
    });

    Array.from(document.getElementsByClassName('bg-light')).forEach(bg => {
        bg.classList.remove('bg-light');
    });

    getElementsThatHaveOneTagName(['ul', 'li']).forEach(ul => {
        ul.style.backgroundColor = 'transparent';
    });
    /* page links */
    getElementsThatHaveOneClassName(['page-link']).forEach(pageLink => {
        pageLink.classList.remove('page-link');
        pageLink.classList.add('darkcau-moodle-page-link');
    });

    /* navigation items */
    Array.from(document.getElementsByClassName('nav-item')).forEach(navItem => {
        navItem.classList.remove('nav-item');
        navItem.classList.add('darkcau-moodle-nav-item');
    });
    Array.from(document.getElementsByClassName('nav-link')).forEach(navItem => {
        navItem.classList.remove('nav-link');
        navItem.classList.add('darkcau-moodle-nav-link');
    });
    Array.from(document.getElementsByClassName('nav-link active')).forEach(navItem => {
        navItem.classList.value = '';
        navItem.classList.add('darkcau-moodle-nav-link-active')
    });

    getElementsThatHaveOneClassName(['list-group']).forEach(elem => {
        elem.classList.add('darkcau-moodle-list-group');
    });

    /* links */

    getElementsThatHaveOneClassName(['aalink']).forEach(link => {
        link.classList.add('darkcau-moodle-link');
    });

    getElementsThatHaveOneClassName(['event-name text-truncate mb-0']).forEach(link => {
        link.classList.add('darkcau-moodle-event-link');
    });

    getElementsThatHaveOneClassName(['mb-0 pt-2']).forEach(elem => {
        elem.classList.value = '';
    });

    /* Tabellen */
    getElementsThatHaveOneTagName(['td', 'th']).forEach(td => {
        if (td.style.backgroundColor != '') {
            td.classList.add('darkcau-moodle-table-col-light');
        } else {
            td.classList.add('darkcau-moodle-table-col-dark');
        }
    });

    /* Table borders */
    Array.from(document.getElementsByTagName('tr')).forEach(tr => {
        tr.classList.add('darkcau-moodle-table-border');
    });

    classes = [
        'card',
        'has-blocks',
        'card-body',
        'section'
    ]

    // region-main
    elem = document.getElementById('region-main');
    elem.classList.add('darkcau-moodle-background');

    // classes
    classes.forEach(className => {
        elems = document.getElementsByClassName(className);
        Array.from(elems).forEach(elem => {
            elem.classList.add('darkcau-moodle-section');
        });
    });

    /* dashboard sections */
    getElementsThatHaveOneClassName(['section main', 'pb-3']).forEach(elem => {
        elem.classList.add('darkcau-moodle-section-shadow');
    });

    /* dashboard cards */
    getElementsThatHaveOneClassName(['card-body pr-1 course-info-container']).forEach(dashboardCard => {
        dashboardCard.classList.add('darkcau-moodle-dashboard-card');
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
        table.classList.add('darkcau-moodle-table');
    });

    // table hover
    getElementsThatHaveOneClassName(['cell', 'leveleven', 'levelodd']).forEach(cell => {
        cell.style.backgroundColor = backgroundColor;
        cell.style.color = textColor;
    });

    // icon
    Array.from(document.getElementsByClassName('icon fa fa-comment fa-fw iconsmall')).forEach(elem => elem.style.color = textColor);

    // Mitteilungen
    Array.from(document.getElementsByClassName('header-button-title')).forEach(elem => elem.style.color = textColor);
}

async function moodleSetDarkmodeBanner() {
    /* title bar */
    Array.from(document.getElementsByClassName('navbar')).forEach(topBar => {
        //topBar.style.backgroundColor = 'rgb(1,1,1)';
        topBar.classList.add('darkcau-moodle-navbar');
    });

    /* title */
    Array.from(document.getElementsByClassName('site-name')).forEach(siteName => {
        //siteName.style.color = textColor;
        siteName.classList.add('darkcau-moodle-navbar-sitename');
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
        username.classList.add('darkcau-moodle-navbar-username');
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
    });
}

async function moodleSetDarkmodeDrawer() {
    let navDrawer = document.getElementById('nav-drawer');
    navDrawer.classList.add('darkcau-moodle-background');

    /* list group item */
    Array.from(document.getElementsByClassName('list-group-item')).forEach(listGroupItem => {
        listGroupItem.classList.add('darkcau-moodle-list-group-item');
    });

    /* list group item */
    Array.from(document.getElementsByClassName('list-group-item list-group-item-action')).forEach(listGroupItem => {
        listGroupItem.classList.add('darkcau-moodle-list-group-item-action');
    });

    /* list group item selected */
    Array.from(document.getElementsByClassName('list-group-item list-group-item-action active active_tree_node')).forEach(listGroupItem => {
        listGroupItem.classList.add('darkcau-moodle-list-group-item-action-active');
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
        elem.classList.add('darkcau-moodle-mainview ');
    });

    /* Progress Bar class='progress border'*/
    getElementsThatHaveOneClassName(['progress']).forEach(progressBar => {
        progressBar.classList.remove('border');
        progressBar.classList.add('darkcau-moodle-progress');
    });
    getElementsThatHaveOneClassName(['progress-bar bar']).forEach(progressBar => {
        progressBar.classList.add('darkcau-moodle-progress-bar');
    });
}

async function moodleSetDarkmodLoadingElements() {
    getElementsThatHaveOneClassName('card-img-top bg-pulse-grey w-100').forEach(card => {
        card.style.backgroundColor = backgroundColor;
    });
}

async function moodleEnableDarkmodeImages() {
    /* dashboard images */
    getElementsThatHaveOneClassName(['card-img dashboard-card-img']).forEach(img => {
        img.classList.add('darkcau-moodle-card-img');
    });

    /* user picture */
    getElementsThatHaveOneClassName(['userpicture defaultuserpic']).forEach(userpic => {
        userpic.classList.add('darkcau-moodle-userpicture');
    });

    /* icons */
    getElementsThatHaveOneClassName(['icon']).forEach(icon => {
        icon.classList.add('darkcau-moodle-icon');
    });
    getElementsThatHaveOneClassName(['iconlarge', 'activityicon']).forEach(icon => {
        icon.classList.add('darkcau-moodle-iconlarge');
    });

    /* badge-image */
    getElementsThatHaveOneClassName(['badge-image']).forEach(badge => {
        badge.classList.add('darkcau-moodle-badge-image');
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
    try{
        moodleEnableDarkmodeImages();
    } catch(e) { }
}

async function moodleEnableDarkmodeIfSystemInDarkmode() {
    console.info('[DarkCAU moodle] adapting System Theme...');
    if (window.matchMedia && !!window.matchMedia('(prefers-color-scheme: dark)').matches) {
        moodleSetDarkmode();
    } else {
        
    }
}

console.log('[DarkCAU moodle] Setting Darkmode...');
moodleSetDarkmode();

/* timer to also affect elements that are loaded delayed. */
setInterval(function(){ 
    moodleSetDarkmode();
}, 1000);
