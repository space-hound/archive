const STATE = {
    alphabet: {
        get lower( ) {
            return "abcdefghijklmnopqrstuvwxyz".split("");
        },

        get upper( ) {
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        }
    },

    scrambled: {

        lower: [],
        upper: [],

    },

    VIEW: {
        views: {
            "menu": "#cypher__rule",
            "encrypt": "#cypher__crypt",
            "contact": "#about"
        },

        currentView: "#cypher__rule",
        requestedView: "",
        transitionDuration: 125,

        changeView( reqV ) {
            if(reqV !== undefined) {
                STATE.VIEW.requestedView = reqV;
            }

            $(STATE.VIEW.currentView).css("opacity", "0");
    
            setTimeout( function ( currentV, reqV ) {
                $(STATE.VIEW.currentView).addClass("d-none");
                $(STATE.VIEW.requestedView).removeClass("d-none");
                $(STATE.VIEW.requestedView).css("opacity", "1");

                STATE.VIEW.currentView = STATE.VIEW.requestedView;
                STATE.VIEW.requestedView = "";

            }, STATE.VIEW.transitionDuration )
        },

        onLinkClick( evt ) {
            if($(this).hasClass("inner-link")) {
                evt.preventDefault();

                if($(this).data("to") === STATE.VIEW.currentView) {
                    return;
                }

                STATE.VIEW.changeView($(this).data("to"));

                return;
            }
        },

        BUILD( ) {
            $("body").on("click", "a", this.onLinkClick);
        }
    },

    ERRORS: {
        caesar(val) {
            return `The key - ${val} - is invalid! Please choose another`;
        },

        letter( ) {
            return `You can not have duplicates, please remove them!`;
        },

        finish( ) {
            return `It appears that your rule is not valid! Please check it!`;
        },

        load( ) {
            return `Invalid Rule!`;
        }
    }
}

