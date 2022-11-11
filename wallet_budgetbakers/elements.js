const script_menu_btn = `<button type="button" class="ui blue mini circular compact button">"Script Menu"</button>`

// Selectors
const ADD_RECORD_SELECTOR = "#root > div > div > div._1V4hZqsf6Tn_Uoxjno3LXT > div > div > button";

function createUtilityMenu() {
    addScriptMenuButton();
}

function addScriptMenuButton() {
    record_btn = getElement(ADD_RECORD_SELECTOR);
    record_btn.prepend(script_menu_btn);
}