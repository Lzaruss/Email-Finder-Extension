function sendEmailsToPopup(text){
    
    let emails = findEmails(text.innerText);
    chrome.runtime.sendMessage({action: 'addEmails', emails: emails});

};

function findEmails(text){
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(emailRegex);
}

sendEmailsToPopup(document.querySelector("body"));