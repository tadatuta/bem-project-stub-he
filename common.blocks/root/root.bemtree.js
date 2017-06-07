block('root').replace()(function() {
    this.data = this.ctx.data;

    return this.ctx.context;
});
