import { SELECTORS, EVENTS } from './utils';

export default class GiveConfiguration {
    constructor ( element ) {
        this.element = element;
        this.name = this.element.querySelector(SELECTORS.name);
        this.lore = this.element.querySelector(SELECTORS.lore);
        this.unbreakable = this.element.querySelector(SELECTORS.unbreakable);

        this.addEvents();
    }

    addEvents() {
        this.__onFocusOutName = EVENTS.onFoucsOutName.bind(this);
        this.name.addEventListener("focusout", this.__onFocusOutName);
        this.__onFocusOutLore = EVENTS.onFocusOutLore.bind(this);
        this.lore.addEventListener("focusout", this.__onFocusOutLore);
        this.__onClickUnbreakable = EVENTS.onClickUnbreakable.bind(this);
        this.unbreakable.addEventListener("click", this.__onClickUnbreakable);
    }
}