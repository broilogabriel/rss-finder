chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(tab.id, {text: 'link_count'}, function (response) {
        if (chrome.runtime.lastError) {
            console.log("ERROR: ", chrome.runtime.lastError);
        }
        console.log("Links: ", response);
        chrome.browserAction.setBadgeText({text: "" + response.links});
    });
});
console.log(chrome);
chrome.tabs.onHighlighted.addListener(function (info) {
    console.log("onHighlightedInfo: ", info.tabIds[0]);
    chrome.tabs.sendMessage(info.tabIds[0], {text: 'link_count'}, function (response) {
        if (chrome.runtime.lastError) {
            console.log("ERROR: ", chrome.runtime.lastError);
        }
        console.log("Links: ", response);
        chrome.browserAction.setBadgeText({text: "" + response.links});
    });
});