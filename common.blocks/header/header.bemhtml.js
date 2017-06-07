block('header')(
    tag()('header'),
    content()(function() {
        return {
            elem: 'inner',
            content: applyNext()
        };
    })
);
