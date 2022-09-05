export class CEvent {
    constructor ( eventName ) {
        this.name = eventName;
        this.callbacks = [];
    }

    registerCallback (callback) {
        this.callback.push(callback);
    }
}

export class CReactor {
    constructor () {
        this.events = {};
    }

    registerEvent( eventName ) {
        let event = new CEvent(eventName);
        this.events[eventName] = event;
    }

    dispatchEvent (eventName, eventArgs) {
        this.events[eventName].callbacks.forEach( cb => {
            cb(eventArgs);
        })
    }

    addEventListener = function(eventName, callback) {
        this.events[eventName].registerCallback(callback);
    }

    removeEventListener = function(eventName) {
        this.events[eventName] = null;
    }
}