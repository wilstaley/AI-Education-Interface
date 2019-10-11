const btn = document.getElementById('btn');
const toggle = document.querySelector('.ios-switch');

btn.addEventListener('click', learnMore);
toggle.addEventListener('click', toggleExt);

//set toggle from storage
chrome.storage.sync.get(['toggle'], function(result) {
    toggle.checked = result.toggle;
});

//send message to enable/disable tooltips depending on toggle
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {toggle: toggle.checked});
});

function learnMore(){
    console.log('logged in the popup console...')
}


function toggleExt(){
    //send msg to content script with the toggle state
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {toggle: toggle.checked});
    });
    //remember the toggle state
    //this is because if the popup is closed and reopened, it would reset the toggle switch
    chrome.storage.sync.set({toggle: toggle.checked}, function() {
         console.log('Value is set to ' + toggle.checked);
   });
}