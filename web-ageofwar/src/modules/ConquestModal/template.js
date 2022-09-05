
export const modalTemplate = () => {
    return `
        <div id="conquest" class="d-none">
            <div class="conquest-cover">
                <div class="conquest-mask"></div>
            </div>
            <div class="conquest-wrapper">
                <div class="conquest-header">
                    <div class="conquest-header__img">
                        <img src="./../assets/dices/duel.png">
                    </div>
                    <div class="conquest-header__text"> Who will win it?</div>
                </div>

                <div class="conquest-hr"></div>

                <div class="conquest-content"></div>
            </div>
        </div>
    `;
}

export const conquestPlayer = (player) => {
    return `
        <div class="conquest-rolling__players-player">
            <div class="conquest-player">
                <div class="player-banner">
                    <div class="player-color">
                        <i class="${player.icon}" style="color: ${player.color};"></i>
                    </div>
                </div>
                <div class="player-name">${player.name}</div>
            </div>

            <div class="conquest-dices">
                <div class="aow-dice__holder"></div>
                <div class="aow-dice__holder"></div>
                <div class="aow-dice__holder"></div>
                <div class="aow-dice__holder"></div>
                <div class="aow-dice__holder"></div>
                <div class="aow-dice__holder"></div>
            </div>
        </div>
    `;
}

export const conquestTemplate = (players) => {

    const playerTemplate = players.map(player => {
        return conquestPlayer(player);
    }).join("");

    return `
        <div class="conquest-rolling">

            <div class="conquest-rolling__players">
                ${playerTemplate} 
            </div>

            <div class="conquest-hr"></div>

            <button class="btn btn-success" data-type="roll"> Roll </button>
        </div>
    `;
}

export const conquestFinishTemplate = (player, castle) => {
    return `
        <div class="conquest-winner">
            <div class="winner">
                <div class="conquest-player">
                    <div class="player-banner">
                        <div class="player-color">
                            <i class="${player.icon}" style="color: ${player.color};"></i>
                        </div>
                    </div>
                    <div class="player-name">${player.name}</div>
                </div>

                <div class="conquest-score">Awarded ${castle.score} points!</div>
            </div>
            <div class="conquest-hr"></div>
            <button class="btn btn-info" data-type="end"> Close </button>
        </div>
    `;
}