import { fadeIn, fadeOut, resolveDirStyleProp, naiveAnimation } from "./utilities";

export default {

    // gets or sets a css property with the key - "key"
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    //
    css( element, key, value ) {
        if(value !== undefined) {
            element.style[key] = value;
        }

        return window.getComputedStyle(element).getPropertyValue(key);
    },

    // accepts a plain object with keys as the css props and the values as thir values
    // and set all of them
    //
    // if no object provided will return the whole computed style object
    jcss( element, object ) {
        if(object !== undefined) {
            this.each(object, (value, key) => {
                element.style[key] = value;
            });
        } else {
            return window.getComputedStyle(element);
        }
    },

    // show an element
    //
    // 1. set opacity to 0
    // 2. remove display none
    // 3. set opacity to 1
    //
    show( element, duration = 400 ) {
        fadeIn( element, duration );
    },

    // hides an element
    //
    // 1. set opacity to 1
    // 2. set opacity to 0
    // 3. add display none
    //
    hide( element, duration = 400 ) {
        fadeOut( element, duration );
    },

    // return the margin values in all directions on element
    margins( element ) {
        return resolveDirStyleProp(element, "margin")
    },

    // return the borders values in all directions on element
    borders( element ) {
        return resolveDirStyleProp(element, "border", "width")
    },

    // return the padding values in all directions on element
    padding( element ) {
        return resolveDirStyleProp(element, "padding")
    },

    // create and trigger a naive animation
    //
    // maybe sometime study "requestAnimationFrame" and the use of "promises" in animations
    //
    // 
    animate( element, options ) {
        naiveAnimation(element, options);
    }
}