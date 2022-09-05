import DEF from "./options";
import Star from "./Star";


let P5_API = null;

export default {
    canvas: null,

    __createCanvas() {
        this.canvas = P5_API.createCanvas(
            DEF.size().width,
            DEF.size().height
        );

        this.canvas.parent(DEF.id);

        P5_API.background(DEF.fieldBackground);
    },

    __initStars() {
        Star.SetAPI(P5_API);

        this.stars = [];
        
        for(let i = 0; i < DEF.starCount; i++) {
            this.stars[i] = new Star();
        }

        let begin = 0;
        DEF.starColors.forEach(color => {
            const end = Math.round(this.stars.length * color.ammount);
            
            for(let i = begin; i < end; i++) {
                this.stars[i].color = color.color;
            }

            begin = end;
        });
    },

    setup(api) {
        P5_API = api;

        P5_API.frameRate(DEF.frames);

        this.__createCanvas();
        this.__initStars();
    },

    __clearField() {
        P5_API.background(DEF.fieldBackground);
        P5_API.translate(P5_API.width / 2, P5_API.height / 2);
    },

    __computeSpeed() {
        return P5_API.map(P5_API.mouseY, 0, P5_API.height, DEF.starMaxSpeed / 10, DEF.starMaxSpeed);
    },

    __rotateField(speed) {
        P5_API.rotate(DEF.shakeValue(speed));
        P5_API.rotate(-DEF.shakeValue(speed)); 
    },

    __showStars(speed) {
        const 
        xC = DEF.xComp(), 
        yC = DEF.yComp();

        for(let i = 0; i < this.stars.length; i++) {
            this.stars[i].update(speed);
            this.stars[i].show(xC, yC);
        }
    },

    draw() {

        this.__clearField();

        const speed = this.__computeSpeed();

        this.__rotateField(speed);
        
        this.__showStars(speed);
    },

    onWindowResized() {
        console.log(DEF.size());
        P5_API.resizeCanvas(DEF.size().width, DEF.size().height);
    },

    onMouseClicked() {
        DEF.sparkle = !DEF.sparkle;
    }
}