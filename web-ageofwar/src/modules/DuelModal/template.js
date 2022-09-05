
export const modalTemplate = ( ) => {
    return `
        <div id="duel" class="d-none">
            <div class="duel-cover">
                <div class="duel-mask"></div>
            </div>
            <div class="duel-wrapper">
                <div class="duel-header">
                    Pick your opponent!
                </div>

                <div class="duel-hr"></div>

                <div class="duel-content"></div>
            </div>
        </div>
    `;
}

export const playerTemplate = ( player, index ) => {
    return `
        <div class="duel-player" data-index="${index}">
            <div class="player-banner">
                <div class="player-color">
                    <i class="${player.icon}" style="color: ${player.color};"></i>
                </div>
            </div>
            <div class="player-name">${player.name}</div>
        </div>
    `;
}

export const playersTemplate = ( players ) => {
    
    const template = [];

    players.forEach( (player, index) => {
        template.push(playerTemplate(player, index));
    });

    return template.join("");
}

export const pickTemplate = ( players ) => {
    return `
        <div class="duel-pick">

            <div class="duel-pick__player">
                ${playersTemplate(players)}
            </div>

            <div class="duel-hr"></div>

            <button class="btn btn-warning" data-type="pick"> Pick </button>
        </div>
    `
}


export const duelPlayer = ( player ) => {
    return `
        <div class="duel-rolling__players-player">
            <div class="duel-player">
                <div class="player-banner">
                    <div class="player-color">
                        <i class="${player.icon}" style="color: ${player.color};"></i>
                    </div>
                </div>
                <div class="player-name">${player.name}</div>
            </div>

            <div class="duel-dices">
                <div class="aow-dice__holder"></div>
                <div class="aow-dice__holder"></div>
                <div class="aow-dice__holder"></div>
                <div class="aow-dice__holder"></div>
                <div class="aow-dice__holder"></div>
                <div class="aow-dice__holder"></div>
            </div>
        </div>
    `
}

export const duelTemplate = ( starter, opponent ) => {
    return `
        <div class="duel-rolling">

            <div class="duel-rolling__players">
                ${duelPlayer(starter)} 
                ${duelPlayer(opponent)}
            </div>

            <div class="duel-hr"></div>

            <button class="btn btn-success" data-type="roll"> Roll </button>
        </div>
    `;
}

export const winnerTemplate = ( player ) => {

    const winner = player === undefined ? titles.tie : playerTemplate(player, 0);

    return `
        <div class="duel-winner">
            <div class="winner">${winner}</div>
            <div class="duel-hr"></div>
            <button class="btn btn-info" data-type="end"> Close </button>
        </div>
    `;
}

export const titles = {
    pick: "Pick your opponent!",
    roll: "Who will win?",
    win: "And the winner is:",
    tie: "<span>Everyone! (No one)</span>"
}
