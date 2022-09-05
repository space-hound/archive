import { TEMPLATE, SELECTORS, EVENTS } from './utils';

export default class Enchantment {
    constructor (parent, name, id, maxValue) {
        this.parent = parent;
        this.name = name;
        this.id = id;
        this.maxValue = maxValue;
        this.value = maxValue;

        this.parent.insertAdjacentHTML('beforeend', TEMPLATE(this.name, this.id, this.value));
        this.element = this.parent.querySelectorAll(SELECTORS.enchantment)[this.parent.children.length - 1];
        
        this.valueElement = this.element.querySelector(SELECTORS.value);
        this.validElement = this.element.querySelector(SELECTORS.valid);

        this.addEvents();
    }

    addEvents() {
        this.__onClickValid = EVENTS.onClickValid.bind(this);
        this.validElement.addEventListener("click", this.__onClickValid);
        this.__onFocusOutValue = EVENTS.onFocusOutValue.bind(this);
        this.valueElement.addEventListener("focusout", this.__onFocusOutValue);
    }

    destroy() {
        this.validElement.removeEventListener("click", this.__onClickValid);
        this.valueElement.removeEventListener("focusout", this.__onFocusOutValue);
    }
}