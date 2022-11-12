// TODO: Common file that differenciates (through a config.js) whether pages are in path (*/page) or arguments (*/screen=page)
const page = window.location.pathname.substring(1);
console.log(page);
const pages =
{
  "default": ["elements", "util"], // Scripts to be added everywhere
  "records": ["unlabeled_records"],
  "settings": ["settings_elements", "settings_page", "settings_handler"],
}

$(window).ready(load_script);

function load_script() {
    inject_scripts();
    //$(window).on('load', verify_settings);
}

function inject_scripts() {
  if (page in pages) {
    inject_script_folder("default");
    inject_script_folder(page);
  }
}

function inject_script_folder(page) {
  for (var file in pages[page]) {
    inject_script(`file://D:\\Coding\\Userscripts\\wallet_budgetbakers\\${pages[page][file]}.js`);
  }
}

function inject_script(filepath) {
  // $.getScript(filepath); // doesn't work for local files
  // TODO: abstract element creation
  let script = document.createElement('script');
  script.type = "text/javascript";
  script.src = filepath;
  document.getElementsByTagName('head')[0].appendChild(script);
}

// Looks for settings in the local storage, and sets them as default if they're not present
function verify_settings() {
  if (window.localStorage.getItem("twutility") == null) {
    reset_settings();
    location.reload();
  }
  if (window.sessionStorage.getItem("twutility") == null) {
    reset_session_settings();
  }
}
