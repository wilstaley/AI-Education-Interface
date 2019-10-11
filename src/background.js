console.log('background script running 🏃‍');

const sitesWithAI = [
    'https://www.facebook.com',
    'https://www.travelocity.com',
    'https://www.amazon.com'
];

//query info for getting active tab url
const queryInfo = {
    'active': true, 
    'lastFocusedWindow': true
};

//options for the notification
const notificationOptions = {
    type: "basic",
    title: "AI Detected!",
    message: "AI was detected on this site!  Check the AI extension to learn more.",
    iconUrl: "../public/images/logo.png"
};



/* This code is for displaying notifications */

// get the current tab's url
chrome.tabs.query(queryInfo, function(tabs){
    let prevPathArray = tabs[0].url.split('/');
    let prev_url = prevPathArray[0] + '//' + prevPathArray[2];
    //listen for when a tab is updated (we want to see when a new site is visited)
    chrome.tabs.onUpdated.addListener(function(){
        //get the new current url
        chrome.tabs.query(queryInfo, function(tabs){
            let pathArray = tabs[0].url.split('/');
            let new_url = pathArray[0] + '//' + pathArray[2];
            //if the user has visited a new site...
            if(!(new_url === prev_url)){
                console.log('new site!');
                console.log(new_url);
                //if the site they just visited is one with AI, notify them
                if(sitesWithAI.includes(new_url)){
                    console.log('AI detected...');
                    chrome.notifications.create(notificationOptions);
                }
            }
            prev_url = new_url;
        })
    })
})
