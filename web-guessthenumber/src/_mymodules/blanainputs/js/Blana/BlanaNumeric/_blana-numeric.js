import _BlanaText from "./../BlanaText/_blana-text";
import { setOptions, events, allowedChars } from "./_utils";


export default class _BlanaNumeric extends _BlanaText {
    constructor( element, options ) {
        super(element);

        this.options = options || setOptions(options);
    }

    Build() {
        super.Build();
        
        this.onInput = events.onInput.bind(this);
        this.input.addEventListener("input", this.onInput);
        this.onWheel = events.onWheel.bind(this);
        this.input.addEventListener("wheel", this.onWheel);
        this.onPaste = events.onPaste.bind(this);
        this.input.addEventListener("paste", this.onPaste);
    }

    Destroy() {
        super.Destroy();

        this.input.removeEventListener("input", this.onInput);
        this.input.removeEventListener("wheel", this.onWheel);
        this.input.removeEventListener("paste", this.onPaste);
    }

/*=====================================================================================================*/
// "PRIVATES"
/*=====================================================================================================*/

    __isNaN() {
        return isNaN(this.value());
    }

    __getLastChar() {
        return this.value()[this.length() - 1];
    }

    __trimLastChar() {
        this.value(
            this.value().slice(0, this.length() - 1)
        );
    }

    __isInRange(value) {
        const lower = value >= this.options.min;
        const upper = value <= this.options.max;

        return lower && upper;
    }

    __restrictToNumbers() {
        if(this.value() === "") {
            return;
        }

        if(this.options.allowNegatives) {
            if(this.value() === "-") {
                return;
            }
        }

        if(!allowedChars.includes(this.__getLastChar())) {
            this.__trimLastChar();
        }

        if(!this.__isInRange(this.value())) {
            this.__trimLastChar();
        }
    }

    __increment(sign) {
        if(this.__isNaN()) {return;}

        const value = new Number(this.value());
        const newValue = value + (sign * this.options.increment);

        if(!this.__isInRange(newValue)) {return;}

        this.value(newValue);
    }

/*=====================================================================================================*/
// "PUBLICS"
/*=====================================================================================================*/

}