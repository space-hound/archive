import './style.scss';

import CoverModule from "modules/CoverModule";

import credits from "./credits.js";

const PATH = "./assets/";

const others = ( name, link ) => {

    const image = PATH + name + ".jpg";


    return `
        <div class="other-image credit-image" data-link="${link}">
            <img src="${image}">
        </div>
    `;

}

const faces = (image, link) => {
    return `
        <div class="face-image credit-image" data-link="${link}">
            <img src="${image}">
        </div>
    `;
}

const dices = (name, link) => {
    const image = PATH + "dices/" + name + ".png";

    return faces(image, link);
}

const castles = (name, link) => {
    const image = PATH + "castles/" + name + ".png";

    return faces(image, link);
}

$( function( event ) {
    
    CoverModule();

    $.each(credits.others, (key, value) => {
        $('.others').append(others(key, value));
    });

    $.each(credits.castles, (key, value) => {
        $('.castles').append(castles(key, value));
    });

    $.each(credits.dices, (key, value) => {
        $('.dices').append(dices(key, value));
    });

    $("#app").on("click", ".credit-image", function( event ){

        const data = $(this).data("link");

        if(data !== "") {
            window.open(data, '_blank');
        }
        
    });

});
