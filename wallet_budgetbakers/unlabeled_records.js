// Selectors
const MAIN_SELECTOR = "#root > div > div > main";
const RECORD_TABLE_SELECTOR = "#root > div > div > main > div > div._5NFnhpp7joa9CQoFA2Fw- > div._1mGh4KCr_zK-cTWl1AVZse > div";
// Classes
const DAILY_RECORD_CLASS = "_3oJhqSCX8H5S0i6pA59f9k";

// Initialize script
window.addEventListener('load', waitForLoad);

function waitForLoad() {
    let page_loaded = false;
    console.log("Waiting for page to load.");
    let interval = setInterval(function(){
        page_loaded = getElement(MAIN_SELECTOR) != null;
        if (page_loaded) {
            clearInterval(interval);
            init();
        }
    }, 1000);
}

function init() {
    console.log("Initializing script.");
    createUtilityMenu();
    hideLabeledRecords();
}

function hideLabeledRecords() {
    console.log("Hiding labeled records");
    let records = getLabeledRecords();
    for (var i = 0; i < elementLength(records); i++){
        hideElement(getChild(records, i));
    }
}

function getLabeledRecords() {
    let labeledRecords = [];
    let records = getRecords();
    for (var i = 0; i < records.length; i++) {
        console.log(records[i]);
        if (hasLabel(records[i]))
            labeledRecords.push(records[i]);
    }
    console.log(labeledRecords);
    return labeledRecords;
}

function getRecords() {
    // Note: not all records are loaded instantly, so this shouldn't be executed on load
    return getClassElements(DAILY_RECORD_CLASS);
}

function hasLabel(record) {
    return record.childElementCount == 6;
}
