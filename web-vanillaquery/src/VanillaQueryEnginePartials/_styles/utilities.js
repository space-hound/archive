const DIRECTIONS = ["top", "right", "bottom", "left"];

// convrets to float a given value then raound the result
const roundUp = ( value ) => {
    return window.Math.round(window.parseFloat(value));
}

// extract a css property with the key - "property" for all directions
//
// ex: resolveDirStyleProp( element, "padding" ) will return an object with all padding values
//
// "postfix" -> used for border "border-left-width"
//
export const resolveDirStyleProp = ( element, property, postfix ) => {
    const style = window.getComputedStyle(element);
    
    const slag = {};

    DIRECTIONS.forEach( dir => {
        let key = `${property}-${dir}`;

        if(postfix !== undefined) {
            key += `-${postfix}`;
        }

        slag[dir] = roundUp(style[key]);

    });

    return slag;
}

// create a "naive animation"
// accepts an element and an object that should have
// 4 properties
//
/*
    options: {
        tranistion: string,

        initial: Function,

        final: Function,

        trigger: Function,
    }
*/
//
// initial - put some style on the element
// final - put or remove some styles
// trigger - change a css prop that will trigger the trasnition
//
// the "transitionend" event will remove itself after completing
//
export const naiveAnimation = ( element, options ) => {

    if(options.inital) {
        options.inital();
    }

        element.style.setProperty("transition", options.transition);

    element.addEventListener('transitionend', function anon( event ) {

        if(options.final) {
            options.final();
        }

            element.style.removeProperty("transition");

        subject.removeEventListener("transitionend", anon);
    });

    if(options.trigger) {
        options.trigger();
    }
}

// create a fadeIn animation
export const fadeIn = ( element, duration = 400, delay = 0 ) => {
    naiveAnimation( element, {
        transition: `all ${duration}ms ease ${delay}ms`,
        
        initial( ) {
            element.style.removeProperty("display");
            element.style.setProperty("opacity", 0);
        },

        final( ) {
            element.style.removeProperty("opacity");
        },

        trigger( ) {
            element.style.setProperty("opacity", 1);
        }

    });
}

// create a fadeOut animation
export const fadeOut = ( element, duration = 400, delay = 0 ) => {
    naiveAnimation( element, {
        transition: `all ${duration}ms ease ${delay}ms`,
        
        initial( ) {
            element.style.setProperty("opacity", 1);
        },

        final( ) {
            element.style.setProperty("disply", "nonde");
            element.style.removeProperty("opacity");
        },

        trigger( ) {
            element.style.setProperty("opacity", 0);
        }

    });
}