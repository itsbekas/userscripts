//$(window).ready(load_script);

function load_script() {
    if (typeof path == 'undefined') base_path = "https://raw.githubusercontent.com/itsbekas/userscripts/main/"
    inject_scripts(script, path);
    //$(window).on('load', verify_settings);
}

function inject_scripts() {
  if (page in pages) {
    inject_script_folder("default");
    inject_script_folder(page);
  }
}

function inject_script_folder() {
  for (var file in pages[page]) {
    inject_script(`default_path${pages[page][file]}.js`);
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

function teste_inject() {
  return "teste inject";
}
