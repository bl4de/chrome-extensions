/*global chrome*/

var selectAllTd = document.getElementById("selectAllTd"),
    selectAllTh = document.getElementById("selectAllTh");

selectAllTd.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {cmd: "selectAllTd"});
    });
});


selectAllTh.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {cmd: "selectAllTh"});
    });
});
