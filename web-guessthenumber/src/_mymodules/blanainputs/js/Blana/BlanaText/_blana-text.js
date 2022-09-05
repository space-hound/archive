import { states } from "./../_utils";
import { events, getComponent } from "./_utils";

export default class _BlanaText {
    constructor( element ) {
        this.element = element;
        this.input = getComponent(this.element, "input");
        this.label = getComponent(this.element, "label");
    }

    Build() {
        this.onFocus = events.onFocus.bind(this);
        this.input.addEventListener("focus", this.onFocus);

        this.onFocusOut = events.onFocusOut.bind(this);
        this.input.addEventListener("focusout", this.onFocusOut);

        this.evts = {};
    }

    Destroy() {
        this.input.removeEventListener("focus", this.onFocus);
        this.input.removeEventListener("focusout", this.onFocusOut);

        for (let key in this.evts) {
            if (this.evts.hasOwnProperty(key)) {
                this.evets.key.forEach( cb => {
                    this.input.removeEventListener(key, cb);
                })
            }
        }
    }

/*=====================================================================================================*/
// "PRIVATES"
/*=====================================================================================================*/

    __hasFocus() {
        return this.element.classList.contains(states.focus);
    }

    __isEmpty() {
        if(this.input.value !== "") {
            return true;
        }

        return false;
    }

    __makeValue() {
        this.element.classList.add(states.value);
    }

/*=====================================================================================================*/
// "PUBLICS"
/*=====================================================================================================*/

    length() {
        return this.input.value.length;
    }

    clear() {
        this.input.value = "";
        this.element.classList.remove(states.value);
    }

    value(value) {
        if(value !== undefined) {
            this.input.value = value;
            
            if(value !== "") {
                this.__makeValue();
            }
        }

        return this.input.value;
    }

    addEvt(type, cb) {
        if(this.evts.hasOwnProperty(type)) {
            this.evts.type.push(cb);
        } else {
            this.evts.type = [];
            this.evts.type.push(cb);
        }

        this.input.addEventListener(type, cb);
    }
}