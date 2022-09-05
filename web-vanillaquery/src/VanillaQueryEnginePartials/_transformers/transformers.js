
export default {
    
    // converts an array like structure into an "array"
    //
    // array like structure
    //                  -> has a property length (>= 0)
    //                  -> has in keys from 0 to length - 1
    //                  -> is iterable arrayLikeStructure[integer]
    //
    toArray( object ) {

        if(this.isIterable(object)) {
            return [...object];
        } else {
            return [object];
        }
    },

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString
    //
    // conver a given value to "string"
    //
    // initial was "toString", but all these functions will be added
    // to a Function in the end as properties and there is a problem
    // adding a property "toString" from an "Object" to a "Function"
    // as the function will appear undefined when the js engine will
    // try to convert it to string eg: console.log(), and that is not
    // good for debugging
    //
    // also i couldn't figure this out, thank to Micutzu for help
    // he was the one who figured that out and shown me what was
    // wrong
    //
    // Micutzu: https://github.com/micku7zu
    //

    toStr( object ) {
        return String(object);
    },

    // convert a given value to "integer"
    toInt( object ) {
        return window.parseInt(object);
    },

    // convert a given value to "float"
    toFloat( object ) {
        return window.parseFloat(object);
    },

    // convert and round a given value
    toRound( object ) {
        return window.Math.round(this.toFloat(object));
    },

    // transform a numeric value into a css dimension
    // default is pixels
    //
    // useful for css property manipulations
    //
    toUnit( numeric, unit = "px" ) {
        return `${this.toRound(numeric)}${unit}`;
    },
    
}