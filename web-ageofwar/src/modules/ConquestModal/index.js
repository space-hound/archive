import "./style.scss";
import * as template from "./template";

import DiceGroup from "modules/DiceGroup";

const selectors = {
    el: "#conquest",
    image: "#conquest .conquest-wrapper .conquest-header .conquest-header__img img",
    content: "#conquest .conquest-wrapper .conquest-content",
    player: ".conquest-player",
    button: "button",
    dices: "#conquest .conquest-wrapper .conquest-content .conquest-dices",
}

const ConquestModal = {

    diceGroups: [],
    diceValues: [],
    players: [],
    winners: [],

    castle: null,

    _diceCheck: 0,
    diceCheck( ) {
        this._diceCheck++;

        if(this._diceCheck === this.players.length) {
            return true;
        }

        return false;
    },

    Init( diceModel ) {

        this.diceModel = diceModel;

        $("#app").append(template.modalTemplate());

        const that = this;

        $(selectors.content).on("click", selectors.button, function( event ) {
            const type = $(this).data("type");

            if(type === "roll") {
                that.conquestOnRoll();
            }

            if(type === "next") {
                that.conquestOnNext();
            }


            if(type === "end") {
                that.conquestOnFinish();
            }

        });
    },

    startConquest( players, castle ) {

        this.castle = castle;
        this.players = players;
        this.diceGroups = [];
        this.diceValues = [];
        this._diceCheck = 0;
        this.winners = [];

        $(selectors.image).attr("src", castle.img);

        $(selectors.content).empty();

        $(selectors.content).append(template.conquestTemplate(this.players));

        const dicesDom = $(selectors.dices);

        const that = this;

        dicesDom.each( function( ) {
            that.diceGroups.push( new DiceGroup($(this), that.diceModel) );
        });

        $(selectors.el).removeClass("d-none");

    },

    conquestOnRoll( ) {

        $(selectors.content).find(selectors.button).attr("disabled", true);
        $(selectors.content).find(selectors.button).text("Next");
        $(selectors.content).find(selectors.button).data("type", "next");

        const rollEndCallback = ( values ) => {

            if(this.diceCheck()) {

                $(selectors.content).find(selectors.button).attr("disabled", false);

            }
        }

        this.diceGroups.forEach( diceGroup => {
            diceGroup.endRollCallback(rollEndCallback);
        });

        this.diceGroups.forEach( diceGroup => {
            this.diceValues.push(diceGroup.roll());
        });

    },

    conquestOnNext( ) {

        this.checkWinner();

        if(this.winners.length > 1) {

            this.startConquest(this.winners, this.castle);

        } else {

            $(selectors.content).empty();

            $(selectors.content).append(template.conquestFinishTemplate( this.winners[0], this.castle ));

        }

    },

    conquestOnFinish( ) {

        $(selectors.content).empty();
        $(selectors.el).addClass("d-none");

        if(this.onFinishCallback) {
            this.onFinishCallback( this.winners[0], this.castle );
        }

    },

    registerFinishCallback( fn ) {
        this.onFinishCallback = fn;
    },

    checkWinner( ) {
        const dices = [];

        this.diceValues.forEach( diceGroup => {
            
            let final = 0;

            diceGroup.forEach( dice => {
                if(dice.type === "sword") {
                    final += dice.value;
                }
            });

            dices.push(final);
        });

        let max = Math.max(...dices)

        dices.forEach( ( el, index ) => {

            if(el === max) {
                this.winners.push(this.players[index]);
            }

        });     
    }
}

export default ConquestModal;