var Navbar = {

    get sel( ) {
        return "#cypher-navbar";
    },

    get $el( ) {
        return $(this.sel);
    },

    get height( ) {
        return this.$el.outerHeight();
    },

    events: {
        onWindowScroll( evt ) {
            if($(document).scrollTop() >= this.height * .6) {
                this.$el.removeClass("navbar-light bg-light");
                this.$el.addClass("navbar-dark bg-primary");
            } else {
                this.$el.removeClass("navbar-dark bg-primary");
                this.$el.addClass("navbar-light bg-light");
            }
        }
    },

    build( ) {
        $("#app").css("padding-top", `${this.height}px`);
        $(window).on("scroll", $.proxy(this.events.onWindowScroll, this));
    }
}