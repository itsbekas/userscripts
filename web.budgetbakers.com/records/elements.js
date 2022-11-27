const script_menu_btn = 
    `<button
        type="button"
        class="ui green mini circular compact button"
        id="script-menu-btn"
        onclick="toggleScript();">
        Script: On
    </button>  `

// Selectors
const ADD_RECORD_CLASS = "xvabTpfEZZTy4YhFJJyvf";
const ADD_RECORD_SELECTOR = "#root > div > div > div._1V4hZqsf6Tn_Uoxjno3LXT > div > div";

function createUtilityMenu() {
    addScriptMenuButton();
}

function addScriptMenuButton() {
    record_btn = getElementsByClass(ADD_RECORD_CLASS)[0];
    record_btn.prepend(elementFromString(script_menu_btn));
}

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