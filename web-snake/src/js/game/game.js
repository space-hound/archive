import * as P5Lib from 'p5';
import State from './../state/state';
import Snake from './snake/Snake';
import Food from './food/Food';


let
    P5 = null,
    Engine = null,
    snake = null,
    food = null,
    isRunning = false,
    isPause = false;


export const init = () => {

    Engine = new P5Lib(p5 => {

        P5 = p5;

        State.setP5(p5);

        p5.setup = () => {

            const cvs = p5.createCanvas(State.getConf().map.width, State.getConf().map.height);
            cvs.parent(document.querySelector(".game__content .game-game"));
            p5.background("#fff");

            p5.noLoop();
        }

        p5.draw = () => {

            if (!isRunning) {
                return;
            }

            if (!isPause) {
                
                p5.frameRate(snake.speed);
                p5.background("#fff");

                snake.dead();

                if (!snake.isDead) {

                    snake.move();

                } else {
                    p5.noLoop();

                    isRunning = false;

                    State.getReactor().dispatchEvent("end");
                }

                snake.eat(food);
                food.draw();
                snake.draw();
            }
        }

        p5.keyPressed = (event) => {
            const key = event.key;

            if (key in State.getConf().directions) {
                snake.setDirection(State.getConf().directions[key]);
            }

            if(key === " ") {
                isPause = !isPause;
            }
        }

    });
}

export const start = () => {

    snake = new Snake();

    State.setSnake(snake);

    food = new Food();

    isRunning = true;

    isPause = false;

    P5.loop();
}