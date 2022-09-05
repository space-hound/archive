CypherMenu.Build = (function(Selection, Alphabet, Alert, Validation, State) {

    const ELS = {
        get reset( ) {
            return "#rule__reset";
        },

        get $reset( ) {
            return $(this.reset);
        },

        get finish( ) {
            return "#rule__finish";
        },

        get $finish( ) {
            return $(this.finish);
        },
    }

    const EVTS = {
        onReset( evt ) {
            Selection.clear();
            Alphabet.clear();
            Alphabet.err(false);
            Alert.hide();
        },

        onFinish( evt ) {
            if(!Validation.validateOnFinish()) {
                return;
            }

            const rule = Alphabet.letters.map( letter => letter.value());

            STATE.scrambled.lower = rule.map( letter => letter.toLowerCase());
            STATE.scrambled.upper = rule.map( letter => letter.toUpperCase());

             $("#cypher-link a").data("to", "#cypher__crypt");

            State.VIEW.changeView("#cypher__crypt");
        }
    }


    const BUILD = ( ) => {
        Selection.BUILD();
        Alphabet.BUILD();
        Validation.BUILD();

        ELS.$reset.on("click", EVTS.onReset);
        ELS.$finish.on("click", EVTS.onFinish);
    }

    return BUILD;

})( CypherMenu.Selection, CypherMenu.Alphabet, CypherMenu.Alert, CypherMenu.Validation, STATE )