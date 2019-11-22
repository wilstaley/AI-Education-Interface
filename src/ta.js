function enableTaTooltips(){
    tippy('#REVIEWS', {
        content: getTooltipContent(
            'Reviews', 
            'TripAdvisor', 
            'machine learning algorithms', 
            'identify if a user’s uploaded review will be helpful to others before publishing it and also looking for patterns in your history on the site to provide relevant, beneficial reviews to you',
            'open-radio-14'
        ),
        placement: 'bottom',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });
    
    tippy('.social-shelves-Shelf__cluster_shelf--1BTiA', {
        content: getTooltipContent(
            'Recommended for You', 
            'TripAdvisor', 
            'machine learning algorithms', 
            'personalize recommendations by sorting user-generated reviews and presenting them to you based upon where the system believes you are in the trip-planning process',
            'open-radio-13'
        ),
        placement: 'bottom',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });

    tippy('.attractions_large', {
        content: getTooltipContent(
            'Hero Photos', 
            'TripAdvisor', 
            'deep learning and computer vision', 
            'provide the most eye pleasing, relevant photo to you based upon the refinement search categories you choose',
            'open-radio-15'
        ),
        placement: 'bottom',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        theme: 'aiedu',
        interactive: true
    });
}