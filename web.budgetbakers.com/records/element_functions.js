function toggleScript() {
    scriptOn = !scriptOn;

    let btn = getElementById("script-menu-btn");
    if (scriptOn) {
        setElementClass(btn, "ui green mini circular compact button");
        setElementText(btn, "Script: On");
    } else {
        setElementClass(btn, "ui red mini circular compact button");
        setElementText(btn, "Script: Off");
    }
}

function toggleCustomFilters() {
    let btn = getElementById("custom_filters");
    if (hasClass(btn, "active")) {
        removeClass(btn, "active");
        hideCustomFilters();
    } else {
        addClass(btn, "active");
        showCustomFilters();
    }
}

function hideCustomFilters() {}

function showCustomFilters() {}
