chrome.browserAction.onClicked.addListener(function (tab) {
    // insert the simple grey css...
    chrome.tabs.insertCSS(tab.id, {
        file: "greyvee.css"
    });

});