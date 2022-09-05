import Reactor from './../utils/reactor';

const _state = {
    currentScore: 0,
    totalScore: 0,
    round: 0,
    spawns: 0,
    food: 0,
};

export default {

    setRegConf(regConfig) {
        _state.regConfig = regConfig;
    },

    getRegConf() {
        return _state.regConfig;
    },

    setP5(p5) {
        if(!_state.p5) {
            _state.p5 = p5;
        }
    },

    getP5() {
        return _state.p5;
    },

    setConf(config) {
        _state.config = config;
    },

    getConf() {
        return _state.config;
    },

    getReactor() {
        if(!_state.reactor) {
            _state.reactor = new Reactor();
        }

        return _state.reactor;
    },

    setSnake(snake) {
        _state.snake = snake;
    },

    getSnake() {
        return _state.snake;
    },

    setFood(food) {
        _state.food = food;
    },

    getFood() {
        return _state.food;
    },

    setTotalScore(score) {
        _state.totalScore = score;
    },

    getTotalScore() {
        return _state.totalScore;
    },

    setCurrentScore(score) {
        _state.currentScore = score;
    },

    getCurrentScore() {
        return _state.currentScore;
    },

    setRound(round) {
        _state.round = round;
    },

    getRound() {
        return _state.round;
    },

    setFood(food) {
        _state.food = food;
    },

    getFood() {
        return _state.food;
    },

    setSpawns(spawns) {
        _state.spawns = spawns;
    },

    getSpawns() {
        return _state.spawns;
    }
}