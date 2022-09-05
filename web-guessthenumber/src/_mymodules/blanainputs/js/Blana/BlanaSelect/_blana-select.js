import { selectors, carouselTemplate, events } from "./_utils";
import BlanaCarousel from './../BlanaCarousel/blana-carousel';

export default class _BlanaSelect {
    constructor(element) {
        this.element = element;
        this.select = this.element.querySelector(selectors.select);
        this.options = [...this.select.options];

        this.element.querySelector(selectors.label).insertAdjacentHTML("afterend", carouselTemplate(this.options));

        this.carousel = BlanaCarousel(this.element.querySelector(selectors.carousel)); 

        this.__setCurrent();
        this.__setCount();
    }

    Build() {
        this.onNext = events.onNext.bind(this);
        this.carousel.rightArrow.addEventListener("click", this.onNext);

        this.onPrev = events.onPrev.bind(this);
        this.carousel.leftArrow.addEventListener("click", this.onPrev);

        this.onTransitionEnd = events.onTransitionEnd.bind(this);
        this.carousel.slider.addEventListener("transitionend", this.onTransitionEnd);
    }

    Destroy() {
        this.carousel.rightArrow.removeEventListener("click", this.onNext);
        this.carousel.leftArrow.removeEventListener("click", this.onPrev);
    }

    __setCurrent( val ) {
        if(val !== undefined) {
            this.select.selectedIndex = val;
        }

        this.element.querySelector(selectors.current).innerHTML = this.select.selectedIndex + 1;
    }

    __setCount() {
        this.element.querySelector(selectors.count).innerHTML = this.options.length;
    }

    selected(value) {
        if(value !== undefined) {
            if(value >= 0 && value < this.options.length) {
                this.select.selectedIndex = value;

                this.carousel.setCurrent(value + 1);
                this.__setCurrent();
            } else {
                throw new Error("SATAN!!!");
            }
        }

        return this.select.selectedIndex;
    }

    selectedValue() {
        return this.select.options[this.select.selectedIndex].value;
    }
}