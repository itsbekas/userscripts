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
    let customFilterAccordion = `<div class="accordion ui lUJGSX54wFqNxoJsJ2c2M _3uK5nO3_RKz7E4x-6oFDPW">
            <div class="title _37D2sJQ2lRixGNsvYXOWGd">
                <i aria-hidden="true" class="dropdown icon"></i>
                <span class="_3V5hQt-jNuvJMc3C5ahiNK">Custom Filters</span>
            </div>
        </div>`
    let filterList = getElementsByClass("_26YpAPyiy2U5mYsxLuBGRZ")[0];
    let searchButton = getElementsByClass("_1uSKSaPiYsN9Ka7HhUnDlE")[0];
    let accountFilter = getElement("#root > div > div > main > div > div._5NFnhpp7joa9CQoFA2Fw- > div._14RWKiNFwtHCO_ubRsTZ57 > div:nth-child(3) > div > div:nth-child(4)");
    filterList.insertBefore(elementFromString(customFilterAccordion), accountFilter);
}
