// Minimal file containing the essential functions to run a script

// Stable
// const default_path = "https://raw.githubusercontent.com/itsbekas/userscripts/main"
// Dev
const default_path = "http://127.0.0.1:8080";

function inject_script(filepath) {
    let path = default_path + filepath;
    GM_xmlhttpRequest({
        method: "GET",
        url: path,
        onload: function(response) {
            let script = document.createElement("script");
            script.type = "text/javascript";
            let scriptText = document.createTextNode(response.responseText);
            script.appendChild(scriptText);
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    });
}
