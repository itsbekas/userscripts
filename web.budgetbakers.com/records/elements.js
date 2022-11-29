function addToggleButton() {
    let toggleBtn = `<button
        type="button"
        class="ui green mini circular compact button"
        id="script-menu-btn"
        onclick="toggleScript();">
            Script: On
        </button>`
    let addRecordBtn = getElementsByClass("xvabTpfEZZTy4YhFJJyvf")[0];
    addRecordBtn.prepend(elementFromString(toggleBtn));
}

function addCustomFilters() {
    let customFilterAccordion = `<div class="accordion ui">
            <div class="title _37D2sJQ2lRixGNsvYXOWGd">
                <i aria-hidden="true" class="dropdown icon">
                    ::before
                </i>
                <span class="_3V5hQt-jNuvJMc3C5ahiNK">Custom Filters</span>
            </div>
        </div>`
    let searchButton = getElementsByClass("_1uSKSaPiYsN9Ka7HhUnDlE")[0];
    searchButton.after(elementFromString(customFilterAccordion));
}
