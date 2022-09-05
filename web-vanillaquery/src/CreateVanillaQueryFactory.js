import AttachTraversal from "./VanillaQueryFactoryPartials/traversal";
import AttachManipulation from "./VanillaQueryFactoryPartials/manipulation";
import AttachStyles from "./VanillaQueryFactoryPartials/styles";
import AttachAttributes from "./VanillaQueryFactoryPartials/attributes";
import AttachEvents from "./VanillaQueryFactoryPartials/events";

export default ( vq ) => {

    const VanillaQueryType = "VanillaQueryObject";
    
    class VanillaQueryFactory {

        constructor ( query ) {
            this._init(query);
        }

        _init ( query ) {
            if(vq.isString(query)) {

                this._elements = vq.queryAll(query);

            } else if(vq.isElement(query) || vq.isNodeList(query) || vq.isElemArray(query)) {

                this._elements = vq.toArray(query);

            } else if(query.type === VanillaQueryType) {

                this._elements = vq.toArray(query._elements);

            } else {

                this._elements = [];
            }
        }

        /*=======================================================================*/

        get length ( ) {
            return this._elements.length;
        }

        get type ( ) {
            return VanillaQueryType;
        }

        /*=======================================================================*/

    }

    AttachTraversal(VanillaQueryFactory, vq);
    AttachManipulation(VanillaQueryFactory, vq);
    AttachStyles(VanillaQueryFactory, vq);
    AttachAttributes(VanillaQueryFactory, vq);
    AttachEvents(VanillaQueryFactory, vq);

    return VanillaQueryFactory;
}