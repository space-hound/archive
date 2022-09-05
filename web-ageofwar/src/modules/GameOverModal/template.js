export const playerTemplate = ( player ) => {
    return `
        <div class="game-over-player">
            <div class="player-banner">
                <div class="player-color">
                    <i class="${player.icon}" style="color: ${player.color};"></i>
                </div>
            </div>
            <div class="player-name">${player.name}</div>
            <div class="player-score">${player.score}</div>
        </div>
    `;
}

export const template = ( players ) => {
    return `
        <div id="game-over">
            <div class="game-over-cover">
                <div class="game-over-mask"></div>
            </div>
            <div class="game-over-wrapper">
                <div class="game-over-header">
                    Game is over!
                </div>
                <div class="game-over-hr"></div>
                <div class="game-over-players">
                    ${ players.map( player => playerTemplate(player) ).join("") }
                </div>
                <div class="game-over-hr"></div>

                <button class="btn btn-success" data-type="replay"> Play Again! </button>

                <button class="btn btn-danger" data-type="menu"> Main Menu </button>
                
            </div>
        </div>
    `;
}
