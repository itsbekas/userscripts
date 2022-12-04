function hasLabel(element, labelName) {
    labelList = element.querySelectorAll(':scope > div._3oJhqSCX8H5S0i6pA59f9k > div._2yWsrOsWf0KGrXIxhhDI2I > div');
    for (let i = 0; i < labelList.length; i++) {
        if (labelList[i].textContent == labelName) return true;
    }
    return false;
}
