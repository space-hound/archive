import ColorPicker from './colorpicker';
import {REGISTER_CONF as REGCONF} from './../config';
import {getEl, addCls, size} from './../utils/dom';
import State from './../state/state';

export const selectors = {
    register: '.register__content',
    name: '.register__name input',
    headColor: '.register__head-color .colorpicker',
    bodyColor: '.register__body-color .colorpicker',
    foodColor: '.register__food-color .colorpicker',
    gameMode: '.register__game-mode',
    normalMode: '.game-mode__normal input[type=radio]',
    hardcoreMode: '.game-mode__hardcore input[type=radio]',
    finish: '.register__finish button',
    canvas: '.game__content .game-game'
}

export const elements = () => {
    return {
        register: getEl(selectors.register),
        name: getEl(selectors.name),
        headColor: getEl(selectors.headColor),
        bodyColor: getEl(selectors.bodyColor),
        gameMode: getEl(selectors.gameMode),
        normalMode: getEl(selectors.normalMode),
        hardcoreMode: getEl(selectors.hardcoreMode),
        finish: getEl(selectors.finish),
        canvas: getEl(selectors.canvas)
    }
}

export const colorPickers = {
    head: null,
    body: null,
    food: null,

    build() {
        this.head = new ColorPicker({
            selector: selectors.headColor,
            label: REGCONF.head.label,
            colors: REGCONF.head.colors
        }),
        this.body = new ColorPicker({
            selector: selectors.bodyColor,
            label: REGCONF.body.label,
            colors: REGCONF.body.colors
        }),
        this.food = new ColorPicker({
            selector: selectors.foodColor,
            label: REGCONF.food.label,
            colors: REGCONF.food.colors
        })
    },

    destroy() {
        this.head.destroy();
        this.head = null;

        this.body.destroy();
        this.body = null;

        this.food.destroy();
        this.food = null;

    },

    values() {
        return {
            head: this.head.value(),
            body: this.body.value(),
            food: this.food.value()
        }
    }
}

export const finish = {
    callback: null,

    build(callback) {
        this.callback = callback;
        elements().finish.addEventListener("click", this.callback);
    },

    destroy() {
        elements().finish.removeEventListener("click", this.callback);
    }
}

export const value = () => {
    const val = {
        name: elements().name.value,
        colors: colorPickers.values(),
        mode: {
            normalMode: elements().normalMode.checked,
            hardcoreMode: elements().hardcoreMode.checked
        },
        map: size(elements().canvas, 30, 30),

    }

    State.setRegConf(val);

    return val;
}

export const destroyAnimate = () => {
    addCls(elements().register, 'destroy');
}