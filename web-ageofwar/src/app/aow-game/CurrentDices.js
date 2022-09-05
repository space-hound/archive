import DiceGroup from "modules/DiceGroup";

import GameEvents from "./_Events";
import { CURRENT_DICES } from "./_Dices";

const selectors = {
    el: "#dices",
    button: "#dices button",
}

const CurrentDices = {

    Init( ) {

        this.$button = $(selectors.button);

        this.dices = new DiceGroup($(selectors.el), CURRENT_DICES());

        this.$button.on("click", ( event ) => {

            const type = this.$button.data("type");

            if( type === "roll" ) {

                $em.emit(GameEvents.PlayerRollStarted, {});
            }

            if( type === "end" ) {

                $em.emit(GameEvents.PlayerTurnEnd, {});
            }

        });

        this.dices.endRollCallback( ( diceValues ) => {

            $em.emit(GameEvents.PlayerRollEnded, { diceValues });

        });


    },

    prepareForRolling( ) {
        this.makeRollButton();
        this.enableButton();
    },

    beginRolling( ) {
        this.disableButton();
        this.makeEndButton();
    },

    prepareForEnding( ) {
        this.enableButton();
    },

    makeRollButton( ) {  
        this.$button.removeClass().addClass("btn btn-outline-success");
        this.$button.data("type", "roll");
        this.$button.text("roll dices");

    },

    makeEndButton( ) {
        this.$button.removeClass().addClass("btn btn-outline-warning");
        this.$button.data("type", "end");
        this.$button.text("end turn");
    },

    disableButton( ) {
        this.$button.attr("disabled", true);
    },

    enableButton( ) {
        this.$button.attr("disabled", false);
    },
}

export default CurrentDices;