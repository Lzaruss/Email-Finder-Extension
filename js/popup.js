document.querySelector("#ck").addEventListener("click", () => {
    chrome.runtime.sendMessage('pageActionClicked');
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {    
    if (message.action === 'addEmails') {
        const emails = message.emails;
        const emailList = document.createElement('ul');
        emailList.classList.add("list")
        //Create button to copy emails
        const button = document.createElement('button');
        button.textContent = "Copy to clipboard!";
        button.classList.add("copy-button");
        document.body.appendChild(button);

        emails.forEach((email) => {
        const emailItem = document.createElement('li');
        emailItem.textContent = email;
        emailList.appendChild(emailItem);
        });
        document.body.appendChild(emailList);

        //Set count of emails scrapped
        chrome.action.setBadgeText({text: (Object.keys(emails).length).toString()});

        button.addEventListener("click", ()=>{
            const listItems = emailList.innerText;
            navigator.clipboard.writeText(listItems).then(() => {
                 alert("List copied to clipboard!");
              });
        });
}});
