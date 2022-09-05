CypherMenu.SingleLetter = ( function ( UTILS, Reactor ) {

    function SingleLetter ( letter ) {
        this.letter = letter.toUpperCase();
        this.$input = UTILS.templateToDOM(this.letter);

        this.BUILD();
    }

    SingleLetter.prototype._onInput = function ( evt ) {

        if( this.value === "" ) {
            return;
        } else if( UTILS.isSingle(this.value) ) {

            if( !UTILS.isLetter(this.value)) {
                this.value = "";
            }

        } else {

            const val = this.value;
            const len = this.value.length;

            if( UTILS.isLetter(val[0]) ) {
                this.value = val[0];
            } else if ( UTILS.isLetter(val[len - 1]) ) {
                this.value = val[len - 1];
            } else {
                this.value = "";
            }

        }
    }

    SingleLetter.prototype._onFocusOut = function ( evt ) {
        this.value = this.value.toUpperCase();

        Reactor.emmit("onletterchange", {from: this});
    }

    SingleLetter.prototype.BUILD = function ( ) {
        this.$input.on("input", this._onInput);
        this.$input.on("focusout", this._onFocusOut);
    }

    SingleLetter.prototype.DESTROY = function ( ) {
        this.$input.off("input", this._onInput);
        this.$input.off("focusout", this._onFocusOut);
    }

    SingleLetter.prototype.type = function ( ) {
        return this.letter;
    }

    SingleLetter.prototype.value = function ( val ) {
        if( val === undefined) {
            return this.$input.val();
        } else {
            this.$input.val(val);
        }
    }

    SingleLetter.prototype.clear = function ( ) {
        this.$input.val("");
    }

    SingleLetter.prototype.able = function ( state = false ) {
        this.$input.prop("disabled", state);
    }

    return SingleLetter;

})( CypherMenu.Utils, REACTOR )