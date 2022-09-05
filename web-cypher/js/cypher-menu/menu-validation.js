CypherMenu.Validation = (function (Utils, Alphabet, Alert, Reactor, State) {

    const CEVTS = {
        oncustom(evt) {
            Alphabet.letters.forEach(letter => {
                letter.clear();
                letter.able();
                Utils.err(letter.$input, false);
            })
        },

        oncaesar(evt) {
            const k = parseInt(evt.from.val());

            if (k % 26 === 0) {

                Alert.show(State.ERRORS.caesar(k));

                return;

            } else {
                Alert.hide();
            }

            const alphabet = State.alphabet.upper;
            const scrambledAlphabet = [];

            alphabet.forEach((letter, index) => {
                const newIndex = (index + k) % 26;
                scrambledAlphabet[newIndex] = letter;
            });


            Alphabet.letters.forEach((letter, index) => {
                letter.value(scrambledAlphabet[index]);
                letter.able(true);
            });

        },

        onletterchange(evt) {
            const nonEmpty = Alphabet.letters.filter(letter => {
                return letter.value() !== "" && letter.value() !== undefined;
            });

            const slag = {};

            nonEmpty.forEach(letter => {
                const key = letter.value();

                if (slag[key] === undefined) {
                    slag[key] = [];
                }

                slag[key].push(letter);
            });

            const duplicates = [];

            Object.keys(slag).forEach( key => {

                if (slag[key].length > 1) {
                    slag[key].forEach(letter => {
                        duplicates.push(letter);
                    })
                }

            });


            if (duplicates.length >= 1) {
                Alphabet.letters.forEach(letter => {

                    if (duplicates.includes(letter)) {
                        Utils.err(letter.$input, true);
                    } else {
                        Utils.err(letter.$input, false);
                    }

                });

                Alert.show(State.ERRORS.letter());

            } else {

                Alphabet.letters.forEach(letter => {
                    Utils.err(letter.$input, false);
                });

                Alert.hide();
            }
        },

        oncustomload ( evt ) {
            const rule = validateOnLoad(evt.from);
            if(! Array.isArray(rule) ) {
                Utils.err(evt.from.input);
                evt.from.modalError(true);
            } else {
                Utils.err(evt.from.input, false);
                evt.from.modalError(false);
                evt.from.input.val("");
                evt.from.modal.modal("toggle");

                for(let i = 0; i < Alphabet.letters.length; i++) {
                    Alphabet.letters[i].value(rule[i]);
                }

            }
        }
    }

    const BUILD = ( ) => {
        Alert.BUILD();
        Reactor.add("oncustom", CEVTS.oncustom);
        Reactor.add("oncustomload", CEVTS.oncustomload);
        Reactor.add("oncaesar", CEVTS.oncaesar);
        Reactor.add("onletterchange", CEVTS.onletterchange);
    }

    const validateRule = ( rule ) => {
        if(rule.length !== 26) {
            return false;
        }

        const slag = {};
        const letters = State.alphabet.upper;

        for(let i = 0; i < rule.length; i++) {
            if(!letters.includes(rule[i])) {
                return false;
            }
            
            const key = rule[i];

            if(slag.hasOwnProperty(key)) {
                return false;
            }

            slag[key] = key;
        }

        return true;
    }

    const validateOnFinish = ( ) => {
        const letters = Alphabet.letters.map( letter => letter.value());
        const validity = validateRule(letters);
        
        if(!validity) {
            Alert.show(State.ERRORS.finish());
        }

        return validity;
    }

    const validateOnLoad = ( $modal ) => {
        let rule = null;

        try {
            rule = JSON.parse($modal.input.val());
        } catch( err ) {
            return false;
        }

        const keys = Object.keys(rule).map( key => key.toUpperCase());
        const values = Object.keys(rule).map( key => rule[key].toUpperCase());

        const validKeys = validateRule(keys);

        if(!validKeys) {
            return validKeys;
        }


        const validVals = validateRule(values);

        if(!validVals) {
            return validVals;
        }

        const lateRule = [];
        const letters = State.alphabet.upper;
        
        Object.keys(rule).forEach( key => {
            const k = key.toUpperCase();
            const v = rule[key].toUpperCase();

            lateRule[letters.indexOf(k)] = v;
        })


        return lateRule;

    }


    return { BUILD, validateOnFinish }

})(
    CypherMenu.Utils,
    CypherMenu.Alphabet,
    CypherMenu.Alert,
    REACTOR,
    STATE
);