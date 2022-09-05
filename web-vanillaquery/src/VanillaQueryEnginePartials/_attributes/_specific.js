
export default {

    // gets or sets the attribute with key - "key"
    //
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
    //
    attr( element, key, value) {
        if(value !== undefined) {
            element.setAttribute(key, value);
        }

        return element.setAttribute(key);
    },

    // check if element has the attribute with key - "key"
    hasAttr( element, key ) {
        return element.hasAttribute(key);
    },

    // remove the attribute with key - "key"
    remAttr( element, key ) {
        return element.removeAttribute(key);
    },

    // sets or gets the property of an element
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties
    //
    // also:
    // https://javascript.info/dom-attributes-and-properties
    // https://lucybain.com/blog/2014/attribute-vs-property/
    // https://stackoverflow.com/questions/19246714/html-attributes-vs-properties
    //
    prop( element, key, value) {
        if(value !== undefined) {
            element[key] = value;
        }

        return element[key];
    },

    // check if element has a property with the key - "key"
    hasProp( element, key ) {
        return key in element;
    },

    // gets or sets the "data-" with the key "key"
    data( element, key, value ) {
        if(value !== undefined) {
            element.dataset[key] = value;
        }

        return element.dataset[key];
    },

    // remove the "data-" with the key - "key"
    remData( element, key ) {
        this.remAttr(element, `data-${key}`);
    },

    // gets or sets the property "value" of an element
    value( element, val ) {
        if(val !== undefined) {
            element.value = val;
        }

        return element.value;
    },

    // gets or sets the property "checked" of an element
    checked( element, state ) {
        element.checked = state;
    },

    // gets or sets the property "required" of an element
    required( element, state ) {
        element.required = state;
    },

    // gets or sets the property "readOnly" of an element
    readOnly( element, state ) {
        element.readOnly = state;
    },
}