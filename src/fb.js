function enableFbTooltips(){
    tippy('#pagelet_marketplace_recently_viewed_rhc', {
        content: getTooltipContent(
            'Targeted Ads',
            'Facebook',
            'machine learning',
            'predict how susceptible you will be to an ad’s message using profile demographics, Facebook activity, and activity on websites off of Facebook',
            'open-radio-2'
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
            'machine learning',
            'predict how susceptible you will be to an ad’s message using profile demographics, Facebook activity, and activity on websites off of Facebook',
            'open-radio-2'
        ),
        placement: 'left',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        interactive: true,
        theme: 'aiedu',
        interactive: true
    });

    tippy('.userContent', {
        content: getTooltipContent(
            'Text in Posts',
            'Facebook',
            'deep learning',
            'analyze the context of the language in order to prompt you to Facebook tools, monitor hate speech, and detect suicidal intent',
            'open-radio-1'
        ),
        placement: 'top',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        interactive: true,
        theme: 'aiedu',
        interactive: true
    });

    tippy('._666h', {
        content: getTooltipContent(
            'Comments',
            'Facebook',
            'deep learning',
            'understand how people are using slang in order to match you with advertisers, rid prohibited content, rank search results and identify trending topics',
            'open-radio-5'
        ),
        placement: 'bottom',
        arrow: true,
        animation: 'shift-away',
        duration: 500,
        interactive: true,
        theme: 'aiedu',
        interactive: true
    });
}
