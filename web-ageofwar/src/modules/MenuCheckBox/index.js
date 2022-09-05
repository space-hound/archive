import { DEFAULT_OPTIONS, SELECTORS, CLASSES, TEMPLATE, EVENTS } from "./utils";

import "./aow-checkbox.css";

export default class AowCheckbox {
    constructor( $element, options = {}) {

        options = $.extend(DEFAULT_OPTIONS, options);

        this.$element = $element;

        this.$element.addClass(CLASSES.container);

        this.$element.html(TEMPLATE(options.text));

        /*
            $.each(SELECTORS, (key, value) => {
                this[key] = this.$element.find(value);
            });
        */

        this.value( options.checked );

        this.addEvents();
    }

    addEvents( ) {
        this.onClick = $.proxy(EVENTS.onClick, this);
        this.$element.on("click", this.onClick);
    }

    value( val ) {
        if(val !== undefined) {
            this.checked = Boolean(val);

            if(this.checked) {
                this.$element.addClass(CLASSES.checked);
            } else {
                this.$element.removeClass(CLASSES.checked);
            }
        }
        
        return this.checked;
    }
}