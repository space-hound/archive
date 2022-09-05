const GamePlayers = {

    Init(  players, currentPlayer ) {

        this.players = players;

        this.currentIndex = currentPlayer;

    },
    
    currentPlayer( ) {
        return this.players[this.currentIndex];
    },

    nextPlayer( ) {
        const len = this.players.length;

        this.currentIndex++;

        if(this.currentIndex >= len) {
            this.currentIndex = 0;
        }

        return this.currentPlayer();
    },

    isFreeze( ) {
        const player = this.currentPlayer();
        
        return player.stayTurns > 0;
    },

    removeFreeze( ) {
        if(this.isFreeze()) {
            const player = this.currentPlayer();

            player.stayTurns--;
        }
    },

    addFreeze( player ) {
        player.stayTurns++;
    },

    addCastle( player, castle ) {

        player.castles.push(castle.id);
        player.score = player.score + castle.score;
        
    },
}

export default GamePlayers;