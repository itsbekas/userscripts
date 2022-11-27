// HTML Queries & Modifications
function getElement(query) { return document.querySelector(query); }
function getElementsByClass(className) { return document.getElementsByClassName(className); }
function getElementById(id) { return document.getElementById(id); }
function elementLength(element) { return element.childElementCount; }
function getChild(element, index) { return element.childNodes[index]; }
function hideElement(query) {} // TODO
function elementFromString(string) { return document.createRange().createContextualFragment(string); }
function setElementClass(element, className) { element.className = className; }
function setElementText(element, text) { element.innerHTML = text; }