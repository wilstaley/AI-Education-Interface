console.log('content script running 🏃‍');

const logoURL = chrome.extension.getURL('public/images/logo.png').toString();

const tooltipHTML = `
    <div id='aiedu-ttwrapper'>
        <div id='aiedu-ttheader'>
            <h1>Header</h1>
        </div>
        <div id='aiedu-ttmsg'>
            <p>
                ___ is using ___ to ____.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque augue felis. Maecenas hendrerit massa risus. Maecenas et auctor quam, non feugiat elit. Sed tristique feugiat tortor ut feugiat. Quisque iaculis tincidunt tortor, non consectetur mauris lobortis a. Fusce risus purus, auctor vel interdum id, dapibus ac est. In sem odio, dictum sed ex id, commodo dictum nibh. Sed consequat viverra ipsum ac euismod. Integer vulputate lorem ac massa ultricies, id finibus diam porttitor. In in turpis sit amet velit efficitur sollicitudin. Duis sit amet posuere dolor.
            </p>
        </div>
    </div>
`;

chrome.runtime.onMessage.addListener(receiver);

function enableTooltips(){
    //Facebook tooltips
    tippy('#pagelet_marketplace_recently_viewed_rhc', {
        content: tooltipHTML,
        placement: 'top',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu'
    });
    
    tippy('#pagelet_ego_pane', {
        content: tooltipHTML,
        placement: 'top',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        interactive: true,
        theme: 'aiedu'
    });
    
    tippy('._666k', {
        content: tooltipHTML,
        placement: 'bottom',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        interactive: true,
        theme: 'aiedu'
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