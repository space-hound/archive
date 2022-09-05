import { SELECTORS, CLASSES, TEMPLATE, ICON_TYPE, COLOR_TYPE } from "./utils";

import "./aow-itemslist.css";

export default class AowItemslist {
    
    constructor( $element, options ) {

        if(typeof options === "string") {
            if(options === "ICON_TYPE") {
                options = ICON_TYPE.options;
                this.registerTriggerTemplate(ICON_TYPE.triggerTemplate);
            } else {
                options = COLOR_TYPE.options;
                this.registerTriggerTemplate(COLOR_TYPE.triggerTemplate);
            }
        }

        // set the container element
        this.$element = $element;
        // ensure it has the propper class
        this.$element.addClass(CLASSES.disabled);
        this.$element.addClass(CLASSES.container);
        this.$element.css("transition", "transition: all 250ms ease");
        // insert it's template
        this.$element.html( TEMPLATE() );
        // set all key elements
        $.each( SELECTORS, ( key, value ) => {
            this[`$${key}`] = this.$element.find(value);
        });
        // make a copy of the raw items
        this.rawItems = [...options.items];
        // keep a reference to the item template
        this.itemTemplate = options.itemTemplate;
        // insert all items
        this.rawItems.forEach( item => {
            this.$list.append( this.itemTemplate( item ) );
        });
        // get a reference of the obstacle element
        this.$obstacle = options.$obstacle;
        this.$obstacle.addClass(CLASSES.obstacle);
        // create an empty trigger array
        this.triggers = [];

        this.enabled = true;
        this.$selectedItem = this.items[0];
        this.$selectedItem.addClass(CLASSES.selected);
        this.$currentTrigger = null;

        this.addEvents();
    }

    get items ( ) {
        return [...this.$list.children()].map( ( item ) => $(item) );
    }

    /* =======================================================================

    ======================================================================= */

    addEvents( ) {
        this.onSave = $.proxy(this.onSave, this);
        this.$save.on("click", this.onSave);

        this.onCancel = $.proxy(this.onCancel, this);
        this.$cancel.on("click", this.onCancel);

        this.onSelect = $.proxy(this.onSelect, this);
        this.$list.on("click", `.${CLASSES.item}`, this.onSelect);

        this.onTrigger = $.proxy(this.onTrigger, this);
    }

    onSelect( event ) {
        const $closest = $(event.target).closest(`.${CLASSES.item}`);

        if($closest.length) {
            this.resolveSelection($closest);
        }
    }

    onCancel( event ) {
        this.disable();
    }

    onSave( event ) {
        if(this.$currentTrigger === null) {
            throw new ReferenceError("AowItemslist - onSave - $currentTrigger");
        }

        if(this.$selectedItem === null ) {
            throw new ReferenceError("AowItemslist - onSave - $selectedItem");
        }
        
        const selectedValue = this.removeSelectedItem();
        const triggerValue = this.$currentTrigger.children().first().data("value");

        this.$currentTrigger.html(this.triggerTemplate(selectedValue));
        this.addItem(triggerValue);

        this.disable();

    }

    /* =======================================================================

    ======================================================================= */

    enable() {
        this.enabled = true;

        this.resolveSelection(this.items[0]);

        this.$obstacle.addClass(CLASSES.disabled);
        this.$element.removeClass(CLASSES.disabled);
    }

    disable() {
        this.enabled = false;

        this.$selectedItem.removeClass(CLASSES.selected);
        this.$selectedItem = null;
        this.$currentTrigger = null;
        
        this.$element.addClass(CLASSES.disabled);
        this.$obstacle.removeClass(CLASSES.disabled);
    }

    /* =======================================================================

    ======================================================================= */

    resolveSelection( $item ) {

        if(this.$selectedItem !== null) {
            
            if( this.$selectedItem[0].isSameNode($item[0]) ) {
                return;
            }

            this.$selectedItem.removeClass(CLASSES.selected);
        }

        this.$selectedItem = $item;
        this.$selectedItem.addClass(CLASSES.selected);
    }
    

    /* =======================================================================

    ======================================================================= */

    removeItemByIndex( index ) {
        const $item = this.items[index];

        const value = $item.data("value");

        $item.remove();

        return value;
    }
    
    removeSelectedItem( ) {
        if( this.$selectedItem === null ) {
            return null;
        }

        const value = this.$selectedItem.data("value");

        this.$selectedItem.remove();

        return value;
    }

    addItem( value ) {
        this.$list.append(this.itemTemplate( value ));
    }

    /* =======================================================================

    ======================================================================= */

    onTrigger( event ) {
        this.$currentTrigger = event.data.$trigger;
        
        this.enable();
    }
    
    registerTriggerTemplate( template ) {
        this.triggerTemplate = template;
    }

    registerTrigger( $element ) {
        if(!this.triggerTemplate) {
            throw new ReferenceError(" AowItemslist - triggerTemplate not registered! ");
        }

        this.triggers.push($element);
        
        $element.html(this.triggerTemplate(this.removeItemByIndex(0)));
        $element.on("click", { $trigger: $element }, this.onTrigger);
    }

    
}