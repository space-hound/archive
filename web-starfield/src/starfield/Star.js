import DEF from "./options";

let P5_API = null;

export default class Star {

    /*===========================================================================*/
    //  CONSTRUCTOR
    /*===========================================================================*/

    constructor() {
        this.x = P5_API.random(-P5_API.width, P5_API.width);
        this.y = P5_API.random(-P5_API.height, P5_API.height);
        this.z = P5_API.random(P5_API.width);
        this.pz = this.z;

        this.color = DEF.starBackground;
    }

    /*===========================================================================*/
    //  UPDATE
    /*===========================================================================*/

    update(speed) {
        this.z = this.z - speed;

        if (this.z < 1) {
            this.z = P5_API.width;
            this.x = P5_API.random(-P5_API.width, P5_API.width);
            this.y = P5_API.random(-P5_API.height, P5_API.height);
            this.pz = this.z;
        }
    }

    /*===========================================================================*/
    //  SHOW
    /*===========================================================================*/
    
    show(xC, yC) {

        const {sx, sy, r} = this.__computeHead();
        const {px, py} = this.__computeTail();

        this.__showHead(sx, sy, r);
        this.__showTail(sx, sy, px, py , r, xC, yC);
    
    }

    /*===========================================================================*/
    //  __COMPUTING
    /*===========================================================================*/

    __computeHead() {
        const sx = P5_API.map(this.x / this.z, 0, 1, 0, P5_API.width);
        const sy = P5_API.map(this.y / this.z, 0, 1, 0, P5_API.height);

        let r = 0;

        if(DEF.sparkle) {
            r = P5_API.random(0, DEF.starMaxSize / 2);
        } else {
            r = P5_API.map(this.z, 0, P5_API.width, DEF.starMaxSize, 0);
        }

        return {sx, sy, r};
    }

    __computeTail() {
        const px = P5_API.map(this.x / this.pz, 0, 1, 0, P5_API.width);
        const py = P5_API.map(this.y / this.pz, 0, 1, 0, P5_API.height);

        this.pz = this.z;

        return {px, py}
    }

    /*===========================================================================*/
    //  __SHOWING
    /*===========================================================================*/

    __showHead(sx, sy, r) {
        P5_API.noStroke();
        P5_API.fill(this.color);
        P5_API.ellipse(sx, sy, r, r);
    }

    __showTail(sx, sy, px, py, r, xC, yC) {
        P5_API.strokeWeight(r);
        P5_API.stroke(this.color);

        P5_API.line(
            px * xC, py * yC, 
            sx * xC, sy * yC
        );
    }

    /*===========================================================================*/
    //  STATIC
    /*===========================================================================*/

    static SetAPI(api) {
        P5_API = api;
    }
}