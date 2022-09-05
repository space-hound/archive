import "./style.scss";
import * as template from "./template";

import DiceGroup from "modules/DiceGroup";

const selectors = {
    el: "#duel",
    header: "#duel .duel-wrapper .duel-header",
    content: "#duel .duel-wrapper .duel-content",
    player: ".duel-pick .duel-player",
    button: "button",
    dices: "#duel .duel-wrapper .duel-content .duel-rolling .duel-dices",
}

const DuelModal = {

    duelStarter: null,
    duelOpponent: null,
    otherPlayers: null,

    diceModel: null,

    diceOne: null,
    diceOneValues: null,

    diceTwo: null,
    diceTwoValues: null,

    diceCheck: 0,

    winner: undefined,
    loser: undefined,

    Init( diceModel ) {
        this.diceModel = diceModel;

        $("#app").append(template.modalTemplate());

        const that = this;

        $(selectors.content).on("click", selectors.player, function( event ) {

            $(selectors.content).find(selectors.player).each( function( ){
                $(this).removeClass("selected");
            });
            
            $(this).addClass("selected");

            const index = parseInt($(this).data("index"));
            that.duelOpponent = that.otherPlayers[index];

        });

        $(selectors.content).on("click", selectors.button, function( event ) {
            const type = $(this).data("type");

            if(type === "pick") {

                if(that.duelOpponent === null) {
                    return;
                }
                
                that.duelOnPick();
            }

            if(type === "roll") {
                that.duelOnRoll();
            }

            if(type === "next") {
                that.duelOnNext();
            }

            if(type === "end") {
                that.duelOnFinish();
            }

        });


    },

    duelStart( starter, players ) {

        $(selectors.header).text(template.titles.pick);

        this.duelStarter = starter;

        this.otherPlayers = players.filter( player => {
            return this.duelStarter !== player;
        });

        $(selectors.content).empty();

        $(selectors.content).append(template.pickTemplate(this.otherPlayers));

        $(selectors.el).removeClass("d-none");

    },

    duelOnPick( ) {

        $(selectors.header).text(template.titles.roll);

        $(selectors.content).empty();

        $(selectors.content).append(template.duelTemplate(this.duelStarter, this.duelOpponent));

        const dicesDom = $(selectors.dices);

        this.diceOne = new DiceGroup($(dicesDom[0]), this.diceModel);
        this.diceTwo = new DiceGroup($(dicesDom[1]), this.diceModel);

    },

    duelOnRoll( ) {

        $(selectors.content).find(selectors.button).attr("disabled", true);
        $(selectors.content).find(selectors.button).text("Next");
        $(selectors.content).find(selectors.button).data("type", "next");

        const rollEndCallback = ( values ) => {
            this.diceCheck++;

            if(this.diceCheck >= 2) {

                $(selectors.content).find(selectors.button).attr("disabled", false);

            }
        }

        this.diceOne.endRollCallback(rollEndCallback);
        this.diceTwo.endRollCallback(rollEndCallback);

        this.diceOneValues = this.diceOne.roll();
        this.diceTwoValues = this.diceTwo.roll();

    },

    checkWinner( ) {
        let starterScore = 0, opponentScore = 0;

        this.diceOneValues.forEach( dice => {

            if(dice.type === "sword") {
                starterScore += dice.value;
            }

        });

        this.diceTwoValues.forEach( dice => {

            if(dice.type === "sword") {
                opponentScore += dice.value;
            }
            
        });

        if(starterScore > opponentScore) {
            
            this.winner = this.duelStarter;
            this.looser = this.duelOpponent;

        } else if (starterScore < opponentScore) {

            this.looser = this.duelStarter;
            this.winner = this.duelOpponent;

        } else {

            this.winner = undefined;
            this.looser = undefined;
            
        }
    },

    duelOnNext( ) {

        $(selectors.header).text(template.titles.win);

        this.checkWinner();

        $(selectors.content).empty();
        $(selectors.content).append(template.winnerTemplate( this.winner ));

    },

    duelOnFinish( ) {

        $(selectors.content).empty();
        $(selectors.el).addClass("d-none");

        if(this.onFinishCallback) {
            this.onFinishCallback( this.looser );
        }

    },

    registerFinishCallback( fn ) {
        this.onFinishCallback = fn;
    }

}

export default DuelModal;