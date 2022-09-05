

export default {

    // gets or sets the width of the element
    width( element, value, unit = "px" ) {
        if(value !== undefined) {
            return this.css(element, "width", this.toUnit(value, unit));
        }

        return this.toRound(
            this.jcss(element).getPropertyValue("width")
        );
    },

    // gets or sets the height of the element
    height( element, value, unit = "px" ) {
        if(value !== undefined) {
            return this.css(element, "height", this.toUnit(value, unit));
        }

        return this.toRound(
            this.jcss(element).getPropertyValue("height")
        );
    },

    // offset width+height
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
    //
    offsetSize( element ) {
        return {
            width: element.offsetWidth,
            height: element.offsetHeight,
        }
    },

    // client width+height
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
    //
    clientSize( element ) {
        return {
            width: element.clientWidth,
            height: element.clientHeight,
        }
    },

    // scroll width+height
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
    //
    scrollSize( element ) {
        return {
            width: element.scrollWidth,
            height: element.scrollHeight,
        }
    },

    // returns the size of an element and its position relative to the viewport
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    //
    boundingClient( element ) {
        return element.getBoundingClientRect();
    },
    
}