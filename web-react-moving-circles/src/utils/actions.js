import { getRndInt, getRndBinary, getRndColor } from './random';
import { SIZE, SPEED } from './options'

export default {

    createCircle(xBound, yBound) {
        const color = getRndColor();
        const ogSize = getRndInt(SIZE.min, SIZE.max);
        const size = ogSize;
        const dSize = Math.floor(size / 2); 
        const ogSpeed = getRndInt(SPEED.min, SPEED.max);
        const speed = ogSpeed;
        const xP = getRndInt(
            0 + size,
            xBound - size
        );
        const yP = getRndInt(
            0 + size,
            yBound - size
        );
        const xD = getRndBinary();
        const yD = getRndBinary();
        return { color, ogSize, size, dSize, ogSpeed, speed, xP, yP, xD, yD };
    },

    createCircles({ circlesCount, xBound, yBound }) {
        return [...new Array(circlesCount)].map(() => {
            return this.createCircle(xBound, yBound);
        });
    },

    move(circle, xBound, yBound) {
        circle.xP += circle.xD * circle.speed;
        circle.yP += circle.yD * circle.speed;
        if (circle.xP <= 0 + circle.dSize) {
            circle.xP = 0 + circle.dSize;
            circle.xD *= -1;
        }
        if (circle.xP >= xBound - circle.dSize) {
            circle.xP = xBound - circle.dSize;
            circle.xD *= -1;
        }
        if (circle.yP <= 0 + circle.dSize) {
            circle.yP = 0 + circle.dSize;
            circle.yD *= -1;
        }
        if (circle.yP >= yBound - circle.dSize) {
            circle.yP = yBound - circle.dSize;
            circle.yD *= -1;
        }
    },

    moveCircles({ circles, xBound, yBound }) {
        circles.forEach((circle) => {
            this.move(circle, xBound, yBound);
        });
    },

    toggleBlock(circle) {
        circle.isBlocked = !circle.isBlocked;
    },

    toggleBlockCircles({ circles }) {
        circles.forEach((circle) => {
            this.toggleBlock(circle);
        });
    },

    modDir(circle) {
        if(getRndBinary() === 1) {
            circle.xD *= -1;
        } else {
            circle.yD *= -1;
        }
    },

    modColor(circle) {
        circle.color = getRndColor();
    },

    modSpeed(circle, value) {
        circle.speed = circle.ogSpeed + (circle.ogSpeed * (value / 100));
    },

    modSize(circle, value) {
        const size = circle.ogSize + (circle.ogSize * (value / 100));
        circle.size = size;
        circle.dSize = Math.floor(size / 2);
    },

    modCircles(action, value, { circles }) {
        circles.forEach((circle) => {
            this[action](circle, value);
        });
    }
}