const POSITIONS = [
    "beforebegin",
    "afterbegin",
    "beforeend",
    "afterend",
];

// translate a number from 0 to 3 (included) into a string
// so when you want to insert somthing you will pas 1 not "afterbegin"
//
//  <!-- beforebegin --> .....0
//      <p>
//          <!-- afterbegin --> .....1
//          foo
//          <!-- beforeend --> .....2
//      </p>
//  <!-- afterend --> .....3
//
const resolvePos = ( position ) => {

    if(typeof position === "string") {
        return position;
    }

    return POSITIONS[position];
}

// check if the insert value is a string or an Element and then
// insert it with the propper method
//
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
//
const resolveInsert = ( element, html, position ) => {
    const pos = resolvePos(position);

    if(typeof html === "string") {
        element.insertAdjacentHTML(pos, html);
    } else {
        element.insertAdjacentElement(pos, html);
    }
}

export default {

    // removes all [Node]s from a given element
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    //
    empty( element ) {
        while( element.firstChild ) {
            element.removeChild(element.firstChild);
        }
    },

    // sets or gets the text content of an element
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText
    //
    text( element, text ) {
        if(text !== undefined) {
            element.textContent = text;
        }

        return element.textContent;
    },

    // sets or gets the innerHTML of an element
    // gets using innerHTML
    // sets using innerHTML
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    //
    _html( element, inner ) {
        if(inner !== undefined) {
            
            element.innerHTML = inner;
        }

        return element.innerHTML;
    },

    // is is to set the content of an element
    // first it will remove all nodes inside
    // and insert with insertAdjacent
    //
    // gets the content as innerHTML
    //
    // https://stackoverflow.com/questions/16126960/what-is-the-difference-between-appendchild-insertadjacenthtml-and-innerhtml
    // https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/
    //
    html( element, inner ) {
        if(inner !== undefined) {
            
            this.empty(element);

            resolveInsert(element, inner, 1);
        }

        return element.innerHTML;
    },

    // remove itself from the DOM tree and returns self
    removeSelf( element ) {
        return element.parentNode.removeChild(element);
    },

    // if elemet has given child it will remove it
    removeChild( element, child ) {
        if(!this.hasChild(element, child)) {
            return null;
        }

        return element.removeChild(child);
    },

    // remove if there is the child at "index"nt position
    removeChildAt( element, index ) {
        const child = this.childAt(element, index);

        if(child === null) {
            return null;
        }

        return element.removeChild(child)
    },

    //
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild
    // 
    // experimental:
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
    // https://developer.mozilla.org/en-US/docs/Web/API/ChildNode
    // 
    // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append
    // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
    // https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before
    // https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after
    //
    //

    // prepend an element and returns it (inside at begining)
    // using insertAdjacent
    //
    // maybe sometimes change it so it won't use insertAdjacent
    prepend( element, html ) {
        resolveInsert(element, html, 1);

        return this.firstChild(element);
    },

    // append an element and returns it (inside at end)
    // using insertAdjacent
    //
    // maybe sometimes change it so it won't use insertAdjacent
    append( element, html ) {
        resolveInsert(element, html, 2);

        return this.lastChild(element);
    },

    // insert an element before an element and returns it (outside before)
    // using insertAdjacent
    //
    // maybe sometimes change it so it won't use insertAdjacent
    before( element, html ) {
        resolveInsert(element, html, 0);

        return this.prevSibling(element);
    },
    
    // insert an element after an element and returns it (outside after)
    // using insertAdjacent
    //
    // maybe sometimes change it so it won't use insertAdjacent
    after( element, html ) {
        resolveInsert(element, html, 3);

        return this.nextSibling(element);
    },

    // append an element ad "index"nth between children and returns it
    // using insertAdjacent
    //
    // maybe sometimes change it so it won't use insertAdjacent
    insertAt( element, html, index, type = "before") {
        const child = this.childAt(element, index);

        if(child === null) {
            return null;
        }

        this[type](child, html);
    },

    // replace a given element
    // using insertAdjacent
    //
    // maybe sometimes change it so it won't use insertAdjacent
    replace( element, html ) {
        const inserted = this.before(element, html);
        const removed = this.removeSelf(element);

        return {
            inserted,
            removed
        }
    },

    // wrap a given element with a given string html
    // using insertAdjacent
    //
    // maybe sometimes change it so it won't use insertAdjacent
    wrap( element, html ) {
        const {inserted, removed} = this.replace(element, html);

        this.prepend(inserted, removed);
    },

    // unwrap the parent element from a given child
    //
    // basicaly replace an element with it's children
    //
    // using insertAdjacent
    //
    // maybe sometimes change it so it won't use insertAdjacent
    unwrap( element ) {
        const toRemove = this.parent(element);
        const toRemain = this.children(toRemove);
        
        for(let i = toRemain.length; i >= 0; --i) {
            const removed = this.removeSelf(toRemove[i]);

            this.after(toRemove, removed);
        }

        return this.removeSelf(toRemove);
    }
}