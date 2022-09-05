APP.UTILS = {

    async wait ( time ) {
        return new Promise( resolve => {
            setTimeout(()=> {
                resolve('resolved');
            }, time)
        });
    },

    async run ( callback, parameters ) {
        return new Promise( resolve => {

            const result = callback(parameters);
        
            resolve(result);

        });
    },

    randomColor( ) {
        const letters = "0123456789ABCDEF";

        let color = "";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
    }
}