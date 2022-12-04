function activateFilter(id) {
    switch (id) {
        case "unlabeled_records": {
            hideLabeledRecords();
        }
    }
}

function deactivateFilter(id) {
    switch (id) {
        case "unlabeled_records": {
            showLabeledRecords();
        }
    }
}

function hideLabeledRecords() {
    let recordList = getElementsByClass("VypTY5DQ_tmahm5VdHFJK")[0];
    let dailyRecords = getChildren(recordList);
    for (let i = 1; i < dailyRecords.length; i++) {
        let day = dailyRecords[i];
        let dailyCount = 1;
        for (let j = 1; j < getChildCount(day); j++) {
            let record = getChild(day, j);
            if (hasLabel(record, "Verified") || hasLabel(record, "Unverified")) {
                addClass(record, "labeled_hidden");
                hideElement(record);
                dailyCount++;
            }
        }
        if (dailyCount == getChildCount(day)) {
            addClass(day, "labeled_hidden");
            hideElement(day);
        }
    }
}

function showLabeledRecords() {
    let recordList = getElementsByClass("labeled_hidden");
    for (let i = 0; i < recordList.length; i++) {
        showElement(recordList[i]);
    }
}

function hideVerifiedRecords() {
    let recordList = getElementsByClass("VypTY5DQ_tmahm5VdHFJK")[0];
    let dailyRecords = getChildren(recordList);
    for (let i = 1; i < dailyRecords.length; i++) {
        let day = dailyRecords[i];
        let dailyCount = 1;
        for (let j = 1; j < getChildCount(day); j++) {
            let record = getChild(day, j);
            if (hasLabel(record, "Verified")) {
                addClass(record, "verified_hidden");
                hideElement(record);
                dailyCount++;
            }
        }
        if (dailyCount == getChildCount(day)) {
            addClass(day, "verified_hidden");
            hideElement(day);
        }
    }
}

function showVerifiedRecords() {
    let recordList = getElementsByClass("verified_hidden");
    for (let i = 0; i < recordList.length; i++) {
        showElement(recordList[i]);
    }
}
