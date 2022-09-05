
const selectors = {
    el: "#current-player",
    name: "#current-player .player__info .player__name",
    score: "#current-player .player__info .player__score span",
    color: "#current-player .icon-inner",
    icon: "#current-player .icon-inner i",
    trun: "#current-player .player__turn",

    globalTurn: "#turn-tracker span",
}

const CurrentPlayer = {

    Init( ) {

    },

    updateInfo( player ) {
        $(selectors.name).text(player.name);
        $(selectors.score).text(player.score);
        $(selectors.icon).removeClass().addClass(player.icon);
        $(selectors.color).css("background-color", player.color);

        if (player.stayTurns >= 1) {

            const wait = player.stayTurns === 1 ? "this turn" : player.stayTurns + " turns";
            
            $(selectors.trun).find("span").text(wait);
            $(selectors.trun).css("visibility", "visible");

        } else {
            $(selectors.trun).css("visibility", "hidden");
        }
    },

    updateScore( player ) {
        $(selectors.score).text(player.score);
    },

    updateTurn( turn ) {
        $(selectors.globalTurn).text(turn);
    }
    
}

export default CurrentPlayer;