import * as V2dUtils from './vector-utills';

export default class V2d {
    constructor(...args) {
        const vector = V2dUtils.vectorArgs(args);
        
        this.X = vector.X;
        this.Y = vector.Y;
    }

/*====================================================================================================*/
// GET && SET
/*====================================================================================================*/

    getX() {
        return this.X;
    }

    getY() {
        return this.Y;
    }

    setX(val) {
        this.X = val;

        return this;
    }

    setY(val) {
        this.Y = val;

        return this;
    }

    set(valX, valY) {
        this.X = valX;
        this.Y = (valY || valX);

        return this;
    }

/*====================================================================================================*/
// OPERATIONS
/*====================================================================================================*/

    add(vector) {
        this.X += vector.X;
        this.Y += vector.Y;

        return this;
    }

    addCp(vector) {
        const vectorCp = this.copy();
        return vectorCp.add(vector);
    }

    sub(vector) {
        this.X -= vector.X;
        this.Y -= vector.Y;

        return this;
    } 

    subCp(vector) {
        const vectorCp = this.copy();
        return vectorCp.sub(vector);
    }

    mult(scalarX, scalarY) {
        this.X *= scalarX;
        this.Y *= (scalarY || scalarX);

        return this;
    }

    multCp(scalarX, scalarY) {
        const vectorCp = this.copy();
        return vectorCp.mult(scalarX, scalarY);
    }

    div(scalarX, scalarY) {
        this.X /= scalarX;
        this.Y /= (scalarY || scalarX);

        return this;
    }

    divCp(scalarX, scalarY) {
        const vectorCp = this.copy();
        return vectorCp.div(scalarX, scalarY);
    }

    magnitude() {
        return Math.sqrt((this.X * this.X) + (this.Y * this.Y));
    }

    normalized() {
        const X = this.X / this.magnitude();
        const Y = this.Y / this.magnitude();

        return new V2d(X, Y);
    }

    dist(vector) {
        const dX = vector.X - this.X;
        const dY = vector.Y - this.Y;

        return Math.sqrt((dX * dX) + (dY * dY));
    }

    dot(vector) {
        return ((this.X * vector.X) + (this.Y * vector.Y));
    }

    angle(vector) {
        const dot = this.dot(vector);
        const mag = this.magnitude() * vector.magnitude();

        return Math.acos(dot / mag) * (180 / Math.PI);
    }
    

/*====================================================================================================*/
// OTHER OPERATIONS
/*====================================================================================================*/

    equ(vector) {
        return  V2dUtils.roundUpTo(this.X) === V2dUtils.roundUpTo(vector.X) 
                        &&
                V2dUtils.roundUpTo(this.Y) === V2dUtils.roundUpTo(vector.Y);
    }

    inverse() {
        this.X *= -1;
        this.Y *= -1;

        return this;
    }

    abs() {
        this.X = Math.abs(this.X);
        this.Y = Math.abs(this.Y);

        return this;
    }

    round() {
        this.X = V2dUtils.roundUpTo(this.X);
        this.Y = V2dUtils.roundUpTo(this.Y);

        return this;
    }

    roundRelative(valueX, valueY) {
        this.X = V2dUtils.roundUpToRelative(this.X, valueX);
        this.Y = V2dUtils.roundUpToRelative(this.Y, (valueY || valueX));
    }

/*====================================================================================================*/
// UTILS
/*====================================================================================================*/

    copy() {
        return new V2d(
            this.X,
            this.Y
        )
    }

    toString() {
        return `{X: ${this.X}, Y: ${this.Y}}`;
    }

    toArray() {
        return [this.X, this.Y];
    }

/*====================================================================================================*/
// STATIC
/*====================================================================================================*/

    static UP() {
        return new V2d(0, -1);
    }

    static DOWN() {
        return new V2d(0, +1);
    }

    static LEFT() {
        return new V2d(-1, 0);
    }

    static RIGHT() {
        return new V2d(+1, 0);
    }

    static StringDirection(direction) {
        if(direction.equ(V2d.UP())){
            return "UP"
        }

        if(direction.equ(V2d.DOWN())){
            return "DOWN"
        }

        if(direction.equ(V2d.LEFT())){
            return "LEFT"
        }

        if(direction.equ(V2d.RIGHT())){
            return "RIGHT"
        }

        V2dUtils.notDirectionVector(direction);
    }
}