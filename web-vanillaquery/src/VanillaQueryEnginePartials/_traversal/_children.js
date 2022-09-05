
export default {

    // return all the children [Element]s of a given element
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children
    //
    // versus
    // 
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
    //
    children( element ) {
        return [...element.children];
    },

    // check if given element has children "Element"s
    hasChildren( element ) {
        if (element.firstElementChild) {
            return true;
        }

        return false;
    },

    // check if given element has a specific [Element] child
    hasChild( element, child ) {
        return this.children(element).indexOf(child) !== -1;
    },

    // returns the first child [Element] of a given element
    firstChild( element ) {
        return element.firstElementChild;
    },

    // returns the last child [Element] of a given element
    lastChild( element ) {
        return element.lastElementChild;
    },

    // returns the "index"th child [Element] of a given element
    childAt( element, index ) {
        const all = this.children(element);

        if(this.isEmpty(all)) {
            return null;
        }

        if(!this.hasIndex(all, index)) {
            throw new RangeError("vanillaQuery.childAt");
        }

        return all[index];
    },

    // returns the index of the child "child" [Element] of a given element
    indexOfChild( element, child ) {
        const all = this.children(element);

        if(this.isEmpty(all)) {
            return null;
        }

        const index = all.indexOf(child);
        
        if(!this.hasIndex(all, index)) {
            return -1;
        }

        return all[index];
    }
}