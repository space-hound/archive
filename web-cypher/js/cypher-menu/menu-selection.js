CypherMenu.Selection = ( function ( Utils, Reactor ){
    const ELS = {
        get selection( ) {
            return "#encrypt__type";
        },

        get $selection( ) {
            return $(this.selection);
        },

        get load( ) {
            return "#custom-load";
        },

        get $load( ) {
            return $(this.load);
        },

        get caesar( ) {
            return {
                container: "#caesar",
                input: "#caesar-k__val",
                inc: "#caesar-k__inc",
                dec: "#caesar-k__dec"
            }
        },

        get $caesar( ) {
            const _this = this;

            return {
                container: $(_this.caesar.container),
                input: $(_this.caesar.input),
                inc: $(_this.caesar.inc),
                dec: $(_this.caesar.dec)
            }
        },

        get modal( ) {
            return {
                modal: "#custom-load__modal",
                load: "#custom-load__modal-load",
                input: "#custom-load__modal-input"
            }
        },
        
        get $modal( ) {
            const _this = this;

            return {
                modal: $(_this.modal.modal),
                load: $(_this.modal.load),
                input: $(_this.modal.input),

                modalError( state = false ) {
                    if(state) {
                        $("#modal-error").removeClass("d-none");
                    } else {
                        $("#modal-error").addClass("d-none");
                    }
                }
            }
        }
    }

    const EVTS = {
        onSelectChange( evt ) {
            const value = this.value;

            $(this).find("option").each(function() {
                $(this.value).addClass("d-none");
            });

            $(value).removeClass("d-none");

            //TODO EMMIT CUSTOM EVENT
            if(this.value === "#custom-load") {
                Reactor.emmit("oncustom");
            } else if (this.value === "#caesar-k") {
                Reactor.emmit("oncaesar", {from: ELS.$caesar.input});
            }
        },

        onCaesarInc( evt ) {
            let num = parseInt(ELS.$caesar.input.val());

            if(isNaN(num)) {
                num = 0;
            }

            ELS.$caesar.input.val(num + 1);

            Reactor.emmit("oncaesar", {from: ELS.$caesar.input});
        },

        onCaesarDec( evt ) {
            let num = parseInt(ELS.$caesar.input.val());

            if(isNaN(num)) {
                num = 0;
            }

            ELS.$caesar.input.val(num - 1);

            Reactor.emmit("oncaesar", {from: ELS.$caesar.input});
        },

        onCustomLoad( evt ) {
            ELS.$modal.input.val("");
            Utils.err(ELS.$modal.input, false);
            ELS.$modal.modalError(false);
        },

        onModalLoad( evt ) {
            Reactor.emmit("oncustomload", {from: ELS.$modal});
        }
    }

    const BUILD = ( ) => {
        ELS.$selection.on("change", EVTS.onSelectChange);
        ELS.$caesar.inc.on("click", EVTS.onCaesarInc);
        ELS.$caesar.dec.on("click", EVTS.onCaesarDec);
        ELS.$load.on("click", EVTS.onCustomLoad);
        ELS.$modal.load.on("click", EVTS.onModalLoad);
    }

    const DESTROY = ( ) => {
        ELS.$selection.off("change", EVTS.onSelectChange);
        ELS.$caesar.inc.off("click", EVTS.onCaesarInc);
        ELS.$caesar.dec.off("click", EVTS.onCaesarDec);
        ELS.$load.off("click", EVTS.onCustomLoad);
        ELS.$modal.load.off("click", EVTS.onModalLoad);
    }

    const clear = ( ) => {
        ELS.$selection.find("option").each( function ( ) {
            $(this).prop("selected", false);
            $(this.value).addClass("d-none");
        });

        ELS.$selection.find("option").first().prop("selected", true);

        const id = ELS.$selection.find("option").first().val();

        $(id).removeClass("d-none");
    }

    return { BUILD, DESTROY, clear }

})( CypherMenu.Utils, REACTOR );