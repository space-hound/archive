import EventManager from "./EventManager";
import ReactorManager from "./ReactorManager";

export default {
    
    //
    // https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
    // https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    //

    // register an event listener
    on( type, element, selector, callback, options ) {
        EventManager.addEvent(type, element, selector, callback, options);
    },

    // removes an event listener
    off( type, element, selector, callback, options ) {
        EventManager.remEvent(type, element, selector, callback, options);
    },

    // return the event manager
    getEventManager( ) {
        return EventManager;
    },

    //
    // https://subscription.packtpub.com/book/web_development/9781783287314/1/ch01lvl1sec09/the-reactor-pattern
    // https://stackoverflow.com/questions/9138294/what-is-the-difference-between-event-driven-model-and-reactor-pattern
    // https://dzone.com/articles/understanding-reactor-pattern-thread-based-and-eve
    //

    // register a callback to be executed when _emit_ will be called with given name
    _on_( name, callback ) {
        ReactorManager.on(name, callback);
    },
 
    // remove a callback rom ReactorManager
    _off_( name, callback ) {
        ReactorManager.off(name, callback);
    },

    // run all callbaks register at the given name
    _emit_( name, args ) {
        ReactorManager.emit(name, args);
    },

    // returns the ReactorManager
    getReactorManager( ) {
        return ReactorManager;
    }
}