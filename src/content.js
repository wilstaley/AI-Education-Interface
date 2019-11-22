console.log('content script running 🏃‍');

const logoURL = chrome.extension.getURL('public/images/logo.png').toString();

function getTooltipContent(header, site, aitype, reason, goto='') {
    const tooltipHTML = `
        <link href="https://fonts.googleapis.com/css?family=Barlow|Jura:700&display=swap" rel="stylesheet">
        <div id='aiedu-ttwrapper'>
            <div id='aiedu-ttheader' style="font-family:'Jura';">
                <h1>${header}</h1>
            </div>
            <div id='aiedu-ttmsg' style="font-family:'Barlow';">
                <p>
                    ${site} is likely using ${aitype} to ${reason}.
                </p>
                <a href="http://wilstaley.com/AI-Education-Website#${goto}" id="btn" target="_blank">learn more!</a>
            </div>
        </div>
    `;
    return tooltipHTML;
}

chrome.runtime.onMessage.addListener(receiver);

function enableTooltips(){
    const site = location.toString().split('/')[2].split('.')[1];
    switch(site){
        case 'facebook':
            enableFbTooltips();
            break;
        case 'amazon':
            enableAmznTooltips();
            break;
        case 'tripadvisor':
            enableTaTooltips();
            break;
        default:
            console.log('not a site with AI')
            break;
    }
    // if(location.toString().includes('facebook')) enableFbTooltips();
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