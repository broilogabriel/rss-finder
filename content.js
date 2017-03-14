chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("request from some:", request);
        if (request.text === 'link_count') {
            sendResponse({links: document.getElementsByTagName('a').length});
        }
    }
);

