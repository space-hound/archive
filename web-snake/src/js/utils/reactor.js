class ReactorEvent {
    constructor(name, callbacks) {
        this.name = name;
        this.callbacks = callbacks || [];
    }

    registerCallback (callback) {
        this.callbacks.push(callback);
    }
}

class Reactor {
    constructor(events) {
        this.events = events || {};
    }

    have (eventName) {
        return this.events.hasOwnProperty(eventName); 
    }

    addEventListener (name, callback) {
        if(! this.have(name)) {
            this.events[name] = new ReactorEvent(name);
        }

        this.events[name].registerCallback(callback);
    }

    dispatchEvent (name, args) {
        this.events[name].callbacks.forEach( callback => {
            callback(args);
        });
    }
}

export default Reactor;

