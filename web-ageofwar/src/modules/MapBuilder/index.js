import "./styles.scss";

import medium from "maps/medium.json";
import short from "maps/short.json";
import long from "maps/long.json";

import template from "./template";

const MAPS = {
    medium,
    short,
    long,
}


export default ( type ) => {
    
    const map = MAPS[type];
    const castles = [];

    map.forEach( castle => {

        const slag = {};

        slag.id = castle.id;
        slag.img = castle.img;

        slag.others = castle.others;
        slag.isConquest = castle.isConquest;
        slag.score = castle.score;
        slag.isOwned = castle.isOwned;
        slag.owner = castle.owner;

        slag.weapons = {};

        $.each(castle.weapons, function( key, value) {
            slag.weapons[key] = value;
        });

        $("#app").append(template(castle));

        slag.W = castle.W;
        slag.H = castle.H;

        slag.x = castle.x;
        slag.y = castle.y;

        castles.push(slag);

    });

    return castles;
}