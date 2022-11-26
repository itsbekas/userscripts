// Minimal file containing the essential functions to run a script

function inject_script(filepath) {
    GM_xmlhttpRequest({
        method: "GET",
        url: filepath,
        onload: function(response) {
            let script = document.createElement("script");
            script.type = "text/javascript";
            let scriptText = document.createTextNode(response.responseText);
            script.appendChild(scriptText);
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    });
}
