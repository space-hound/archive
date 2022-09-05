
export default {

    // check if given value is the "document" of current window
    isDoc( doc ) {
        return doc === this.vars.Doc;
    },

    // check if given value is the "documentElement" aka <html> of current window
    isDocElem( docElem ) {
        return docElem === this.vars.DocElem;
    },

    // check if given value is <head> of current window
    isHead( head ) {
        return head === this.vars.Head;
    },

    // check if given value is <body> of current window
    isBody( body ) {
        return body === this.vars.Body;
    },

    // check if given value is instance of "Element"
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Element
    //
    isElement( element ) {
        return element instanceof this.vars.Element;
    },

    // check if given value is instance of "HTMLElement"
    // 
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
    //
    isHTMLElem( htmlEl ) {
        return htmlEl instanceof this.vars.HTMLElem;
    },

    // check if given value is instance of "Node"
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Node
    //
    isNode( node ) {
        return node instanceof this.vars.Node;
    },

    // check if given value is instance of "Node" but not "Element"
    isOnlyNode( onlyNode ) {
        return this.isNode(onlyNode) && !this.isElement(onlyNode);
    },

    // check if given value is instance of "NodeList"
    isNodeList( nodeList ) {
        return nodeList instanceof this.vars.NodeList;
    },

    // check if an array contains only "HTMLElement" 's
    isHTMLArray( array ) {
        if(!this.isArray(array)) {
            return false;
        }

        for(let i = 0, len = array.length; i < len; i++) {
            if(!this.isHTMLElem(array[i])) {
                return false;
            }
        }
        
        return true;
    },

    isElemArray( array ) {
        if(!this.isArray(array)) {
            return false;
        }

        for(let i = 0, len = array.length; i < len; i++) {
            if(!this.isElement(array[i])) {
                return false;
            }
        }
        
        return true;
    },

    // check an element if it has given tag
    isTag( element, tag ) {
        if(!this.isHTMLElem(element)) {
            return false;
        }

        return element.tagName === tag.toUpperCase();
    }

}