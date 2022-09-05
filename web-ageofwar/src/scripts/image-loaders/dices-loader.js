require.context("./../../../assets/dices/", true, /.png/);

const GENERAL = ["1sword", "2sword", "3sword", "archer", "pikeman", "knight"];

const SPECIAL = ["assassin", "elephant", "ship", "siege", "torch"];

const OTHERS = ["conquest", "duel", "peace"];

const WEAPONS = ["1sword", "archer", "pikeman", "knight", "assassin", "elephant", "ship", "siege", "torch"];

const EXTENSION = ( name ) => {
    return `${name}.png`;
}

export default {

    path: "./assets/dices/",

    general ( havePath = true ) {
        const links = [];

        GENERAL.forEach( dice => {

            let link = EXTENSION(dice);

            if(havePath) {
                link = this.path + link;
            }

            link.push(link);
        });

        return links;
    },

    special ( havePath = true ) {
        const links = [];

        SPECIAL.forEach( dice => {

            let link = EXTENSION(dice);

            if(havePath) {
                link = this.path + link;
            }

            link.push(link);
        });

        return links;
    },

    others ( havePath = true ) {
        const links = [];

        OTHERS.forEach( dice => {

            let link = EXTENSION(dice);

            if(havePath) {
                link = this.path + link;
            }

            link.push(link);
        });

        return links;
    },

    all ( havePath = true ) {
        return [...this.general(havePath), ...this.special(havePath), ...this.others(havePath)];
    },

    weapons( ) {
        const slag = {};

        slag["sword"] = this.path + EXTENSION(WEAPONS[0]);

        for(let i = 1; i < WEAPONS.length; i++) {
            slag[WEAPONS[i]] = this.path + EXTENSION(WEAPONS[i]);
        }

        return slag;
    }
}