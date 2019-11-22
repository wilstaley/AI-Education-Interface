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

    tippy('#sims-fbt-container', {
        content: getTooltipContent(
            'Frequently Bought Together',
            'Amazon',
            'machine learning',
            'provide items to you based on data collected from purchases made by customers',
            'open-radio-9'
        ),
        placement: 'top',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });

    tippy('.a-box-inner', {
        content: getTooltipContent(
            'Pricing',
            'Amazon',
            'machine learning',
            'manage the dynamic pricing model that lowers prices when demand is low and inventory is high, and increase prices when supply is low',
            'open-radio-10'
        ),
        placement: 'left',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });

    tippy('#customer-reviews_feature_div', {
        content: getTooltipContent(
            'Reviews',
            'Amazon',
            'machine learning',
            'identify fake reviews from genuine ones and rank the reviews for you',
            'open-radio-11'
        ),
        placement: 'top',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });
}
