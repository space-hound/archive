export const selectors = {
    select: "select",
    status: ".blana-select-status",
    current: ".blana-select-status .current",
    count: ".blana-select-status .count",
    carousel: ".blana-carousel",
    label: "label"
}

export const events = {
    onNext (event) {

    },

    onPrev (event) {

    },

    onTransitionEnd( event ) {
       const curr = this.carousel.counter

       this.__setCurrent(curr - 1);
    }
}


export const carouselTemplate = ( items ) => {
    return `<div class="blana blana-carousel blana-night">
                        <div class="blana-arrow blana-arrow-left">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="blana-carousel-content">
                            <div class="blana-slider">
                                ${ items.map( ( item ) => {
                                    return `<div class="blana-slider-content">
                                                <p>${item.innerHTML}</p>
                                            </div>`
                                }).join("")}
                            </div>
                        </div>
                        <div class="blana-arrow blana-arrow-right">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>`
}