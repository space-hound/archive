import { selectors, itemTemplate, events, style } from "./_utils";

export default class _BlanaCarousel {
    constructor( element ) {
        this.element = element;

        this.leftArrow = element.querySelector(selectors.leftArrow);
        this.rightArrow = element.querySelector(selectors.rightArrow);
        this.content = element.querySelector(selectors.content);
        this.slider = this.content.querySelector(selectors.slider);
        this.items = [...this.slider.querySelectorAll(selectors.item)];

        this.initialTransition = style(this.slider).transition;

        this.size = this.items[0].clientWidth;
        this.counter = 1;

        if(this.items.length > 2) {
            this.__insertClones();
        }

    }

    __insertClones() {
        const first = this.items[0];
        const last = this.items[this.items.length - 1];

        this.slider.insertAdjacentHTML('afterbegin', itemTemplate(selectors.lastClone, last.innerHTML));
        this.slider.insertAdjacentHTML('beforeend', itemTemplate(selectors.firstClone, first.innerHTML));

        this.items = [...this.slider.querySelectorAll(selectors.item)];

        this.slider.style.transition = "none";
        this.slider.style.transform = 'translateX(' + (this.counter * -this.size) + 'px)';
    }

    Build() {
        this.onNext = events.onNext.bind(this);
        this.rightArrow.addEventListener("click", this.onNext);

        this.onPrev = events.onPrev.bind(this);
        this.leftArrow.addEventListener("click", this.onPrev);

        this.onTransitionEnd = events.onTransitionEnd.bind(this);
        this.slider.addEventListener("transitionend", this.onTransitionEnd);
    }

    Destroy() {
        this.rightArrow.removeEventListener("click", this.onNext);
        this.leftArrow.removeEventListener("click", this.onPrev);
        this.slider.removeEventListener("click", this.onTransitionEnd);
    }

    __moveNext( event ) {
        if(this.counter >= this.items.length -1) { return; }
        this.slider.style.transition = this.initialTransition;
        this.slider.style.transform = 'translateX(' + (++this.counter * -this.size) + 'px)';
    }

    __movePrev( event ) {
        if(this.counter <= 0) { return; }
        this.slider.style.transition = this.initialTransition;
        this.slider.style.transform = 'translateX(' + (--this.counter * -this.size) + 'px)';
    }
    
    __checkForExtremes( event ) {
        if(this.items[this.counter].classList.contains(selectors.lastClone)) {
            this.slider.style.transition = "none";
            this.counter = this.items.length - 2;
            this.slider.style.transform = 'translateX(' + (this.counter * -this.size) + 'px)';
        }

        if(this.items[this.counter].classList.contains(selectors.firstClone)) {
            this.slider.style.transition = "none";
            this.counter = this.items.length - this.counter;
            this.slider.style.transform = 'translateX(' + (this.counter * -this.size) + 'px)';
        }
    }

    __refillItems() {
        this.items = [...this.slider.querySelectorAll(selectors.item)];
    }

    setCurrent( val ) {
        if(val !== undefined) {
            if(val >= 0 && val < this.items.length) {
                this.counter = val;

                this.slider.style.transition = "none";
                this.slider.style.transform = 'translateX(' + (this.counter * -this.size) + 'px)';
            } else {
                throw new Error("SATAN!!!");
            }

        } else {
            return this.counter;
        }
    }
}