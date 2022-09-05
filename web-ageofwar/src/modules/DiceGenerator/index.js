
export default {
    // fetele trebuie sa coincida cu ce ai in assets/dices cu numele imaginilor

    // pentru cele 6 zaruri din mijloc ( si de la duel si tura speciala)
    STANDARD: ["1sword", "2sword", "3sword", "archer", "pikeman", "knight"],
    // pentru ultimul zar
    ULTIMATE: ["assassin", "elephant", "ship", "siege", "torch"],
    // pentru primul zar (ce specifica daca e duel sau nu)
    DUEL: ["duel", "duel", "peace", "peace", "peace", "peace"],
    

    IMGPREFIX: "./assets/dices/",
    IMGSUFIX: ".png",

    // de cate ori sa se ruleze un zar
    SPINS: 18,

    TEMPLATE( kind ) {
        return `<img src="${this.IMGPREFIX + kind + this.IMGSUFIX}" data-type="${kind}">`;
    },

    PICK_ONE ( kind ) {
        return chance.pickone(this[kind]);
    },

    PICK_FINAL ( kind ) {
        const symbol = this.PICK_ONE(kind);

        let type, value = 1;

        if( !isNaN(symbol[0]) ) {
            type = symbol.substr(0, 0) + symbol.substr(1);
            value = parseInt(symbol[0]);
        } else {
            type = symbol;
        }

        const img = this.TEMPLATE( symbol );

        return {
            img,
            type,
            value
        }
    },

    PICK_DUMMY (kind ) {
        const dummy = [];

        for(let i = 0; i < this.SPINS - 1; i++) {
            dummy.push(this.TEMPLATE(this.PICK_ONE(kind)));
        }

        return dummy;
    },

    PICK ( kind ) {
        const dummy = this.PICK_DUMMY(kind);
        const final = this.PICK_FINAL(kind);

        dummy.push(final.img);

        let faces = dummy.reverse();

        return {
            faces,
            type: final.type,
            value: final.value
        }
    },
}