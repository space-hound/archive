const APP = {};

APP.FIZZBUZZ = {

    CHECKERS: null,

    min: 1,
    max: 100,

    chunck: 101,

    running: false,

    delay: 50,

    LOOKUP_TABLE: {
        0: ["", "FFFFFF"],
        3: ["FIZZ", "E02A36"],
        5: ["BUZZ", "1678C5"],
        7: ["RAZZ", "A21A75"],
    },

    modulo( number, check ) {

        if( (check !== 0) && (number % check === 0) ) {

            return this.LOOKUP_TABLE[check];

        }

        return this.LOOKUP_TABLE[0];
    },

    checkNumber( number ) {

        let string = this.LOOKUP_TABLE[0][0];

        let color = this.LOOKUP_TABLE[0][1];

        this.CHECKERS.forEach( check => {

            let result = this.modulo(number, check);

            string += result[0];
            
            if(result[1] !== this.LOOKUP_TABLE[0][1]) {
                color = result[1];
            }

        });

        if(string !== "") {
            return {number, string, color};
        }

        return {number, string, color};
    },

    async fizzBuzz( result, finish ) {

        this.CHECKERS = Object.keys(this.LOOKUP_TABLE).map( check => parseInt(check));

        for(let i = this.min; i <= this.max; i++) {

            if(this.running) {

                await APP.UTILS.wait(this.delay);

                result(this.checkNumber(i));

            } else {

                break;

            }
        }

        finish();
    }
}