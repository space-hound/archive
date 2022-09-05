import './style.scss';

import AowSelect from "modules/MenuSelectBox";
import { PLAYER_NUMBERS, MAP_TYPES } from "./config";
import AowItemList from "modules/MenuItemsList";
import AowPlayer from "modules/MenuPlayerItem";

const AowNewGame = {
    players: [],
    numbers: null,
    type: null,
    icons: null,
    colors: null,

    init( ) {
        this.numbers = new AowSelect($(".settings__players .aow-selector"), PLAYER_NUMBERS);
        this.type = new AowSelect($(".settings__gametype .aow-selector"), MAP_TYPES);

        this.icons = new AowItemList($(".new-game__icon-selector"), "ICON_TYPE");
        this.colors = new AowItemList($(".new-game__color-selector"), "COLOR_TYPE");

        AowPlayer.SetContainer($(".players-pool"));

        for(let i = 0; i < PLAYER_NUMBERS.items[1]; i++) {
            this.players.push(new AowPlayer( i + 1 ));

            if(i < PLAYER_NUMBERS.current) {
                this.players[i].enable();
            }
        }

        this.players.forEach( player => {
            this.icons.registerTrigger(player.$icon);
            this.colors.registerTrigger(player.$color);
        });


        this.onNumbersChange = $.proxy(this.onNumbersChange, this);
        $em.on("player.numbers:change", this.onNumbersChange);

        this.onStartGame = $.proxy(this.onStartGame, this);
        $(".finish__row button").on("click", this.onStartGame);

        $("#new-game").on("click", ".aow-checkbox", ( event ) => {
            alert("AI is not implemented yet! So checking this, will have no impact on your game, and the player will still be a human player!");
        });
    },

    value( ) {
        return {
            numbers: this.numbers.selectedValue,
            map: this.type.selectedValue,
            players: this.players.filter( player => player.isEnabled() ).map( player => player.value() )
        }
    },

    onNumbersChange( event, data ) {
        const current = parseInt(data.value);

        for(let i = this.players.length - 1; i >= 0; --i) {

            if(current <= i) {
                this.players[i].disable();
            } else {
                this.players[i].enable();
            }

        }
    },
    
    onStartGame( event ) {
        event.preventDefault();

        const currentGame = this.finishPlayerData();

        GameStorage.setCurrent(currentGame);

        window.location.href = "./aow-game.html";
    },

    finishPlayerData( ) {
        const data = this.value();

        const slag = {};

        slag.map = data.map;

        slag.turn = 0;

        slag.players = [];

        slag.currentPlayer = 0;

        data.players.forEach( ( player, index ) => {
            slag.players[index] = player;

            slag.players[index].score = 0;
            slag.players[index].stayTurns = 0;
            slag.players[index].castles = [];

        });

        return slag;
    }
}

$(function () {
    AowNewGame.init();
});