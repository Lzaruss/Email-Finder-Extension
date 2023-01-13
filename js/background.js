chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'pageActionClicked') {
        logic()
    }
});

const logic = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const currentTabId = tabs[0].id;
        chrome.scripting.executeScript(
            { 
              target: {tabId: currentTabId}, 
              files: ['js/scrapEmails.js'],
            });
    });
};