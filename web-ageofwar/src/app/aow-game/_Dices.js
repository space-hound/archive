export const CURRENT_DICES = ( ) => {
    // viteza animatiei la zarurile de sus
    // viteza primului zar
    const INITIAL_TIME = 750;
    // restul zarurulor vor avea viteza INITIAL_TIME + (index zar * STEP_TIME)
    const STEP_TIME = 250;
    
    const STANDARD_DICES = [];

    for(let i = 0; i < 6; i++) {
        const time = INITIAL_TIME + ( STEP_TIME * (i + 1) );

        STANDARD_DICES.push({
            kind: "STANDARD",
            classes: "standard-dice",
            time
        });
    }

    return {
        dices: [
            {
                kind: "DUEL",
                classes: "duel-dice",
                time: INITIAL_TIME,
            },
            
            ...STANDARD_DICES,
    
            {
                kind: "ULTIMATE",
                classes: "ultimate-dice",
                time: INITIAL_TIME + STEP_TIME * 7,
            }
        ],
    
        callback( values ) {
            
        }
    }
}

export const DUEL_DICES = ( ) => {

    // viteza zarurulor de la duel si tura speciala
    const INITIAL_TIME = 1000;
    const STEP_TIME = 200;
    
    const STANDARD_DICES = [];

    for(let i = 0; i < 6; i++) {
        const time = INITIAL_TIME + ( STEP_TIME * (i + 1) );

        STANDARD_DICES.push({
            kind: "STANDARD",
            classes: "standard-dice",
            time
        });
    }

    return {
        dices: STANDARD_DICES,

        callback( values ) {
            
        }
    };
}