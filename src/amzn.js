function enableAmznTooltips(){
    tippy('.nav-search-field', {
        content: getTooltipContent(
            'Search', 
            'Amazon', 
            'machine learning algorithms', 
            'recognize patterns from your search history and provide more relevant product suggestions',
            'open-radio-8'
        ),
        placement: 'bottom',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });
    
    tippy('.similarities-aui-carousel', {
        content: getTooltipContent(
            'Recommendations', 
            'Amazon', 
            'neural networks', 
            'generate personalized product recommendations',
            'open-radio-7'
        ),
        placement: 'top',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });
    
    tippy('.product-shoveler', {
        content: getTooltipContent(
            'Recommendations', 
            'Amazon', 
            'neural networks', 
            'generate personalized product recommendations',
            'open-radio-7'
        ),
        placement: 'top',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });
    
    tippy('#desktop-grid-1', {
        content: getTooltipContent(
            'Recommendations', 
            'Amazon', 
            'neural networks', 
            'generate personalized product recommendations',
            'open-radio-7'
        ),
        placement: 'top',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });
}