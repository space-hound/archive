/*
    https://github.com/space-hound/web-event-manager
*/

export default {

    /*
        Map(
            HTMLElement: Map(
                type(string): Map(
                    selector(string): Map(
                        callback: wrapperCallback
                    ),

                    selector(string): Map(
                        callback: wrapperCallback
                    ),

                    ...

                    noSelector(Symbol): Map(
                        callback: callback
                    )
                )

                ...
            )
        )
    */

    __events: new Map(),

    __directEventType: Symbol("Direct Event"),

    __DOMReadyCallbacks: [],

    __readyFinished: false,
    __readyNotAttached: true,

    ready( callback ) {
        
        if(this.__readyFinished) return;

        this.DOMReadyCallbacks.push(callback);
        
        if(this.__readyNotAttached) {

            const context = this;

            document.addEventListener("DOMContentLoaded", function DOM_READY(event) {
                
                context.__readyFinished = true;
                
                context.__DOMReadyCallbacks.forEach( callback => {
                    callback( event );
                });

                context.__DOMReadyCallbacks = [];

                document.removeEventListener("DOMContentLoaded", DOM_READY);

            });

            this.__readyNotAttached = false;
        }

    },

    __getMap( ...args ) {
        const len = args.length - 1;

        if(len < 0) {
            return this.__events;
        }

        let i = 0, deepth = this.__events.get(args[i++]);

        while( i <= len ) {
            deepth = deepth.get(args[i++]);
        }

        return deepth;
    },

    __checkMap( ...args ) {
        const len = args.length - 1;

        if(len < 0) {
            throw new RangeError( "EventManager.checkMap");
        }
        
        const check = args[len];
        const deepth = args.filter( (value, index) => index < len );

        const map = this.__getMap(...deepth);

        if(!map.has(check)) {
            map.set(check, new Map());
        }

    },

    
    // register a new event
    addEvent( type, element, selector, callback, options = false ) {
        
        if(element === null || element === undefined) {
            throw new Error("The given 'element' parameter is not an HTML Element");
        }

        this.__checkMap(element);
        
        this.__checkMap(element, type);

        if(callback === undefined) {
            this.__addDirectEvent(type, element, selector, options);
        } else {
            this.__addDelegateEvent(type, element, selector, callback, options);
        }
    },

    __addDirectEvent( type, element, callback, options ) {
        
        this.__checkMap(element, type, this.__directEventType);
        
        const callbacks = this.__getMap(element, type, this.__directEventType);

        if(!callbacks.has(callback)) {

            callbacks.set(callback, callback);

            element.addEventListener(type, callback, options);
        }

    },


    __addDelegateEvent(type, element, selector, callback, options) {

        this.__checkMap(element, type, selector);

        const callbacks = this.__getMap(element, type, selector);

        if(!callbacks.has(callback)) {

            const realCallback = ( event ) => {

                const closest = this.__closest(event.target, element, selector);

                if(closest !== null) {
                    callback(event, closest);
                }

            }

            callbacks.set(callback, realCallback);

            element.addEventListener(type, realCallback, options);
        }
    },

    remEvent(type, element, selector, callback, options) {

        try {

            const remProps = this.__remProps(type, element, selector, callback);

            const { REALCALLBACK, SELECTOR, CALLBACK } = remProps;

            element.removeEventListener(type, REALCALLBACK, options);

            this.__cleanUp(type, element, SELECTOR, CALLBACK);

        } catch {
            
            console.warn(`EventManager.remEvent for ${element, type} was not removed!`);

        }
    },


    __remProps(type, element, selector, callback) {

        let SELECTOR, CALLBACK;

        if(callback === undefined) {
            SELECTOR = this.__directEventType;
            CALLBACK = selector;
        } else {
            SELECTOR = selector;
            CALLBACK = callback;
        }

        const REALCALLBACK = this.__getMap(element, type, SELECTOR, CALLBACK);

        return { REALCALLBACK, SELECTOR, CALLBACK };
    },

    __cleanUp(type, element, selector, callback) {

        this.__getMap(element, type, selector).delete(callback);

        if(this.__getMap(element, type, selector).size === 0) {
            this.__getMap(element, type).delete(selector);
        }

        if( this.__getMap(element, type).size === 0 ) {
            this.__getMap( element ).delete(type);
        }

        if( this.__getMap(element).size === 0 ) {
            this.__getMap().delete(element);
        }
    
    },

    __closest( element, destination, selector ) {
        let current = element;

        while( current !== destination.parentNode ) {

            if(current === document) {
                return null;
            }
            
            if(current.matches(selector)) {
                return current;
            }

            current = current.parentNode;
        }

        return null;
    }
}