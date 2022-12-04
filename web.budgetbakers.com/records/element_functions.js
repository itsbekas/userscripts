function toggleScript() {
    scriptOn = !scriptOn;

    let btn = getElementById("script-menu-btn");
    let scriptElements = getElementsByClass("userscript_element");
    if (scriptOn) {
        setElementClass(btn, "ui green mini circular compact button");
        setElementText(btn, "Script: On");
        for (let i = 0; i < scriptElements.length; i++) { showElement(scriptElements[i]); }
    } else {
        setElementClass(btn, "ui red mini circular compact button");
        setElementText(btn, "Script: Off");
        for (let i = 0; i < scriptElements.length; i++) { if (isHideable(scriptElements[i])) hideElement(scriptElements[i]); }
    }
}

function toggleCustomFilters() {
    let btn = getElementById("custom_filters_toggle");
    let content = getElementById("custom_filters_content");
    let activeClass = "active";
    toggleClass(btn, activeClass);
    toggleClass(content, activeClass);
}

function toggleCustomFilter(id) {
    let filter = getElementById(id);
    let activeClass = "_3amjuBKxMzoKoV6CEKKwhx";
    toggleClass(filter, activeClass);
    hasClass(filter, activeClass) ? activateFilter(id) : deactivateFilter(id);
}
