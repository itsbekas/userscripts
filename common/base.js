// Minimal file containing the essential functions to run a script

// Stable
// const default_path = "https://raw.githubusercontent.com/itsbekas/userscripts/main"
// Dev
const default_path = "http://127.0.0.1:8080";
const default_id = "code_injection";

function injectScript(code) {
    e = document.createElement("script");
    e.type = "text/javascript";
    e.id = "code_injection";
    t = document.createTextNode(code);
    e.appendChild(t);
    document.getElementsByTagName("head")[0].appendChild(e);
}

function getScript(filepath) {
    let path = default_path + filepath;
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "GET",
            url: path,
            onload: function(response) { resolve(response.responseText); },
            onerror: function(error) { reject(error); }
        });
    });
}
