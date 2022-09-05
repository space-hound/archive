import V2d from './../vector/Vector';
import {drawing} from './../utils';
import * as SnakeUtils from './snake-utils';
import State from './../../state/state';

export default class Snake {
    constructor() {
        const conf = State.getConf();

        this.body = SnakeUtils.snakeBody(conf);

        this.direction = V2d[conf.direction]();
        this.speed = conf.speed;

        this.size = conf.size;
        this.width = conf.map.width;
        this.height = conf.map.height;

        this.isDead = false;

        this.mode = State.getConf().mode.hardcoreMode;
    }


/*====================================================================================================*/
/*====================================================================================================*/

    draw() {
        for(let i = 1; i < this.length(); i++) {
            drawing.rect(this.body[i], State.getConf().size, State.getConf().colors.body);
        }

        drawing.rect(this.head(), State.getConf().size, State.getConf().colors.head);
    }

    move() {
        this.checkForBounds();
        
        const head = this.head().copy();

        head.add(
            this.direction
                .copy()
                .mult(State.getConf().size)
        ).roundRelative(State.getConf().size);

        this.body.pop();
        this.body.unshift(head);
    }

/*====================================================================================================*/
/*====================================================================================================*/

    setDirection(dirStr) {
        if(this.canChangeDir(dirStr)) {
            this.direction = V2d[dirStr]();
        }
    }

    canChangeDir(dirStr) {
        const dir = V2d[dirStr]();
        return !(dir.mult(-1).equ(this.direction));
    }

/*====================================================================================================*/
/*====================================================================================================*/

    length() {
        return this.body.length;
    }

    head() {
        return this.body[0];
    }

    tail() {
        return this.body[this.length() - 1];
    }

/*====================================================================================================*/
/*====================================================================================================*/

    grow() {
        this.body.push(
            this.tail().copy()
        )

        return this;
    }

    shrink() {
        if(this.length < 2) {
            return;
        }

        this.body.pop();

        return this;
    }

/*====================================================================================================*/
/*====================================================================================================*/

    eat(food) {
        const index = food.pieces.findIndex( e => {
            return this.head().equ(e);
        })

        if(index === -1) { return; }

        food.remove(index);

        this.grow();

        if(food.pieces.length === 0) {
            food.respawn();
            this.grow();
            this.speed++;
        }

        State.setCurrentScore(State.getCurrentScore() + 1);
        State.setTotalScore(State.getTotalScore() + 1);
        State.getReactor().dispatchEvent("eat");
    }

    dead() {
        for(let i = 1, len = this.length(); i < len; i++) {
            if(this.head().equ(this.body[i])) {
                
                this.isDead = true;
                return true;
            }
        }

        return false;
    }

/*====================================================================================================*/
/*====================================================================================================*/

    checkForBounds() {
        const strDir = V2d.StringDirection(this.direction);
        switch(strDir) {
            case "UP": this.checkUp();
                break;
            case "DOWN": this.checkDown();
                break;
            case "LEFT": this.checkLeft();
                break;
            case "RIGHT": this.checkRight();
                break;
            default: console.log("NIMIC");
        }
    }

    checkUp() {
        if(this.head().Y < 0) {

            if(this.mode) {
                this.isDead = true;
            } else {
                this.head().setY(this.height);
            }

        } else {

        }

        // if(this.head().Y < 0 && this.head().Y >= -this.size) {
        //     this.head().setY(this.height - this.size);
        // } else {}
    }

    checkDown() {
        if(this.head().Y > this.height - this.size) {

            if(this.mode) {
                this.isDead = true;
            } else {
                this.head().setY(0);
            }

        } else {

        }

        // if(this.head().Y > this.height && this.head().Y <= this.height + this.size) {
        //     this.head().setY(0);
        // } else {}
    }

    checkLeft() {
        if(this.head().X < 0) {

            if(this.mode) {
                this.isDead = true;
            } else {
                this.head().setX(this.width);
            }
            
        } else {

        }
        
        // if(this.head().X < 0 && this.head().X >= -this.size) {
        //     this.head().setX(this.width - this.size);
        // } else {}
    }

    checkRight() {
        if(this.head().X > this.width - this.size) {

            if(this.mode) {
                this.isDead = true;
            } else {
                this.head().setX(0);
            }
            
        } else {

        }

        // if(this.head().X > this.width && this.head().X <= this.width + this.size) {
        //     this.head().setX(0);
        // } else {}
    }

}