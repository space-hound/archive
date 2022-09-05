import State from './../state/state';
import V2d from './vector/Vector';

export const drawing = {
    rect(vect, size, color) {
        const p5 = State.getP5();
        p5.fill(color);
        p5.rect(vect.X, vect.Y, size, size);
    }
}

export const random = (min, max) => {
    const _min = Math.ceil(min);
    const _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min)) + _min;
} 

export const pickRandomPos = (width, height, size) => {
    const
    minX = 2,
    maxX = Math.floor(width / size) - 2;

    const
    minY = 2,
    maxY = Math.floor(height / size) - 2;

    const
    X = random(minX, maxX),
    Y = random(minY, maxY);
    
    return new V2d(X, Y).mult(size);
}

// export const pickRandomPos = (width, height, size) => {
//     const
//     minX = 10,
//     maxX = Math.round(width / size) - 10;

//     const
//     minY = 10,
//     maxY = Math.round(height / size) - 10;

//     const
//     X = random(minX, maxX),
//     Y = random(minY, maxY);
    
//     return new V2d(X, Y).mult(size);
// }