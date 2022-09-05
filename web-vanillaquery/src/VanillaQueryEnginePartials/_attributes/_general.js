
// returns all classes present on the element
const getCls = ( element ) => {
    return [...element.classList];
}

// check if an element has one class on itself
const hasCls = ( element, cls ) => {
    return element.classList.contains( cls );
}

// check if an element has all the classes specified on itself
const hasArrCls = ( element, classes ) => {
    for(let i = 0, len = classes.length; i < len; i++) {
        if(!hasCls(element, classes[i])) {
            return false;
        }
    }

    return true;
}

// add one class on the element
const addCls = ( element, cls ) => {
    element.classList.add( cls );
}

// add multiple classes on the element
const addArrCls = ( element, classes ) => {
    classes.forEach( cls => {
        element.classList.add( cls );
    });
}

// remove one class on the element
const remCls = ( element, cls ) => {
    element.classList.remove( cls );
}

// remove multiple classes on the element
const remArrCls = ( element, classes ) => {
    classes.forEach( cls => {
        element.classList.remove( cls );
    });
}

// removes all the classes on element
const emptyCls = ( element ) => {
    const classList = element.classList;

    while(classList.length) {
        classList.remove(classList[0]);
    }
}

// toggle a class on the element
const tglCls = ( element, cls ) => {
    element.classList.toggle( cls );
}

// returns the lower case tag
const resolveTag = ( element ) => {
    return element.tagName.toLowerCase();
}

// returns empty string if element has no id or appends "#" to id
const resolveId = ( element ) => {
    if( element.id === "" ) {
        return "";
    }

    return `#${element.id}`;
}

// returns all classes with a "." before the class name and no space between
const resolveCls = ( element ) => {
    const classes = getCls(element);

    if(classes === 0) {
        return "";
    }

    return classes.map( cls => `.${cls}` ).join("");
}

// return the full "local" selector of element eg: div#id.class-one.class-two
const localSelector = ( element ) => {

    return `${resolveTag(element)}${resolveId(element)}${resolveCls(element)}`;
}

// return the full global selector from the html down to the element
const globalSelector = ( element, self ) => {
    
    let selector = localSelector(element);

    let parent = self.parent(element);

    while(parent !== null) {

        selector = localSelector(parent) + " " + selector;

        parent = self.parent(parent);
    }

    return selector;
}

export default {

    // returns the tag of a given element
    tag( element ) {
        return element.tagName;
    },

    // set or get the id of a given element
    id( element, id ) {

        // if param id has value then sets it
        if(id !== undefined) {
            element.id = id;
        }

        // return the current id on the element
        return element.id;
    },

    // return an array of classes on the element
    cls( element ) {
        return getCls(element);
    },

    // return the selector of the element either
    // a shallow or the full from html down to el
    //
    // ex: tagName#idValue.classNameOne.classNameTwo ...
    // ex: tagName.classNameOne.classNameTwo ...
    // ex: tagName
    //
    selector( element, global = false) {
        
        if(global) {
            return globalSelector(element, this);
        } else {
            return localSelector(element);
        }

    },

    // check if element has a class or multiple classes
    // "cls" -> string/array
    //
    hasCls( element, cls ) {
        if(this.isArray(cls)) {
            return hasArrCls(element, cls);
        } else {
            return hasCls(element, cls);
        }
    },

    // add a class or multiple classes on the element
    // "cls" -> string/array
    //
    addCls( element, cls ) {
        if(this.isArray(cls)) {
            return addArrCls(element, cls);
        } else {
            return addCls(element, cls);
        }
    },

    // remove a class or multiple classes on the element
    // "cls" -> string/array
    //
    remCls( element, cls ) {
        if(this.isArray(cls)) {
            return remArrCls(element, cls);
        } else {
            return remCls(element, cls);
        }
    },

    // toggle a class on the element
    tglCls(element, cls) {
        tglCls(element, cls);
    },
    
}