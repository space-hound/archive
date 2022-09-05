
const gamestate = {
    min: null,
    max: null,
    hiddenNumber: null,
    currentNumber: null,
    addjective: null,
    availableAttempts: null,
    attempts: 0,
    history: []
}

export default {
    min(val) {
        if(typeof val !== "undefined") {
            gamestate.min = val;
        }

        return gamestate.min;
    },

    max(val) {
        if(typeof val !== "undefined") {
            gamestate.max = val;
        }

        return gamestate.max;
    },

    hiddenNumber(val) {
        if(typeof val !== "undefined") {
            gamestate.hiddenNumber = val;
        }

        return gamestate.hiddenNumber;
    },

    currentNumber(val) {
        if(typeof val !== "undefined") {
            gamestate.currentNumber = val;
        }

        return gamestate.currentNumber;
    },

    addjective(val) {
        if(typeof val !== "undefined") {
            gamestate.addjective = val;
        }

        return gamestate.addjective;
    },

    availableAttempts(val) {
        if(typeof val !== "undefined") {
            gamestate.availableAttempts = val;
        }

        return gamestate.availableAttempts;
    },

    getAttempts() {
        return gamestate.attempts;
    },

    setAttempts() {
        gamestate.attempts++;
        return gamestate.attempts;
    },

    history(val) {
        if(typeof val !== "undefined") {
            gamestate.history.push(val);
        }

        return gamestate.history;
    },

    flush() {
        gamestate.hiddenNumber = null;
        gamestate.currentNumber = null;
        gamestate.attempts = 0;
        gamestate.history = [];
    },
    
    win: {
        type: "won",
        announce: "You won!"
    },

    lost: {
        type: "lost",
        announce: "WASTED!"
    },

    stoped: false
}