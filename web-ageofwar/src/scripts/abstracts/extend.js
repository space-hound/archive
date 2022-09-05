(function( jQuery ) {

    jQuery.extend({

        randomInt( min, max ) {
            return Math.floor( Math.random() * (max - min) ) + min;
        },

        randomArray( array ) {
        
            if(array.length <= 0) {
                return null;
            }
    
            const min = 0, max = array.length;
    
            const randomIndex = this.randomInt(min, max);
    
            return {
                index: randomIndex,
                value: array[randomIndex]
            }
        }

    });

    jQuery.fn.replaceWithPush = function( html ) {
        
        const $html = $(html);

        this.replaceWith($html);
        
        return $html;
    }

})(jQuery)