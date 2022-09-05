import _BlanaNumeric from "./../BlanaNumeric/_blana-numeric";

import { getMin, getMax, events } from "./_utils";

export default class _BlanaInterval {
    constructor(element, options = {}) {
        this.element = element;

        this.min = new _BlanaNumeric(getMin(this.element), options.min);
        this.max = new _BlanaNumeric(getMax(this.element), options.max);
    }

    Build() {
        this.min.Build();
        this.onFocusOutMin = events.onFocusOutMin.bind(this);
        this.min.input.addEventListener("focusout", this.onFocusOutMin);

        this.max.Build();
        this.onFocusOutMax = events.onFocusOutMax.bind(this);
        this.max.input.addEventListener("focusout", this.onFocusOutMax);
    }

    Destroy() {
        this.min.Destroy();
        this.min.input.removeEventListener("focusout", this.onFocusOutMin);

        this.max.Destroy();
        this.max.input.removeEventListener("focusout", this.onFocusOutMax);
    }

    /*=============================================================================================*/
    // "PRIVATES"
    /*=============================================================================================*/


    /*=============================================================================================*/
    // "PUBLICS"
    /*=============================================================================================*/

    value(value) {
        if (value !== undefined) {
            if (Array.isArray(value)) {
                if (!isNaN(value[0]) && !isNaN(value[1])) {
                    if (value[0] < value[1]) {
                        this.min.value(value[0]);
                        this.max.value(value[1]);

                        return;
                    }

                    throw new Error("Not valid interval of numbers !");
                }

                throw new Error("Not array of numbers !");
            }

            throw new Error("Not array !");
        }

        return [this.min.value(), this.max.value()];
    }

}