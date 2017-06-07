block('user').content()(function() {
    return [
        this.data.xxx === 'bbb' ? {
            block: 'avatar'
        } : {
            block: 'other'
        }
    ];
});
