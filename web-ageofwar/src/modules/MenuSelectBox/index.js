import { DEFAULT_OPTIONS, SELECTORS, CLASSES, EVENTS, TEMPLATE, UTILS } from './utils';

import "./aow-selectbox.css";

export default class AowSelectbox {
    
    constructor( $element, options = {} ) {
        // ensure the options are set up correctly
        // if is missing data add from DEFAUL_OPTIONS
        options = $.extend({}, DEFAULT_OPTIONS, options);

        // get a reference of the container element
        this.$element = $element;

        // add the component specific class
        this.$element.addClass(CLASSES.container);

        // insert the template
        this.$element.html(TEMPLATE(options));

        // get a ref of buttons and select container
        $.each(SELECTORS, ( key, value ) => {
            this[`$${key}`] = this.$element.find(value);
        });

        // save the select options into an array of jQuery objects
        this.options = [...this.$select.children()].map( ( option ) => $(option) );

        // set current index to 0;
        this.currentIndex = 0;

        // save the emmit keyword
        this.emit = options.emit;

        // adjust the size of select and element by the widest option element
        UTILS.adjustSize(this);

        // move to the current index

        this.shiftOptions(this.findIndex(options.current));

        // attach the events
        this.addEvents();

    }

    /* =======================================================================
        PROPERTIES - GETTER AND SETTERS
    ======================================================================= */

    get selectedIndex( ) {
        return this.currentIndex;
    }

    set selectedIndex( value ) {
        this.shiftOptions(value);
    }

    get selectedValue( ) {
        return this.options[this.currentIndex].data("value");
    }

    get count( ) {
        return this.options.length;
    }

    /* =======================================================================
        EVENTS
    ======================================================================= */

    addEvents( ) {
        this.onPrev = $.proxy(EVENTS.onPrev, this);
        this.$prevBtn.on("click", this.onPrev);

        this.onNext = $.proxy(EVENTS.onNext, this);
        this.$nextBtn.on("click", this.onNext);
    }

    findIndex( value ) {
        return this.options.findIndex( $option => {
            return $option.data('value') == value;
        });
    }

    shiftOptions( newIndex ) {

        if(this.currentIndex == newIndex){
            return false;
        }

        if(newIndex < 0) {
            return false;
        }

        if(newIndex >= this.count) {
            return false;
        }


        const sign = this.currentIndex > newIndex ? 1 : -1;
        const steps = parseInt(Math.abs(this.currentIndex - newIndex));

        this.options.forEach( $option => {
            const top = parseInt($option[0].style.top);
            const shifted = top + ( steps * sign * this.bestHeight );
            $option[0].style.top = shifted + 'px';
        });

        this.currentIndex = newIndex;

        UTILS.__checkBounds(this);

        $em.emit(this.emit, { from: this, value: this.selectedValue });

        return true;
    }
}