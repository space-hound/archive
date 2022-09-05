require.context("./../../../assets/castles/", true, /.png/);

const PREFIXES = ['main', 'aux', 'others'];
const SUFIXES = [1, 2, 3, 4, 5, 6];

const EXTENSION = ( name ) => {
    return `${name}.png`;
}


export default {

    path: "./assets/castles/",

    all ( havePath = true ) {
        const links = [];

        SUFIXES.forEach( sufix => {

            PREFIXES.forEach( prefix => {

                let link = EXTENSION(`${prefix}${sufix}`);

                if(havePath) {
                    link = this.path + link;
                }

                links.push(link);

            });

        });

        return links;
    },

    conquerables ( havePath = true ) {
        const links = [];

        SUFIXES.forEach( sufix => {

            let link1 = EXTENSION(`${PREFIXES[0]}${sufix}`);
            let link2 = EXTENSION(`${PREFIXES[1]}${sufix}`);

            if(havePath) {
                link1 = this.path + link1;
                link2 = this.path + link2;
            }

            links.push(link1);
            links.push(link2);
            
        });

        return links;
    },

    others ( havePath = true ) {
        const links = [];

        SUFIXES.forEach( sufix => {
            
            let link = EXTENSION(`${PREFIXES[2]}${sufix}`);

            if(havePath) {
                link = this.path + link;
            }

            links.push(link);

        });

        return links;
    }
}