
export default {

    // return an array of all the sibling [Element]s of a given element ( without the given element )
    siblings( element ) {
        const all = this.children(this.parent(element));

        if(all.lenght === 1) {
            return [];
        }

        return all.filter( sibling => !sibling.isSameNode(element) );
    },

    // return the previous [Element] sibling or null
    prevSibling( element ) {
        return element.previousElementSibling;
    },

    // return the next [Element] sibling or null
    nextSibling( element ) {
        return element.nextElementSibling;
    },

    // return the first [Element] sibling of all siblings or null
    firstSibling( element ) {
        const all = this.siblings(element);

        if(this.isEmpty(all)) {
            return null;
        }

        return all[0];
    },

    // return the last [Element] sibling of all siblings or null
    lastSibling( element ) {
        const all = this.siblings(element);

        if(this.isEmpty(all)) {
            return null;
        }

        return all[all.lenght - 1];
    },

    // return the sibling [Element] at the "index"th position from all siblings
    siblingAt( element, index ) {
        const all = this.siblings(element);

        if(this.isEmpty(all)) {
            return null;
        }

        if(!this.hasIndex(all, index)) {
            throw new RangeError("vanillaQuery.siblingAt");
        }

        return all[index];
    },

    // return the index of an element's sibling [Element]
    indexOfSibling( element, sibling ) {
        const all = this.siblings(element);

        if(this.isEmpty(all)) {
            return null;
        }

        const index = all.indexOf(sibling);
        
        if(!this.hasIndex(all, index)) {
            return -1;
        }

        return all[index];
    },

    // return all the sibling [Element]s before the given element
    siblingsBefore( element ) {
        const all = [];
        
        let current = this.prevSibling(element);

        while(current) {
            all.push(current);

            current = this.prevSibling(current);
        }

        return all;
    },

    // return all the sibling [Element]s after the given element
    siblingsAfter( element ) {
        const all = [];
        
        let current = this.nextSibling(element);

        while(current) {
            all.push(current);

            current = this.nextSibling(current);
        }

        return all;
    }
}