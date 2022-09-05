export default function( VanillaQueryFactory, vq ) {

    VanillaQueryFactory.prototype.at = function( index ) {

        if(vq.hasIndex(this._elements, index)) {
            return new VanillaQueryFactory(this._elements[index]);
        }
        
        return new VanillaQueryFactory();
    }

    VanillaQueryFactory.prototype.random = function( ) {

        return new VanillaQueryFactory(vq.random(this._elements).value);
    }

    VanillaQueryFactory.prototype.first = function( ) {

        return new VanillaQueryFactory(this._elements[0]);
    }

    VanillaQueryFactory.prototype.last = function( ) {

        return new VanillaQueryFactory(this._elements[this.length - 1]);
    }

    VanillaQueryFactory.prototype.parent = function( selector = undefined ) {

        let parents = vq.unique(
            this._elements.map( _el => {
                return vq.parent(_el);
            })
        );

        if(selector !== undefined) {
            parents = vq.filter(parents, selector);
        }

        return new VanillaQueryFactory(parents);
    },

    VanillaQueryFactory.prototype.parents = function ( selector = undefined ) {
        // TO DO
    }

    VanillaQueryFactory.prototype.children = function ( selector = undefined ) {

        let childrens = this._elements.map( _el => {
            return vq.children(_el);
        });

        childrens = vq.unique(vq.join(...childrens));

        if(selector !== undefined) {
            childrens = vq.filter(childrens, selector);
        }

        return new VanillaQueryFactory(childrens);
    }

    VanillaQueryFactory.prototype.siblings = function ( selector = undefined ) {

        let siblings = this._elements.map( _el => {
            return vq.siblings(_el);
        });

        siblings = vq.unique(vq.join(...siblings));

        if(selector !== undefined) {
            siblings = vq.filter(siblings, selector);
        }

        return new VanillaQueryFactory(siblings);

    }

    VanillaQueryFactory.prototype.next = function ( selector = undefined ) {
        // TO DO
    }

    VanillaQueryFactory.prototype.nextAll = function ( selector = undefined ) {
        // TO DO
    }

    VanillaQueryFactory.prototype.prev = function ( selector = undefined ) {
        // TO DO
    }

    VanillaQueryFactory.prototype.prevAll = function ( selector = undefined ) {
        // TO DO
    }

    VanillaQueryFactory.prototype.find = function ( selector = undefined ) {
        // TO DO
    }

    VanillaQueryFactory.prototype.closest = function ( selector = undefined ) {
        // TO DO
    }
}