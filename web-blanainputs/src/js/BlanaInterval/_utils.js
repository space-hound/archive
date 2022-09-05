/*=====================================================================================================*/
// IMPORTS
/*=====================================================================================================*/
import { states } from "./../_utils";

/*=====================================================================================================*/
// SELECTORS
/*=====================================================================================================*/
export const selectors = {
    blanaNumeric: ".blana-numeric"
}

/*=====================================================================================================*/
// EVENTS
/*=====================================================================================================*/
export const events = {
    onFocusOutMin( event ) {
        const min = this.min.value();
        const max = this.max.value();

        if(isNaN(min) || isNaN(max)) {
            this.min.clear();
            this.max.clear();

            return;
        }

        if(max !== "") {
            if(parseInt(min) > parseInt(max)) {
                this.max.clear();
            }
        }
    },

    onFocusOutMax( event ) {
        const min = this.min.value();
        const max = this.max.value();

        if(isNaN(min) || isNaN(max)) {
            this.min.clear();
            this.max.clear();

            return;
        }

        if(min !== "") {
            if(parseInt(max) < parseInt(min)) {
                this.min.clear();
            }
        }
    }
}

/*=====================================================================================================*/
// UTILS
/*=====================================================================================================*/
export const getMin = ( element ) => {
    return element.querySelectorAll(selectors.blanaNumeric)[0];
}

export const getMax = ( element ) => {
    return element.querySelectorAll(selectors.blanaNumeric)[1];
}