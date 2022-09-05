

export default {

    // Element vs Node
    //
    // https://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object
    //

    // search the DOM tree for an element with the id - "id"
    byId( id ) {
        return document.getElementById(id);
    },

    // query the DOM tree of the "element" for an element that matches the "selector"
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    //
    // returns element/null
    //
    query( selector, element = document ) {
        return element.querySelector(selector);
    },

    // query the DOM tree of the "element" for all elements that matches the "selector"
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
    //
    // returns array/null
    //
    queryAll( selector, element = document ) {
        // querySelectorAll returns a NodeList
        // make it into array using spread syntax [...object]
        //
        return [...element.querySelectorAll(selector)];
    },

    // return the first element from a list of all elements that matches "selector"
    //
    // returns element/null
    //
    first( selector, element = document ) {
        const all = this.queryAll(selector, element);

        if(this.isEmpty(all)) {
            return null;
        }

        return all[0];
    },

    // return the last element from a list of all elements that matches "selector"
    //
    // returns element/null
    //
    last( selector, element = document ) {
        const all = this.queryAll(selector, element);

        if(this.isEmpty(all)) {
            return null;
        }

        return all[all.length - 1];
    },

    // return the "index" element from a list of all elements that matches "selector"
    //
    // returns element/null
    //
    at( selector, index, element = document ) {
        const all = this.queryAll(selector, element);

        if(this.isEmpty(all)) {
            return null;
        }

        if(!this.hasIndex(all, index)) {
            throw new RangeError("vanillaQuery.at");
        }

        return all[index];
    },

    // return the parent [Element] of a given Element
    //
    // https://stackoverflow.com/questions/8685739/difference-between-dom-parentnode-and-parentelement
    //
    parent( element ) {
        return element.parentElement;
    },

    filter( elements, selector ) {

        let SELECTOR = undefined;

        if(this.isString(selector)) {
            
            SELECTOR = selector;
        }
        
        if(this.isElement(selector)) {

            SELECTOR = this.selector(selector);
        }

        if(SELECTOR !== undefined) {
            return elements.filter( el => {
                this.is(el, SELECTOR);
            });
        }

        return elements;
    }
}