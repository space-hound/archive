import State from './../../state/state';
import * as GeneralUtils from './../utils';

export default class Food {
    constructor() {        
        this.respawn();
    }

    respawn() {
        this.pieces = [];

        const len = GeneralUtils.random(State.getConf().food.min, State.getConf().food.max);

        for(let i = 0; i < len; i++) {
            this.pieces.push(
                this.pickRandomFoodPos()
            );
        }

        State.setSpawns(State.getSpawns() + 1);

        State.setFood(0);
        State.setFood(State.getFood() + len);
        
        State.getReactor().dispatchEvent("spawn");
    }

    draw() {
        this.pieces.forEach( piece => {
            GeneralUtils.drawing.rect(piece, State.getConf().size, State.getConf().colors.food);
        })
    }

    remove(index) {
        this.pieces.splice(index, 1);
    }

    pickRandomFoodPos () {
        let foodPiece = GeneralUtils.pickRandomPos(State.getConf().map.width, State.getConf().map.height, State.getConf().size);

        while(this.foodOverlaps(foodPiece)) {
            foodPiece = GeneralUtils.pickRandomPos(State.getConf().map.width, State.getConf().map.height, State.getConf().size);
        }
    
        return foodPiece;
    }

    foodOverlaps (piece) {
        this.pieces.forEach( e => {
            if(e.equ(piece)) {
                return true;
            }
        });

        State.getSnake().body.forEach( e => {
            if(e.equ(piece)) {
                return true;
            }
        });

        return false;
    }

}