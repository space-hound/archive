
export default {

    // check is a given value is "null"
    isNull( nill ) {
        return nill === this.vars.Null;
    },

    // check is a given value is "undefined"
    isUndef( undef ) {
        return undef === this.vars.Undef;
    },

    // check is a given value is "NaN" (not a number)
    isNan( nan ) {
        return window.isNaN(nan);
    },

    // check if a given value if of type "Function"
    isFunc( func ) {
        return typeof func === "function";
    },

    // check if a given value is empty - "Array" or "String" or "Object"
    // * should be modified to check arrays, arrays like structures, objects, strings
    //   else should throw an error
    isEmpty( obj ) {
        if(this.isArray(obj)) {
            return obj.length === 0;
        } else if(this.isString(obj)) {
            return obj === "";
        } else {
            this.keys(obj).length === 0 && obj.constructor === window.Object;
        }
    },

    isIterable( obj ) {
        return obj != null && typeof obj[Symbol.iterator] === 'function';
    },

    // check if given value is an "Array"
    isArray( array ) {
        return window.Array.isArray(array);
    },
    
    // check if "index" is between the bounds of the "array"
    hasIndex( array, index ) {
        return index >= 0 && index < array.length;
    },

    // check if a given value is of type "string"
    isString( string ) {
        return typeof string === "string";
    },

    // check if a given value is numerical - ( useful for strings )
    isNumeric( obj ) {
        return this.isNan(window.parseFloat(obj)) && this.isFinite(obj);
    },

    // check if given value is of type "number"
    isNumber( number ) {
        return typeof number === "number";
    },

    // check if given value is finite
    isFinite( numeric ) {
        return window.isFinite(numeric);
    },

    // check if given value is "float"
    //
    // https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer
    //
    isFloat( number ) {
        if(!this.isNumber(number)) {
            return false;
        }

        return number % 1 !== 0;
    },

    // check if given value is "integer"
    //
    // https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer
    //
    isInt( number ) {
        if(!this.isNumber(number)) {
            return false;
        }

        return number % 1 === 0;
    }
}