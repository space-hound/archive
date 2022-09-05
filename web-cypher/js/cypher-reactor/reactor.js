const REACTOR = ( function () {

    function ReactorEvent(name) {
        this.name = name;
        this.callbacks = [];
    }
    
    ReactorEvent.prototype.registerCallback = function(callback) {
        this.callbacks.push(callback);
    }

    function Reactor() {
        this.events = {};
    }

    Reactor.prototype.register = function( name ) {
        const event = new ReactorEvent(name);
        this.events[name] = event;
    }

    Reactor.prototype.emmit = function( name, args ) {
        this.events[name].callbacks.forEach( callback => {
            callback(args);
        });
    }

    Reactor.prototype.add = function( name, callback ) {
        if(this.events[name] === undefined) {
            this.register(name);
            this.events[name].registerCallback(callback);
        } else {
            this.events[name].registerCallback(callback);
        }
    }

    return new Reactor();

})();

