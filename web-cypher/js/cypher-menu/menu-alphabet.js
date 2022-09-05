CypherMenu.Alphabet = ( function ( SingleLetter, Utils ) {

    const ELS = {
        get parent( ) {
            return "#rule__alphabet";
        },

        get $parent( ) {
            return $(this.parent);
        }
    }

    return {
        letters: [],

        BUILD ( ) {
            Utils.alphabet.forEach( letter => {
                this.letters.push(new SingleLetter( letter ));
            });
        },

        clear ( ) {
            this.letters.forEach( letter => {
                letter.clear();
            })
        },

        err ( state = true ) {
            this.letters.forEach(letter => {
                Utils.err(letter.$input, false);
            })
        }
    }

})( CypherMenu.SingleLetter, CypherMenu.Utils)