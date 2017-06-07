modules.define('header', ['i-bem-dom', 'BEMHTML', 'BEMTREE', 'modal'], function(provide, bemDom, BEMHTML, BEMTREE, Modal) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var bemjson = BEMTREE.apply({
                    block: 'root',
                    context: {
                        block: 'header'
                    },
                    data: this.params
                });

                var html = BEMHTML.apply(bemjson);

                bemDom.replace(this.domElem, html);
            }
        }
    }
}, {
    // lazyInit: true,
    // onInit() {
    //     this._events().on('click', function() {});

    //     this._domEvents().on('click', function() {
    //     });
    // }
}));

});




