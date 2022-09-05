/*
    https://gist.github.com/mohsen1/5123533
    https://github.com/space-hound/web-reactormanager
*/

class ReactorEvent {
    constructor( name ) {
        this.name = name;
        this.callbacks = [];
    }

    registerCallback( callback ) {
        const index = this.callbacks.indexOf(callback);
        
        if(index === -1) {
            this.callbacks.push(callback);
        }
    }

    unregisterCallback( callback ) {
        const index = this.callbacks.indexOf(callback);

        if(index !== -1) {
            this.callbacks.splice(index, 1);
        }
    }
}

class ReactorManager {
    constructor() {
        this.events = {};
    }

    registerReactorEvent( name ) {
        if(!this.events.hasOwnProperty(name)) {
            this.events[name] = new ReactorEvent(name);
        }

        return this.events[name];
    }
    
    on( name, callback ) {
        this.registerReactorEvent(name).registerCallback(callback);
    }

    off( name, callback ) {
        this.events[name].unregisterCallback(callback);
    }

    emit( name, args ) {
        this.events[name].callbacks.forEach( callback => {
            callback(args);
        });
    }
}

export default new ReactorManager();