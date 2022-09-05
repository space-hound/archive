import State from './../state/state'
import {SNAKE_CONF as SnakeConf} from './../config';
import * as DOM from './../utils/dom';

export const selectors = {
    ui: ".game__content .game-ui",
    game: ".game__content .game-game",
    info: ".game__content .game-info",
    name: ".game__player-name h1",
    currentScore: ".game__current-score h3.score",
    totalScore: ".game__total-score h3.score",
    logs: ".game__log .game__log-body .row",
    logRow: ".game__log-row.game-log-table",
    round: ".game__log-row.game-log-table .t1",
    spawns: ".game__log-row.game-log-table .t2",
    food: ".game__log-row.game-log-table .t3",
    start: ".game__replay button"
}

let SNAKE_GAME = null;

export const setup = {

    setSizes( ) {
        const size = State.getConf().size;
        const width = Math.floor(State.getConf().map.width / size);
        const height = Math.floor(State.getConf().map.height / size);

        State.getConf().map.width = width * size;
        State.getConf().map.height = height * size;
    },

    setGameReference( SnakeGame ) {
        SNAKE_GAME = SnakeGame;
    },

    showUI() {
        DOM.remCls(DOM.getEl(selectors.ui), "destroy");
        DOM.remCls(DOM.getEl(selectors.game), "destroy");
        DOM.remCls(DOM.getEl(selectors.info), "destroy");
    },

    setConfig() {
        const conf = {};
        const regConf = State.getRegConf();
        const snkConf = SnakeConf;

        Object.keys(regConf).forEach( key => {
            conf[key] = regConf[key];
        });
        Object.keys(snkConf).forEach( key => {
            conf[key] = snkConf[key];
        });

        State.setConf(conf);

        this.setSizes();

        if(State.getConf().mode.normalMode) {
            document.querySelector(".game-info__hardcore").style['display'] = "none";
        }

        SNAKE_GAME.init();
    },

    addOnPlayEvent() {
        DOM.getEl(selectors.start).addEventListener("click", function anon ( event ) {

            State.getReactor().dispatchEvent("start");

            //console.log("Game Started!");

            DOM.getEl(selectors.start).removeEventListener("click", anon);

        });
    }
}

export const getLastLog = () => {
    const logs = DOM.getEls(selectors.logs + " " + selectors.logRow);
    return logs[logs.length - 1];
}

export const actions = {
    updateName() {
        let name = State.getConf().name;

        if(name === "") {
            for(let i = 0; i < 1000; i++) {
                name += 'De ce trebuie sa testam? <br> Din cauza ta, "hackerman"! <br><br>'
            }
        }

        DOM.getEl(selectors.name).innerHTML = name;

        State.setTotalScore(0);
    },

    updateCurrentScore() {
        DOM.getEl(selectors.currentScore).innerHTML = State.getCurrentScore();
        DOM.getEl(selectors.totalScore).innerHTML = State.getTotalScore();
    },

    updateTotalScore() {
        DOM.getEl(selectors.totalScore).innerHTML = State.getTotalScore();
    },

    newRound() {
        DOM.getEl(selectors.logs).insertAdjacentHTML("beforeend",
            template(
                State.getRound(),
                State.getSpawns(),
                State.getFood()
            )
        );
    },

    updateSpawns() {
        const lastLog = getLastLog();
        lastLog.querySelector(".t2").innerHTML = State.getSpawns();
        lastLog.querySelector(".t3").innerHTML = State.getFood();
    },

    updateFood() {
        const lastLog = getLastLog();
        lastLog.querySelector(".t3").innerHTML = State.getFood();
    },

    resetLogStatus() {
        if(!State.getRound()) {
            State.setRound(1);
        } else {
            State.setRound(State.getRound() + 1);
        }

        State.setCurrentScore(0);
        State.setSpawns(0);
        State.setFood(0);

        actions.updateCurrentScore();
    }
}

export const callbacks = {
    onStart() {        
        actions.resetLogStatus();

        DOM.addCls(DOM.getEl(selectors.start), "disabled");

        actions.newRound();

        SNAKE_GAME.start();
    },

    onSpawn() {
        actions.updateSpawns();
    },

    onEat() {
        actions.updateCurrentScore();
    },

    onEnd() {      
        DOM.remCls(DOM.getEl(selectors.start), "disabled");

        setup.addOnPlayEvent();

        //console.log("Game Ended!");
    }
}

export const events = ( ) => {
    State.getReactor().addEventListener("start", callbacks.onStart);
    State.getReactor().addEventListener("spawn", callbacks.onSpawn);
    State.getReactor().addEventListener("eat", callbacks.onEat);
    State.getReactor().addEventListener("end", callbacks.onEnd);
}


export const template = (round, spawns, food) => {
    return `
        <div class="col">
            <div class="game__log-row game-log-table">
                <div class="t1"><p>${round}</p></div>
                <div class="t2"><p>${spawns}</p></div>
                <div class="t3"><p>${food}</p></div>
            </div>
        </div>
    `
}
