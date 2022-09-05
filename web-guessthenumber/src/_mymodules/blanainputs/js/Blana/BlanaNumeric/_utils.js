/*=====================================================================================================*/
// IMPORTS
/*=====================================================================================================*/
import { states } from "./../_utils";

/*=====================================================================================================*/
// SELECTORS
/*=====================================================================================================*/
export const selectors = {
    input: "input[type=text]",
    label: "label"
}

/*=====================================================================================================*/
// EVENTS
/*=====================================================================================================*/
export const events = {
    onWheel( event ) {
        event.preventDefault();

        if(!this.__hasFocus()) {
            return;
        }

        const sign = event.deltaY > 0 ? -1 : 1;

        this.__increment(sign);
    },

    onInput( event ) {
        this.__restrictToNumbers();
    },

    onPaste( event ) {
        event.preventDefault();

        alert(`

            //get paste data

            //if paste data is nan return

            //get selection start and end

            //check start against

            //if ( value.substring(0, start) + paste + value.substring(end, lentgh) ) is nan return

            //value = value.substring(0, start) + paste + value.substring(end, lentgh)

        `);
    }
}

/*=====================================================================================================*/
// UTILS
/*=====================================================================================================*/

export const allowedChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const defaults = {
    allowNegatives: true,
    increment: 1,
    min: -1000,
    max: 1000
}

export const setOptions = ( options ) => {
    if(options === undefined) {
        return defaults;
    }

    const newOptions = {};

    for (const key in defaults) {
        if (defaults.hasOwnProperty(key)) {
            if(options[key] !== undefined) {
                newOptions[key] = options[key];
            } else {
                newOptions[key] = defaults[key];
            }
        }
    }

    return newOptions;
}