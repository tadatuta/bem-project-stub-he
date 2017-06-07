block('avatar').content()(function() {
    return {
        block: 'image',
        content: this.data.user
    };
});
