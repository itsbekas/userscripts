const config = {
    "folder": "web.budgetbakers.com",
    "page_type": "path",
    "scripts": {
        "../common": ["base", "util"],
        "": [],
        "records": []
    },
    "use_local_storage": "false"
}

/* ----- DO NOT MODIFY ----- */

window.onload = async (event) => { await inject_code(); };

async function inject_code() {
    let promises = [];
    folders = config["scripts"];
    Object.keys(folders).forEach((dir, _) => {
        folder = folders[dir];
        folder.forEach((file, _) => {
            promises.push(get_script(`/${config["folder"]}/${dir}/${file}.js`));
        })
    });
    Promise.all(promises).then((values) => {
        code = values.join("\n");
        inject_script(code);
    });
}
