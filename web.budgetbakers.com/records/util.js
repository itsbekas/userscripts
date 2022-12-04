function hasLabel(element, labelName) {
    labelList = element.querySelectorAll(':scope > div._3oJhqSCX8H5S0i6pA59f9k > div._2yWsrOsWf0KGrXIxhhDI2I > div');
    for (let i = 0; i < labelList.length; i++) {
        if (labelList[i].textContent == labelName) return true;
    }
    return false;
}

function filterIsActive(filterId) {
    let filter = getElementById(filterId);
    return !hasClass(filter, "_3amjuBKxMzoKoV6CEKKwhx");
}

function filterNameToId(filterName) { return filterName.toLowerCase().replace(" ", "_"); }
function getCustomFilterNames() { return Object.keys(customFilters); }
function getCustomFilterIds() { return getCustomFilterNames().map(filterName => filterNameToId(filterName)); }
function getAllRecords() { return getElementsByClass("_3wwqabSSUyshePYhPywONa _1WDK9_g9dlWq0E8o4YpuCW"); }
function getFilterFn(filterName) { return customFilters[filterName]; }
function getFilteredRecords(filterName) { return Array.from(getAllRecords()).filter(record => getFilterFn(filterName)(record)); }

function showAllRecords() {
    let recordList = getElementsByClass("VypTY5DQ_tmahm5VdHFJK")[0];
    let dailyRecords = getChildren(recordList);
    for (let i = 1; i < dailyRecords.length; i++) {
        let day = dailyRecords[i];
        for (let j = 1; j < getChildCount(day); j++) {
            let record = getChild(day, j);
            showElement(record);
        }
        showElement(day);
    }
}

function hideRecords(records) {
    let recordList = getElementsByClass("VypTY5DQ_tmahm5VdHFJK")[0];
    let dailyRecords = getChildren(recordList);
    for (let i = 1; i < dailyRecords.length; i++) {
        let day = dailyRecords[i];
        let dailyCount = 1;
        for (let j = 1; j < getChildCount(day); j++) {
            let record = getChild(day, j);
            if (records.includes(record)) {
                hideElement(record);
                dailyCount++;
            }
        }
        if (dailyCount == getChildCount(day)) hideElement(day);
    }
}