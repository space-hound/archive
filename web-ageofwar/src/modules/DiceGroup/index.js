import SingleDice from "./../SingleDice";

export default class DiceGroup {

    constructor( $element, options ) {

        this.options = options;

        this.$element = $element;

        const _dices = this.$element.find(".aow-dice__holder");

        this.dices = [];

        const that = this;

        _dices.each( function( index ) {
            that.dices.push(new SingleDice( $(this), that.options.dices[index] ));
        });

        this.rolling = false;

    }

    roll( ) {

        if(this.rolling) return null;

        this.rolling = true;

        const values = [];

        this.dices.forEach( (dice, index) => {
            if(index === this.dices.length - 1) {
                values.push(dice.roll(this.endRoll.bind(this, values)));
            } else {
                values.push(dice.roll());
            }
        });

        return values;
    }

    endRollCallback( fn ) {
        this.callback = fn;
    }

    endRoll( values ) {

        if(this.callback) {
            this.callback( values );
        }

        this.rolling = false;
    }
}