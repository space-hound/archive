CypherMenu.Alert = ( function ( ) {

    const ELS = {
        get rule ( ) {
            return "#rule__encrypt"
        },

        get $rule ( ) {
            return $(this.rule);
        },

        get alert ( ) {
            return "#rule__alert .alert"
        },

        get $alert ( ) {
            return $(this.alert);
        },

        get msg ( ) {
            return "#rule__alert .alert__message";
        },

        get $msg ( ) {
            return $(this.msg);
        },
    }

    return {

        show(text) {
            ELS.$msg.text(text);
            ELS.$alert.removeClass("d-none");

            $('html, body').animate({
                scrollTop: (ELS.$rule.offset().top)
            }, 125);
        },
    
        hide() {
            ELS.$alert.addClass("d-none");
        },

        BUILD() {
            const th = this;

            $("#rule__alert button").on("click", function() {
                th.hide();
            });
        }
    }

})( )