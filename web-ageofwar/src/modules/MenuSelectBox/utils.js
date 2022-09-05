export const DEFAULT_OPTIONS = {
    type: "interval",
    items: [0, 100],
    current: 3,
    emit: "selectbox:change"
}

export const SELECTORS = {
    prevBtn: ".aow-prev",
    nextBtn: ".aow-next",
    select: ".aow-select",
}

export const CLASSES = {
    container: "aow-selectbox",
    option: "aow-option",
}

export const EVENTS = {
    onPrev( event ) {
        this.shiftOptions(this.currentIndex - 1)
    },

    onNext( event ) {
        this.shiftOptions(this.currentIndex + 1)
    }
}

export const TEMPLATE = ( options ) => {
    let items;

    if( options.type === "interval" ) {

        items = [];

        const min = options.items[0];
        const max = options.items[1];

        for(let i = min; i <= max; i++) {
            items.push({
                value: i,
                display: i,
            })
        }

    } else {

        items = options.items;

    }

    return `
            <div class="aow-prev">
                <i class="fas fa-caret-up"></i>
            </div>

            <div class="aow-select">
                ${ 
                    items.map( item => {
                        const { value, display } = item;

                        return `
                            <div class="aow-option" data-value="${value}">
                                ${display}
                            </div>
                        `;
                    }).join("")
                }
            </div>

            <div class="aow-next">
                <i class="fas fa-caret-down"></i>
            </div>
    `;
}

export const UTILS = {

    // adjust the initial size ( or every time a new option was added to the list )
    adjustSize( instance ) {
        // finde the option with the biggest width
        const { width, height } = this.__widestOption(instance.options);

        // set that option's width to the option's container and root container
        this.__width(instance, ( width + instance.$prevBtn[0].offsetWidth * 1.8 ));
        // set that height too ( as at begining root has no height )
        this.__height(instance, height);

        instance.bestHeight = height;

        // adjust every option top offest from parent
        instance.options.forEach( ($option, index) => {
            $option[0].style.top = (height * index) + 'px';
        });
    },

    // sets or gets the width of $select ( options container ) and $element ( root container )
    __width( instance, value ) {
        if(value !== undefined ) {

            value = parseInt(value);

            instance.$select[0].style.width = value + 'px';
            instance.$element[0].style.width = value + 'px';
        }

        return parseInt(instance.$select.css("width"));
    },

    // sets or gets the height of $select ( options container ) and $element ( root container )
    __height( instance, value ) {
        if(value !== undefined ) {
           
            value = parseInt(value);

            instance.$select[0].style.height = value + 'px';
            instance.$element[0].style.height = value + 'px';
        }

        return parseInt(instance.$select.css("height"));
    },

    // find the option with the biggest width value
    __widestOption( options ) { 
        // find the index of the options with the widest width 
        let index = options.map(
            $option => parseInt( $option[0].offsetWidth )
        ).reduce((iMax, el, i, arr) => el > arr[iMax] ? i : iMax, 0);

        const element = options[index];
        const width = parseInt(element[0].offsetWidth);
        const height = parseInt(element[0].offsetHeight);

        // return the index, element, it's width and height
        return { index, element, width, height };
    },

    /* ================================================================== */

    // check bounds and hide the button if currentIndex is at bounds
    __checkBounds( instance ) {
        const currentIndex = instance.currentIndex;
        const count = instance.count;

        // first make all them visible
        instance.$prevBtn.removeClass("d-none");
        instance.$nextBtn.removeClass("d-none");

        // hide prev button if currentIndex is 0
        if(currentIndex === 0) {
            instance.$prevBtn.addClass("d-none");
        }

        // hide next button if currentIndex is count - 1
        if(currentIndex === count - 1) {
            instance.$nextBtn.addClass("d-none");
        }
    },

}