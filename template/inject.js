const config = {
    "folder": "template",
    "page_type": "path/query",
    "scripts": {
        "../common": ["base", "util"],
        "": [],
        "folder1": ["scriptA", "scriptB"],
        "folder2": ["scriptC"]
    },
    "use_local_storage": "false"
}

/* ----- DO NOT MODIFY ----- */

window.onload = async (event) => { await injectCode(); };

async function injectCode() {
    let promises = [];
    folders = config["scripts"];
    Object.keys(folders).forEach((dir, _) => {
        folder = folders[dir];
        folder.forEach((file, _) => {
            promises.push(getScript(`/${config["folder"]}/${dir}/${file}.js`));
        })
    });
    Promise.all(promises).then((values) => {
        code = values.join("\n");
        injectScript(code);
    });
}
