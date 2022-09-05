const Cypher = ( function (State) {
    const ELS = {
        get input ( ) {
            return "#input-text";
        },

        get output ( ) {
            return "#output-text";
        },

        get tocrypt ( ) {
            return "#to-crypt"
        },

        get todecrypt ( ) {
            return "#to-decrypt"
        },

        get clear ( ) {
            return "#cypher-clear"
        },

        get copy ( ) {
            return "#cypher-copy"
        }
    }


    const EVTS = {
        onInputInput( evt ) {
            const text = $(ELS.input).val();

            if($(ELS.tocrypt).is(":checked")) {
                $(ELS.output).val(crypt(text));
            } else {
                $(ELS.output).val(decrypt(text));
            }
        },

        onOutputClick( evt ) {
            copyToClipboard($(this).val());
        },

        toCryptChange( evt ) {
            if($(ELS.tocrypt).is(":checked")) {
                const text = $(ELS.input).val();
                $(ELS.output).val(
                    crypt(text)
                );
            }
        },

        toDeCryptChange( evt ) {
            if($(ELS.todecrypt).is(":checked")) {
                const text = $(ELS.input).val();
                $(ELS.output).val(
                    decrypt(text)
                );
            }
        },

        onClear( evt ) {
            $(ELS.input).val("");
            $(ELS.output).val("");
        },

        onCopyRule( evt ) {
            const rule = {};
            const keys = STATE.alphabet.upper;
            const vals = STATE.scrambled.upper;

            keys.forEach( (key, index ) => {
                rule[key] = vals[index];
            });

            const text = JSON.stringify(rule);

            copyToClipboard(text);
        }
    }


    const copyToClipboard = ( text ) => {
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }


    const crypt = ( text ) => {
        let crypted = "";
        
        for(let i = 0; i < text.length; i++) {
            const letter = text[i];

            let index = STATE.alphabet.lower.indexOf(letter);

            if(index !== -1) {

                crypted += STATE.scrambled.lower[index];

            } else {

                index = STATE.alphabet.upper.indexOf(letter);

                if(index !== -1) {

                    crypted += STATE.scrambled.upper[index];

                } else {

                    crypted += letter;

                }
            }
        }

        return crypted;
    }

    const decrypt = ( text ) => {
        let decrypted = "";
        
        for(let i = 0; i < text.length; i++) {
            const letter = text[i];

            let index = STATE.scrambled.lower.indexOf(letter);

            if(index !== -1) {

                decrypted += STATE.alphabet.lower[index];

            } else {

                index = STATE.scrambled.upper.indexOf(letter);

                if(index !== -1) {

                    decrypted += STATE.alphabet.upper[index];

                } else {
                    
                    decrypted += letter;

                }
            }
        }

        return decrypted;
    }


    const BUILD = () => {
        $(ELS.input).on("input", EVTS.onInputInput);
        $(ELS.output).on("click", EVTS.onOutputClick);
        $(ELS.tocrypt).on("change", EVTS.toCryptChange);
        $(ELS.todecrypt).on("change", EVTS.toDeCryptChange);
        $(ELS.clear).on("click", EVTS.onClear);
        $(ELS.copy).on("click", EVTS.onCopyRule);
    }

    return { BUILD };

})(STATE);