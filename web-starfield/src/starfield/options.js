
const rnd = (min, max) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
}

const xGen = xIterator();
const yGen = yIterator();

const DEF_FIELD = {
    id: "starfield",

    get el() {
        return document.getElementById(this.id);
    },

    size() {
        return {
            width: this.el.clientWidth,
            height: this.el.clientHeight
        }
    },

    frames: 30,
    
    fieldBackground:  "#000000",

    starCount: 1000,

    starColors: [
        {
            ammount: .01,
            color: "#66FF66"
        },
        {
            ammount: .04,
            color: "#FF00CC"
        },
        {
            ammount: .15,
            color: "#FF355E"
        },
        {
            ammount: .2,
            color: "#50BFE6"
        },
        {
            ammount: .4,
            color: "#FFCC33"
        }
    ],
}

const DEF_STAR = {
    starBackground: "#FFFFFF",

    sparkle: true,

    starMaxSize: 6,

    get starMaxSpeed() {
        const maxSpeed = {
            small: 15,
            medium: 50,
            large: 90
        }

        const size = DEF_FIELD.size.width;

        if(size <= 420) {
            return maxSpeed.small;
        }

        if(size >= 1000) {
            return maxSpeed.large;
        }

        return maxSpeed.medium;
    },

    shakeValue(speed) {

        const ofSpeed = val => {
            return this.starMaxSpeed * val;
        }

        const shakeAngles = (variateMult, variateDiv) => {
            return ( Math.random() * variateMult / variateDiv ) * .01745;
        }

        if( speed >= ofSpeed(.95) ) {
            return shakeAngles(1, 2);
        } else if( speed >= ofSpeed(.90) && speed < ofSpeed(.95) ) {
            return shakeAngles(1, 3);
        } else if( speed >= ofSpeed(.80) && speed < ofSpeed(.90) ) {
            return shakeAngles(1.5, 4);
        } else {
            return 0;
        }
    },

    xComp() {
        return 1/4;
        //return xGen.next().value;
    },

    yComp() {
        return 1/2;
        //return yGen.next().value;;
    }
}

function* xIterator() {
    let index = .1;
    let sign = 1;

    while(true) {

        if(Math.floor(index) === 150) {
            sign = -1;
        }

        if(Math.floor(index) === 1) {
            sign = 1;
        }

        index = index + (sign * .002);

        yield 1 / index;
    }
}

function* yIterator() {
    let index = .1;
    let sign = 1;

    while(true) {

        if(Math.floor(index) === 150) {
            sign = -1;
        }

        if(Math.floor(index) === 1) {
            sign = 1;
        }

        index = index + (sign * .001);

        yield 1 / index;
    }
}

export default {...DEF_FIELD, ...DEF_STAR};