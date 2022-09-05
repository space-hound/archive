const FIZZBUZZ = {

    CHECKERS: null,

    LOOKUP_TABLE: {
        0: "",
        3: "FIZZ",
        5: "BUZZ",
        7: "RAZZ",
    },

    modulo( number, check ) {

        if( (check !== 0) && (number % check === 0) ) {

            return this.LOOKUP_TABLE[check];

        }

        return this.LOOKUP_TABLE[0];
    },

    checkNumber( number ) {

        let string = "";

        this.CHECKERS.forEach( check => {

            string += this.modulo(number, check);

        });

        if(string !== "") {
            return string;
        }

        return number;
    },

    fizzBuzz( from = 1, to = 100 ) {

        this.CHECKERS = Object.keys(this.LOOKUP_TABLE).map( check => parseInt(check));

        for(let i = from; i <= to; i++) {
            console.log(this.checkNumber(i));
        }
    }
}