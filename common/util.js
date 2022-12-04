// HTML Queries & Modifications
function getElement(query) { return document.querySelector(query); }
function getElementsByClass(className) { return document.getElementsByClassName(className); }
function getElementById(id) { return document.getElementById(id); }
function getChildCount(element) { return element.childElementCount; }
function getChildren(element) { return element.childNodes; }
function getChild(element, index) { return element.childNodes[index]; }
function hideElement(element) { element.style.display = "none"; }
function showElement(element, display) { element.style.display = display; }
function elementFromString(string) { return document.createRange().createContextualFragment("<div class='userscript_element'>" + string + "</div>"); }
function setElementClass(element, className) { element.className = className; }
function setElementText(element, text) { element.innerHTML = text; }
function hasClass(element, className) { return element.classList.contains(className); }
function addClass(element, className) { element.classList.add(className); }
function removeClass(element, className) { element.classList.remove(className); }
function toggleClass(element, className) { hasClass(element, className) ? removeClass(element, className) : addClass(element, className); }
