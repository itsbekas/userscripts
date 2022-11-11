const urlParams = new URLSearchParams(window.location.search);
const url_screen = urlParams.get("screen");
const screens =
{
  "default": ["elements", "util"], // Scripts to be added everywhere
  "records": ["unlabeled_records"],
  "settings": ["settings_elements", "settings_page", "settings_handler"],
}

console.log("teste");

$(window).ready(function(){console.log("teste");});

function load_script() {
    inject_scripts();
    $(window).on('load', verify_settings);
}

function inject_scripts() {
  if (url_screen in screens) {
    inject_script_folder(url_screen);
    inject_script_folder("default");
  }
}

function inject_script_folder(page) {
  for (var file in screens[page]) {
    $.getScript(`https://web.tecnico.ulisboa.pt/bernardo.jordao/tribalwars/scripts/${page}/${screens[page][file]}.js`);
  }
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
