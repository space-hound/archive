import CreateVanillaQueryEngine from "./CreateVanillaQueryEngine";
import CreateVanillaQueryFactory from "./CreateVanillaQueryFactory";

const VanillaQueryEngine = CreateVanillaQueryEngine({});

const VanillaQueryFactory = CreateVanillaQueryFactory(VanillaQueryEngine);

const VanillaQuery = function( query ) {
    return new VanillaQueryFactory(query);
}

Object.keys(VanillaQueryEngine).forEach( key => {
    VanillaQuery[key] = VanillaQueryEngine[key];
});

window.VanillaQuery = window.VQ = VanillaQuery;

export default VanillaQuery;





