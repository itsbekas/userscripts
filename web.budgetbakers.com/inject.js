const config = {
    "folder": "web.budgetbakers.com",
    "page_type": "path",
    "scripts": {
        "../common": ["vars", "base", "util", "jquery"],
        "": [],
        "records": ["unlabeled_records", "elements", "element_functions"]
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
