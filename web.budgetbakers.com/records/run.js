// Initialize script
$(window).ready(waitForLoad);

function waitForLoad() {
    let page_loaded = false;
    console.log("Waiting for page to load.");
    let interval = setInterval(function(){
        page_loaded = getElement("#root > div > div > main") != null;
        if (page_loaded) {
            clearInterval(interval);
            init();
        }
    }, 1000);
}

function init() {
    console.log("Initializing script.");
    addToggleButton();
    addCustomFilters();
}
