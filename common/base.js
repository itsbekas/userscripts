// Minimal file containing the essential functions to run a script

function inject_script(filepath) {
    // $.getScript(filepath); // doesn't work for local files
    // TODO: abstract element creation
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.src = filepath;
    document.getElementsByTagName('head')[0].appendChild(script);
}