import { 
    SELECTORS, CLASSES, TEMPLATE, 
} from "./utils";

import './aow-playeritem.css';

import AowNamebox from "./../MenuNameBox";
import AowCheckbox from "./../MenuCheckBox";

let $CONTAINER = null;

export default class AowPlayerItem {

    constructor( number ) {
        
        $CONTAINER.append( TEMPLATE(number) );

        this.$element = $CONTAINER.children().last();

        $.each( SELECTORS, ( key, value ) => {
            this[`$${key}`] = this.$element.find(value);
        });

        this.NameBox = new AowNamebox(this.$name);
        this.CheckBox = new AowCheckbox(this.$isComputer);

    }

    isEnabled( ) {
        return !this.$element.hasClass(CLASSES.disabled);
    }

    enable( ) {
        this.$element.removeClass(CLASSES.disabled);
    }

    disable( ) {
        this.$element.addClass(CLASSES.disabled);
    }

    value() {
        return {
            name: this.NameBox.value(),
            icon: this.$icon.children().first().data("value"),
            color: this.$color.children().first().data("value"),
            isComputer: this.CheckBox.value(),
        }
    }
}

AowPlayerItem.SetContainer = function ( $container ) {
    $CONTAINER = $container;
}