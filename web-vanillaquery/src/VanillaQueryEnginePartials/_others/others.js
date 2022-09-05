
export default {

    // return an array of the object's keys
    //
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    //
    keys( obj ) {
        return Object.keys(obj);
    },

    // run callback for/on every element of the arrat/object
    //
    // * should be modified to accept array like structures
    //
    each( object, callback ) {

        if(this.isArray(object)) {

            object.forEach( (value, index, array) => {
                callback(value, index, array);
            });

        } else {

            Object.keys(object).forEach( (value, index, array) => {
                callback( value, object[value], object, index, array );
            });

        }
    },

    // remove duplicates from an array using Set
    //
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    //
    unique( array ) {
        return [...new Set(array)];
    },

    join( ...args ) {

        let array = [];

        args.forEach( arg => {
            array.push(...this.toArray(arg));
        });

        return array;
    },

    concat( array, ...args ) {

        args.forEach( arg => {
            array.push(...this.toArray(arg));
        })
    },

    // returns a random integer from "min" to "max" (max - not included)
    //
    // https://www.w3schools.com/js/js_random.asp
    //
    randomInt( min, max ) {
        return window.Math.floor( window.Math.random() * (max - min) ) + min;
    },

    // takes an array and returns an object
    // containig a random index and the value at that index
    // null if no elements and first element if is only one
    //
    randomArray( array ) {
        const max = array.length;

        if(max === 0) {
            return null;
        }

        if(max === 1) {
            return {
                index: 0,
                value: array[0]
            };
        }

        const min = 0;

        const index = this.randomInt(min, max);

        return {
            index,
            value: array[index]
        }
    },
}