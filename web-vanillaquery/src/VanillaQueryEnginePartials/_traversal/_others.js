
export default {

    // same as "this.queryAll"
    // this should be used with an element param
    //
    find( selector, element ) {
        return this.queryAll(selector, element)
    },

    // same as "this.query"
    // this should be used with an element param
    //
    findFirst( selector, element ) {
        return this.query(selector, element)
    },

    // same as "this.last"
    // this should be used with an element param
    //
    findLast() {
        return this.last(selector, element);
    },

    // return an array of parent Elements
    // element, element.parentElement, element.parentElement.parentElement ...
    // untill it reaches it's destination
    //
    path( element, destination = null ) {
        const dompath = [];

        let current = element;

        while( current !== destination ) {
            dompath.push(current);

            current = this.parent(current);
        }

        if( current !== null ) {
            dompath.push(current);
        }

        return dompath;
        
    },

    // search upwards in the DOM tree from an element if there is an element that matches the selector
    // 
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    //
    closest( selector, element, destination = null ) {
        let current = element;

        while(current !== destination) {
            if(current.matches(selector)) {
                return current;
            }

            current = this.parent(current);
        }

        return null;
    },

    // check if and element contains a child or a child with the selector
    // child or grandChild or grandGrandChild and so on
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
    //
    has( element, child ) {
        if(this.isString(child)) {
            return this.query(child, element) !== null;
        }

        return element.contains(child);
    },

    // check if an element has the given selector
    // or is the same node as a given element
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/isSameNode
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode
    //
    is( element, selector ) {
        if(this.isString(selector)) {
            return element.matches(selector);
        }

        return element.isSameNode( selector );
    },
}