export const gameOn = (attempt, number, adjective) => {
    return `
        <div class="result-row game-on">
            <div class="row-content">
                <div class="guess-time">
                    Guess #<span>${attempt}</span>:
                </div>
                <div class="guess-number">
                ${number}
                </div>
                <div class="guess-hint guess-${adjective}">
                    Your guess is too ${adjective}!
                </div>
            </div>
        </div>
    `;
}

export const gameEnd = (type, announce) => {
    return `
        <div class="result-row end-game">
            <div class="row-content">
                <div class="guess-end ${type}">
                   ${announce}
                </div>
                <div class="guess-replay blana blana-submit blana-night blana-green opt-replay">
                    <input type="submit" value="Play One More!">
                </div>
                <div class="guess-reset blana blana-submit blana-night blana-red opt-reset">
                    <input type="submit" value="Reset Everything!">
                </div>
            </div>
        </div>
    `;
}