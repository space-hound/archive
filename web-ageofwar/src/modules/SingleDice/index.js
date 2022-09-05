import "./style.scss";
import template from "./template";
import DiceGenerator from "./../DiceGenerator";


const options = {
    classes: "",
    transition: "",
    kind: "",
}

export default class SingleDice {

    constructor( $element, options ) {

        this.options = options;

        this.$element = $element.replaceWithPush(template(this.options.classes));

        this.$faces = this.$element.find(".aow-dice__face");

        this.rolling = false;

        const initialImg = DiceGenerator.PICK_FINAL(this.options.kind).img;

        this.$faces.append( initialImg );
    }

    clearFaces( ) {
        this.$faces.empty();
    }

    roll(  callback ) {

        if(this.rolling) return null;

        this.rollling = true;

        const diceValue = DiceGenerator.PICK(this.options.kind);
        
        this.animate( diceValue.faces, callback );

        return {
            type: diceValue.type,
            value: diceValue.value
        }
    }

    animate( images, callback) {

        this.clearFaces();

        this.$faces.append( images.join("") );

        const initial_top = -( (images.length - 1) * this.$faces.children().last().outerHeight() );
        const final_top = 0;

        const that = this;

        this.$faces.css("top", initial_top);

        this.$faces.animate({

            "top": final_top,

        }, this.options.time, function() {

            that.rollling = false;

            if(callback) {
                callback();
            }

        });

    }
}