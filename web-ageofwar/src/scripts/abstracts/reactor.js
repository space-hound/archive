const manager = jQuery({});

const Reactor = {
    on ( ) {
        manager.on.apply(manager, arguments);
    },

    off ( ) {
        manager.off.apply(manager, arguments);
    },

    emit ( ) {
        manager.trigger.apply(manager, arguments);
    }
}

window.$em = Reactor;

export default Reactor;