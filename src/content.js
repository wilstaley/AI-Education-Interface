console.log('content script running 🏃‍');

const logoURL = chrome.extension.getURL('public/images/logo.png').toString();

function getTooltipContent(header, site, aitype, reason) {
    const tooltipHTML = `
        <link href="https://fonts.googleapis.com/css?family=Barlow|Jura:700&display=swap" rel="stylesheet">
        <div id='aiedu-ttwrapper'>
            <div id='aiedu-ttheader' style="font-family:'Jura';">
                <h1>${header}</h1>
            </div>
            <div id='aiedu-ttmsg' style="font-family:'Barlow';">
                <p>
                    ${site} is using ${aitype} to ${reason}.
                </p>
                <button>learn more!</button>
            </div>
        </div>
    `;
    return tooltipHTML;
}

chrome.runtime.onMessage.addListener(receiver);

function enableTooltips(){
    //Facebook tooltips
    tippy('#pagelet_marketplace_recently_viewed_rhc', {
        content: getTooltipContent(
            'Targeted Ads', 
            'Facebook', 
            'deep learning', 
            'predict how susceptible you will be to an ad’s message using profile demographics, Facebook activity, and activity on websites off of Facebook'
        ),
        placement: 'left',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });
    
    tippy('#pagelet_ego_pane', {
        content: getTooltipContent(
            'Targeted Ads',
            'Facebook',
            'deep learning',
            'predict how susceptible you will be to an ad’s message using profile demographics, Facebook activity, and activity on websites off of Facebook'
        ),
        placement: 'left',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        interactive: true,
        theme: 'aiedu',
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