import variables from "./VanillaQueryEnginePartials/_variables/variables";
import evaluators from "./VanillaQueryEnginePartials/_evaluators/evaluators";
import transformers from "./VanillaQueryEnginePartials/_transformers/transformers";
import traversal from "./VanillaQueryEnginePartials/_traversal/traversal";
import manipulation from "./VanillaQueryEnginePartials/_manipulation/manipulation";
import attributes from "./VanillaQueryEnginePartials/_attributes/attributes";
import styles from "./VanillaQueryEnginePartials/_styles/styles";
import events from "./VanillaQueryEnginePartials/_events/events";
import others from "./VanillaQueryEnginePartials/_others/others";

const components = [ 
    evaluators, transformers, traversal, manipulation, attributes, styles, events, others 
];

export default ( VanillaQueryObject ) => {

    Object.defineProperty(VanillaQueryObject, 'vars', {
        value: {},
        configurable: true,
        enumerable: true
    });
    
    Object.keys(variables).forEach( key => {
    
        Object.defineProperty(VanillaQueryObject.vars, key, {
            get: variables[key],
            configurable: true,
            enumerable: true
    
        });
    
    });

    components.forEach( component => {

        Object.keys(component).forEach( key => {
    
            Object.defineProperty(VanillaQueryObject, key, {
                value: component[key],
                configurable: true,
                enumerable: true
        
            });
    
        });
    
    });

    return VanillaQueryObject;
}