APP.DOM = {
    query ( element, selector = null ) {

        if(selector !== null) {
            return element.querySelector(selector);
        }

        return document.querySelector(element);
    },

    queryAll ( element, selector = null ) {

        if(selector !== null) {
            return [...element.querySelectorAll(selector)];
        }

        return [...document.querySelectorAll(element)];
    },

    delete ( element ) {
        const parent = element.parentNode;
        return parent.removeChild(element);
    },

    add ( element, string, position = 2 ) {

        const locations = {
            0: "beforebegin",
            1: "afterbegin",
            2: "beforeend",
            3: "afterend",
        }

        element.insertAdjacentHTML(locations[position], string);
    },

    clear( element ) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}