
export default {
    
    // return the window (current)
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Window
    //
    Window() {
        return window;
    },

    // return the document (current)
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/document
    //
    Doc() {
        return window.document;
    },

    // returns the documentElement (current)
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
    //
    DocElem() {
        return window.document.documentElement;
    },

    // returns the head of the current document
    Head() {
        return window.document.head;
    },

    // returns the head of the current document
    Body() {
        return window.document.body;
    },

    // interface
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Element
    //
    Element() {
        return window.Element;
    },

    // interface
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
    //
    HTMLElem() {
        return window.HTMLElement;
    },

    // interface
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Node
    //
    Node() {
        return window.Node;
    },

    // collection of nodes
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/NodeList
    //
    NodeList() {
        return window.NodeList;
    },

    // returns null
    Null() {
        return null;
    },

    // return undefined
    Undef() {
        return undefined;
    },

    // return an empty object
    EmptyObj() {
        return window.Object.create(null);
    },

    // returns the empty string
    EmptyStr() {
        return "";
    }

}