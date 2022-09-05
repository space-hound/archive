const CypherMenu = {};

CypherMenu.Utils = {
    get rawTemplate ( ) {
        return $("#template__single-letter").html();
    },

    get replace ( ) {
        return "x:{letter}";
    },

    template( letter ) {
        return this.rawTemplate.split(this.replace).join(letter);
    },

    templateToDOM( letter ) {
        this.$parent.append(
            this.template(letter)
        );

        return $(this.letterToId(letter));
    },

    isLetter( letter ) {
        return /^[A-Za-z]+$/.test(letter);
    },

    isSingle( letter ) {
        return letter.length === 1;
    },

    isSingleLetter( letter ) {
        return this.isLetter(letter) && this.isSingle(letter);
    },

    letterToId( letter ) {
        return `#letter__${letter}`;
    },

    get $parent( ) {
        return $("#rule__alphabet");
    },

    get alphabet( ) {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    },

    isNumber( num ) {
        return /^[-+]?[0-9]+$/.test(num);
    },

    err( $input, state = true) {
        if(state) {
            $input.addClass("err");
        } else {
            $input.removeClass("err");
        }
    }
}