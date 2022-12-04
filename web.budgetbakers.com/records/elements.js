function addToggleButton() {
    let toggleBtn = `<button
        type="button"
        class="ui green mini circular compact button"
        id="script-menu-btn"
        onclick="toggleScript();">
            Script: On
        </button>`
    let addRecordBtn = getElementsByClass("xvabTpfEZZTy4YhFJJyvf")[0];
    addRecordBtn.prepend(elementFromString(toggleBtn, hideable=false));
}

function addCustomFilters() {
    let customFilterAccordion = `<div class="accordion ui lUJGSX54wFqNxoJsJ2c2M _3uK5nO3_RKz7E4x-6oFDPW" id="custom_filters_accordion">
            <div class="title _37D2sJQ2lRixGNsvYXOWGd" id="custom_filters_toggle" onclick=toggleCustomFilters()>
                <i aria-hidden="true" class="dropdown icon"></i>
                <span class="_3V5hQt-jNuvJMc3C5ahiNK">Custom Filters</span>
            </div>
            <div id="custom_filters_content" class="content">
                <div class="_2ZGog9kJwh4qfrOyOO2rQu" id="custom_filters_list"></div>
            </div>
        </div>` 
    let filterList = getElementsByClass("_26YpAPyiy2U5mYsxLuBGRZ")[0];
    let searchButton = getElementsByClass("_1uSKSaPiYsN9Ka7HhUnDlE")[0];
    let accountFilter = getElement("#root > div > div > main > div > div._5NFnhpp7joa9CQoFA2Fw- > div._14RWKiNFwtHCO_ubRsTZ57 > div:nth-child(3) > div > div:nth-child(4)");
    filterList.insertBefore(elementFromString(customFilterAccordion), accountFilter);
    addCustomFilter("Labeled Records");
    addCustomFilter("Verified Records");
}

function addCustomFilter(filterName) {
    let filterId = filterNameToId(filterName);
    let customFilterToggle = `<div class="_2GmG6EBEDCNoqdEZOPBhq0" >
        <div class="_3Cb8Xl79OFHGHax3XfDFNA">
            <div class="_1ztTodRZyA4BhZwgROneah"
                    id="${filterId}"
                    onclick="toggleCustomFilter('${filterId}');">
                <span class="_2gzCsaWKdEE7M4HNnVXrv_ EX63aGGdpg0yYWgoMvv13 ic_visibility"></span>
                <span>${filterName}</span>
            </div>
        </div>`
    let customFilterList = getElementById("custom_filters_list");
    customFilterList.appendChild(elementFromString(customFilterToggle));
}
