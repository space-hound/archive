import { EVENTS } from './utils';

export default class FlagHide {
    constructor(element) {
        this.unbreakFlag = element.querySelector(".mc-hide-unbreaking input[type=checkbox]");
        this.enchFlag = element.querySelector(".mc-hide-ench input[type=checkbox]");

        this.addEvents();
    }

    addEvents () {
        this.__onClickUnbreak = EVENTS.onClickUnbreak.bind(this);
        this.unbreakFlag.addEventListener('click', this.__onClickUnbreak);
        this.__onClickEnch = EVENTS.onClickEnch.bind(this);
        this.enchFlag.addEventListener('click', this.__onClickEnch);
    }
}