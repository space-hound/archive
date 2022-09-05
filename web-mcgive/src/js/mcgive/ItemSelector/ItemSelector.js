import { buildComponent, SELECTORS, EVENTS } from './utils';

export default class ItemSelector {
    constructor (element) {
        this.element = element;
        buildComponent(this.element);
        this.selected = this.element.querySelector(SELECTORS.singleItem + ".active");
        this.__addEvents();
    }

    __addEvents() {
        this.onClick = EVENTS.onClick.bind(this);
        this.element.addEventListener("click", this.onClick, false);
    }

    __unSelect() {
        this.selected.classList.remove("active");
    }

    __select(element) {
        this.selected = element;
        this.selected.classList.add("active");
    }

    getSelectedType() {
        return this.selected.dataset.type;
    }

    getSelectedName() {
        return this.selected.dataset.name;
    }
}
