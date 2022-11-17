const org_selector = "#search-area > div > div > div > form > div > div:nth-child(1) > div:nth-child(1) > div > input";
const dst_selector = "#search-area > div > div > div > form > div > div:nth-child(1) > div:nth-child(2) > div > input";
const search_selector = "#search-area > div > div > div > form > div > div:nth-child(2) > div.col-md-10.col-lg-10.mtop > input";

const urlParams = new URLSearchParams(window.location.search);

// $(window).ready()
$(function() {
    if (urlParams.get("auto")) main();
});

function main() {
    fill_field(org_selector, "Moscavide");
    fill_field(dst_selector, "Lisboa - Oriente");
    $(search_selector).click();
}

// .change() doesn't work in userscripts
function fill_field(field, val) {
    let changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("change", true, true);
    $(field).val(val)[0].dispatchEvent(changeEvent);
}