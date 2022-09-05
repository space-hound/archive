import { DEF_OPT } from './../state/state.js';
import GAME from './../thegame/thegame';

const inputs = {
    menu: {
        sel: "#menu-container",
        obj: null
    },
    nickname: {
        sel: ".opt-nickname",
        obj: null
    },
    difficulty: {
        sel: ".opt-difficulty",
        obj: null
    },
    interval: {
        sel: ".opt-interval",
        obj: null
    },
    start: {
        sel: ".opt-startgame",
        obj: null
    }
}

const evts = {
    onCheckNumbers(evt) {
        let val = inputs.interval.obj.value();

        if(val[0] === "" || val[1] === "") {
            return;
        }

        if(Math.abs(val[1] - val[0]) < 10) {
            if(evt.target.id === "opt-interval-min") {
                inputs.interval.obj.min.clear();
            } else {
                inputs.interval.obj.max.clear();
            }
        }
    },
    onStartGame(evt) {
        evt.preventDefault();

        hideMenu();

        GAME.start(
            inputs.interval.obj.value()[0],
            inputs.interval.obj.value()[1],
            inputs.difficulty.obj.selectedValue()
        );
    }
}

const buildMenu = () => {

    const menu = document.querySelector(inputs.menu.sel);
    inputs.menu.obj = menu;

    const nickname = document.querySelector(inputs.nickname.sel);
    inputs.nickname.obj = Blana.BlanaText(nickname);
    inputs.nickname.obj.value(DEF_OPT.nickname);

    const difficulty = document.querySelector(inputs.difficulty.sel);
    inputs.difficulty.obj = Blana.BlanaSelect(difficulty);
    inputs.difficulty.obj.selected(DEF_OPT.difficulty);

    const interval = document.querySelector(inputs.interval.sel);
    inputs.interval.obj = Blana.BlanaInterval(interval, DEF_OPT.interval.options);
    inputs.interval.obj.value(DEF_OPT.interval.value);
    inputs.interval.obj.min.addEvt("focusout", evts.onCheckNumbers);
    inputs.interval.obj.max.addEvt("focusout", evts.onCheckNumbers);

    const startgame = document.querySelector(inputs.start.sel);
    inputs.start.obj = startgame.querySelector("input[type=submit]");
    inputs.start.obj.addEventListener("click", evts.onStartGame);
}

const hideMenu = () => {
    inputs.menu.obj.classList.add("game-started");
    setTimeout(function() {
        inputs.menu.obj.classList.add("dnone");
    }, 750);

}


export default buildMenu;