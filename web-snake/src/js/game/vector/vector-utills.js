import {Error as CustomError} from './../../utils/general';

const VectorErrorMessages = {
    vectorConstructorArguments: "Invalid V2d constructor arguments (or maybe arguments length wrong)!",
    notDirVectError: "Given argument is not a direction vector!"
}

/*====================================================================================================*/
// Checks for number type
/*====================================================================================================*/
const checkForNumber = test => {
    return typeof test === "number";
}

/*====================================================================================================*/
// Checks if object type and has "X" and "Y" of number type
/*====================================================================================================*/
const checkForVectorObjectType = test => {
    if(typeof test === "object") {
        if("X" in test && "Y" in test) {
            if(checkForNumber(test.X) && checkForNumber(test.Y)) {
                return true;
            }
        }
    }
    return false;
}

/*====================================================================================================*/
// [EXPORT]
//
// Checks if vector arguments are passed in correctly and 
// Returns an object { X: number, Y: number } or throw error
/*====================================================================================================*/
const vectorArgs = args => {
    if(args.length === 1) {

        let arg = args[0];

        if(checkForNumber(arg)) { 
            return { X: arg, Y: arg} 
        }
        
        if(checkForVectorObjectType(arg)) {
            return arg; 
        }
    }

    if(args.length === 2) {
        let X = args[0]; let Y = args[1];

        if(checkForNumber(X) && checkForNumber(Y)) {
            return { X, Y };
        }
    }

    CustomError(VectorErrorMessages.vectorConstructorArguments, args);
}

/*====================================================================================================*/
// Gets the two types of scale
/*====================================================================================================*/
const getScale = (scale) => {
    return {
        plus: "e+" + scale,
        minus: "e-" + scale
    }
}

/*====================================================================================================*/
// [EXPORT]
//
// Round a number up to "scale" decimals
/*====================================================================================================*/
const roundUpTo = (num, scale = 3) => {
    const _scale = getScale(scale);
    // + sign in front triggers coercion to number type
    return +(Math.round(num + _scale.plus) +  _scale.minus);
}

/*====================================================================================================*/
// [EXPORT]
//
// Round a number up to a relative value
/*====================================================================================================*/
const roundUpToRelative = (num, rel) => {
    const mod = num % rel;

    //no roundig to do
    if(mod === 0) {
        return num;
    }
    //round up or down
    if(mod >= rel / 2) {
        return num - mod + rel;
    } else {
        return num - mod;
    }
}

/*====================================================================================================*/
// [EXPORT]
//
// Error if given argument is not a direction vector
/*====================================================================================================*/
const notDirectionVector = (direction) => {
    CustomError(VectorErrorMessages.notDirVectError, direction);
}

/*====================================================================================================*/
// EXPORTS
/*====================================================================================================*/
export {
    vectorArgs,
    roundUpTo,
    roundUpToRelative,
    notDirectionVector
}