/*=====================================================================================================*/
// IMPORTS
/*=====================================================================================================*/
import { states } from "./../_utils";

/*=====================================================================================================*/
// SELECTORS
/*=====================================================================================================*/
export const selectors = {
    leftArrow: ".blana-arrow-left",
    rightArrow: ".blana-arrow-right",
    content: ".blana-carousel-content",
    slider: ".blana-slider",
    item: ".blana-slider-content",
    firstClone: "firstClone",
    lastClone: "lastClone"
}

//should have been better if "type" was of type data- not class
export const itemTemplate = (type, inner) => {
    return `<div class="blana-slider-content ${type}">${inner}</div>`;
}

/*=====================================================================================================*/
// EVENTS
/*=====================================================================================================*/
export const events = {
    onNext( event ) {
        this.__moveNext(event);
    },

    onPrev( event ) {
        this.__movePrev(event);
    },

    onTransitionEnd( event ) {
        this.__checkForExtremes(event);
    }
}

/*=====================================================================================================*/
// UTILS
/*=====================================================================================================*/
export const style = ( element ) => {
    return window.getComputedStyle(element);
}