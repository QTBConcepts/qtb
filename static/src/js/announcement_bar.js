openerp.qtb_admin=function(instance,local) {
    instance.web.WebClient = instance.web.WebClient.extend({
        show_annoucement_bar:function(){
            return;
        },
        toggle_nav:function() {
            if ($('.site-wrapper').hasClass('show-nav')) {
                $('.site-wrapper').removeClass('show-nav');
                $('.oe_application') .width('100%');
            }
            else {
                $('.site-wrapper').addClass('show-nav');
                $('.oe_application') .width('calc(100% - 235px)');
            }},
        init:function(parent,client_options) {
            this._super(parent);
            this.set('title_part',{"zopenerp": "QTB Concepts"});
            var self=this;
            $('#big-sexy').bind('click',function (event){
                self.toggle_nav();
        });
    },
});
};;