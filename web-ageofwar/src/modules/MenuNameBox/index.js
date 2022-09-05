import { 
    SELECTORS, CLASSES, EVENTS, TEMPLATE, NAMER, VALIDATOR 
} from "./utils";

import "./aow-namebox.css";

class AowNamebox {
    constructor($element) {

        if(!NAMER.hasNames()) {
            NAMER.defaultNames();
        }

        this.$element = $element;

        this.$element.addClass(CLASSES.container);

        this.name = NAMER.get();

        this.$element.html(TEMPLATE(this.name));

        $.each(SELECTORS, (key, value) => {
            this[`$${key}`] = this.$element.find(value);
        });

        const height = parseInt(this.$editorContainer.outerHeight());

        this.$element.css('height', (height + 30));

        this.addEvents();

    }

    addEvents( ) {
        this.onEdit = $.proxy(EVENTS.onEdit, this);
        this.$edit.on("click", this.onEdit);

        this.onClear = $.proxy(EVENTS.onClear, this);
        this.$clear.on("click", this.onClear);

        this.onRandom = $.proxy(EVENTS.onRandom, this);
        this.$random.on("click", this.onRandom);

        this.onSave = $.proxy(EVENTS.onSave, this);
        this.$save.on("click", this.onSave);

    }

    value( name ) {
        if( name !== undefined ) {

            NAMER.sendBack(this.name);

            this.name = name;
            this.$input.val(name);
            this.$display.text(name);

        }

        return this.name;
    }

    validate( ) {
        const validity = VALIDATOR.validate(this.$input.val());

        if(validity === "okay") {
            this.$error.addClass(CLASSES.hidden);
            return true;
        } else {
            this.$errorText.text(validity);
            this.$error.removeClass(CLASSES.hidden);
            return false;
        }
    }
}

AowNamebox.SetNames = ( names ) => {
    NAMER.setNames(names);
}

export default AowNamebox;