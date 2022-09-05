import MapBuilder from "modules/MapBuilder";

import STATES from "./_States";


const GameState = {

    Init( ) {
        this.players = GameStorage.getCurrent().players;

        this.currentPlayer = GameStorage.getCurrent().currentPlayer;
        
        this.castles = MapBuilder(GameStorage.getCurrent().map);
        
        this.turn = GameStorage.getCurrent().turn;    
        
        this.len = this.players.length;

        this.state = STATES.PLAYER_STARTED;

        this.dices = null;
    },

    setDices( value ) {
        this.dices = value;

        this.normalDices = {};

        for( let i = 1; i < this.dices.length; i++) {

            const dice = this.dices[i];

            if(!this.normalDices.hasOwnProperty(dice.type)) {

                this.normalDices[dice.type] = 0;
            }

            this.normalDices[dice.type] += this.normalDices[dice.type] + dice.value;
        }
    },

    canConquer( castle ) {

        let able = true;

        const that = this;

        Object.keys(castle.weapons).forEach( key => {
            const value = castle.weapons[key];

            if(!that.normalDices.hasOwnProperty(key)) {

                able = false;

            } else {

                if(that.normalDices[key] < value) {

                    able = false;

                }
            }
        });

        return able;
    },

    specialCastle( ) {

        const conqCastles = this.castles.filter( ( castle, index ) => {
            return castle.isConquest && !castle.isOwned;
        });

        if(conqCastles.length > 0) {
            return conqCastles[0];
        }

        return null;
    },

    playerIndex( player ) {
        return this.players.indexOf(player);
    },

    checkEnd( ) {
        const castles = this.castles.filter( castle => {
            return !castle.isOwned && !castle.isConquest;
        });

        if(castles.length > 0) {
            return false;
        }

        return true;
    }
}

export default GameState;
