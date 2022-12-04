function updateFilters() {
    let filteredRecords = [];
    getCustomFilterNames()
        .filter(filterName => !filterIsActive(filterNameToId(filterName)))
        .forEach(filterName => {
            filteredRecords.length ? filteredRecords = getFilteredRecords(filterName) : filteredRecords = intersection(filteredRecords, getFilteredRecords(filterName));
        }
    );
    showAllRecords();
    hideRecords(filteredRecords);
}

// ----- FILTERS ----- //
const customFilters = {
    "Labeled Records": isLabeled,
    "Verified Records": isVerified
}

function isLabeled(record) { return hasLabel(record, "Verified") || hasLabel(record, "Unverified"); }
function isVerified(record) { return hasLabel(record, "Verified"); }
