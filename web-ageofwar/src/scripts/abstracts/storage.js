
/*

//--------------------------------------------------------------//
    dummy template for the object at "aow" key

    {
        current: {
            players: 3,
            type: "long",
            ...
        },

        saved: [
            {
                players: 3,
                type: "long",
                ...
            },
        ]
    }

//--------------------------------------------------------------//

*/

// shortcut to "JSON.parse"
const toJSON = str => JSON.parse(str);
// shortcut to "JSON.stringify"
const toSTR = obj => JSON.stringify(obj);

// utility object holding some functions that
// save get and clear the "window.localStorage"
const storage = {
    save( obj ) {
        // convert object to string
        const jObj = toSTR( obj );
        // then svae to "window.localStorage" 
        localStorage.setItem("aow", jObj);
    },

    get( ) {
        // get from "window.localStorage" as string
        const jObj = localStorage.getItem("aow");
        // return it as object (JSON)
        return toJSON(jObj);
    },

    clear( ) {
        // just clear the "window.localStorage"
        // never used
        localStorage.clear();
    }
}

const gameStorage = {

    // this must be called before any use of
    // other methods in this object
    //
    // basically this check the "window.localStorage"
    // if is anything saved at key "aow"
    // if not create empty dummy data
    // so other methods won't crash
    // alternative would be to check
    // inside every method of this obj
    // but that is tedious
    check( ) {
        let aow = storage.get();

        if(!aow) {
            aow = {
                current: null,
                saved: []
            }

            storage.save(aow);
        }
    },

    // get whole object at "aow" key
    get( ) {
        const aow = storage.get();
        return aow;
    },

    // set whole object at "aow" key
    set( aow ) {
        storage.set(aow);
    },

    // get only the property current of object at "aow" key
    //
    // current meatn to be an object
    getCurrent( ) {
        const aow = storage.get();
        return aow.current;
    },

    // set only the property current of object at "aow" key
    setCurrent( current ) {
        const aow = storage.get();
        aow.current = current;
        storage.save(aow);
    },

    // del only the property current of object at "aow" key
    delCurrent( ) {
        const aow = storage.get();
        aow.current = undefined;
        storage.save(aow);
    },

    // add an element at the end
    // of the saved property of the
    // obj at key "aow"
    //
    // saved meant to be an arrray of objects
    addSaved( toSave ) {
        const aow = storage.get();
        aow.saved.push(toSave);
        storage.save(aow)
    },
    
    // get element at index
    // of the saved property of the
    // obj at key "aow"
    getSavedAt( index ) {
        const aow = storage.get();
        return aow.saved[index];
    },

    // set element at index
    // of the saved property of the
    // obj at key "aow"
    setSavedAt( index, toSave ) {
        const aow = storage.get();
        aow.saved[index] = toSave;
        storage.save(aow);
    },

    // delete the element at index
    // of the saved property of the
    // obj at key "aow"
    delSavedAt( index ) {
        const aow = storage.get();
        const oldSaves = aow.saved;
        aow.saved = [];

        for(let i = 0, len = oldSaves.length; i < len; i++) {
            
            if(index !== i) {
                aow.saved[i] = oldSaves[i];
            }
        }

        storage.save(aow);
    },

    // get the saved property of the
    // obj at key "aow"
    getSaved( ) {
        const aow = storage.get();
        return aow.saved;
    },

    // set the saved property of the
    // obj at key "aow"
    setSaved( saved ) {
        const aow = storage.get();
        aow.saved = saved;
        storage.save(aow);
    },

    // delete the saved property of the
    // obj at key "aow"
    delSaved( ) {
        const aow = storage.get();
        aow.saved = [];
        storage.save(aow);
    },

    // get the length of the saved games
    savedLen( ) {
        const aow = storage.get();
        return aow.saved.length;
    },

    // check if there are any saved 
    // games if not then return true
    // else return false
    isSavedEmpty() {
        const aow = storage.get();

        return aow.saved.length === 0;
    }
}

// check if there is any data related
// to the game, else create it to prevent
// crasesh when trying to acces that data
// if there is any data, dummy data
// will be created
gameStorage.check();
// attach it to the window, making it global
// no needing to import it everywhere
window.GameStorage = gameStorage;

export default gameStorage;