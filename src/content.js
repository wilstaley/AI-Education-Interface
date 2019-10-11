console.log('content script running 🏃‍');

const logoURL = chrome.extension.getURL('public/images/logo.png').toString();

//You can use this as the tippy content if you want the logo in the tooltip
// `<img src=${logoURL} style="margin-bottom: -20px;"> <p>Some text.<p>`,

chrome.runtime.onMessage.addListener(receiver);

function enableTooltips(){
    //Facebook tooltips
    tippy('#pagelet_marketplace_recently_viewed_rhc', {
        content: 'Facebook is using your viewing history to suggest items in marketplace.',
        placement: 'top',
        arrow: true,
        arrowType: 'round',
        animation: 'shift-away',
        duration: 500
    });
    
    tippy('#pagelet_ego_pane', {
        content: 'Facebook is using your browsing history to create targeted ads.',
        placement: 'top',
        arrow: true,
        arrowType: 'round',
        animation: 'shift-away',
        duration: 500,
        interactive: true
    });
    
    tippy('._666k', {
        content: 'Like button!',
        placement: 'bottom',
        arrow: true,
        arrowType: 'round',
        animation: 'shift-away',
        duration: 500,
        interactive: true
    });
}

function receiver(request, sender, sendResponse) {
    //If the popup switch is not toggled, remove all tooltips
    if(!request.toggle){
        [...document.querySelectorAll('*')].forEach(node => {
          if (node._tippy) {
            node._tippy.destroy();
          }
        });
    }
    else enableTooltips();
}

enableTooltips();