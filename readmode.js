'use strict'

const enableReadMode = {
	file: 'injected.js',
	runAt: 'document_end'
}

// init extension
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.id, enableReadMode)
});