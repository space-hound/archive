import state from './gamestate';
import {gameOn, gameEnd } from "./template";

const items = {
    game: {
        sel: "#game-container",
        obj: null
    },
    input: {
        sel: ".guess-input .game-input",
        obj: null
    },
    try: {
        sel: ".guess-submit input",
        obj: null
    },
    replay: {
        sel: ".guess-replay input",
        obj: null
    },
    reset: {
        sel: ".guess-reset input",
        obj: null
    },
    results: {
        sel: ".result-zone",
        onj: null
    }
}

const events = {
    onTry() {
        if(state.stoped) {
            items.input.obj.clear();
            return;
        }

        const num = items.input.obj.value();

        if(isNaN(num)) {
            items.input.obj.clear();
            return;
        }

        if(state.history().includes(num)) {
            if (!confirm("Are you a moron?")) {
                return;
            }
        }
        
        state.currentNumber(num);
        state.setAttempts();
        state.history(num);

        actions.checkNumber();
    },

    onReplay() {
        actions.replay();
    },

    onReset() {
        alert("Just hit F5 and leave me alone!")
    }
}

const actions = {
    start(min, max, attempts) {
        state.min(parseInt(min));
        state.max(parseInt(max));
        state.availableAttempts(parseInt(attempts));
        actions.doNumber();
        actions.fillInitialItems();
    },
    doNumber(){
        const min = state.min();
        const max = state.max();

        
    
        const number = Math.floor(Math.random() * (max + 1)) + min;
    
        state.hiddenNumber(number);
    },
    checkNumber(){
        const tryNumber = state.currentNumber();
        const hiddenNumber = state.hiddenNumber();
    
        if(tryNumber < hiddenNumber) {
            state.addjective("low");
            actions.continue();
            actions.checkAttempts();
        } else if (tryNumber > hiddenNumber) {
            state.addjective("high");
            actions.continue();
            actions.checkAttempts();
        } else {
            state.addjective("good");
            actions.finished("win");
        }
    },
    checkAttempts() {
        const available = state.availableAttempts();

        if(available === "inf") {
            return;
        }
        
        const done = state.getAttempts();

        if(done === available) {
            actions.finished("lost");
        }
    },
    fillInitialItems() {
        items.game.obj = document.querySelector(items.game.sel);
        items.game.obj.classList.add("game-started");
        
        const input = document.querySelector(items.input.sel);
        items.input.obj = Blana.BlanaNumeric(input, {
            allowNegatives: true,
            increment: 1,
            min: state.min(),
            max: state.max()
        });

        items.try.obj = document.querySelector(items.try.sel);
        items.try.obj.addEventListener("click", events.onTry);
        items.results.obj = document.querySelector(items.results.sel);
    },
    fillLastItems() {
        items.replay.obj = document.querySelector(items.replay.sel);
        items.replay.obj.addEventListener("click", events.onReplay);
        items.reset.obj = document.querySelector(items.reset.sel);
        items.reset.obj.addEventListener("click", events.onReset);
    },
    destroyLastItems() {
        items.replay.obj.removeEventListener("click", events.onReplay);
        items.reset.obj.removeEventListener("click", events.onReset);
    },
    flushResults() {
        const results = items.results.obj;

        while (results.hasChildNodes()) {
            results.removeChild(results.lastChild);
        }        
    },
    finished(how) {
        items.results.obj.insertAdjacentHTML("afterbegin", gameEnd(
            state[how].type, state[how].announce
        ));
        actions.fillLastItems();
        state.stoped = true;
    },
    continue() {
        items.results.obj.insertAdjacentHTML("afterbegin", gameOn(
            state.getAttempts(), state.currentNumber(), state.addjective()
        ));
        items.input.obj.clear();
    },
    reset() {

    },
    replay() {
        actions.destroyLastItems();
        actions.flushResults();
        state.flush();
        actions.doNumber();
        state.stoped = false;
    }
    
}

export default actions;