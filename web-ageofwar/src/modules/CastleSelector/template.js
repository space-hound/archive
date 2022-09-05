import CastleLoader from "CastleLoader";

const singleCastle = (img) => {
    return `
        <div class="castle-selector__col">
            <div class="castle-selector__castle">
                <img src="${img}">
            </div>
        </div>
    `;
}

const delimiter = ( ) => {
    return `
        <div class="castle-selector__col">
            <div class="castle-selector__delimiter">
            </div>
        </div>
    `;
}

const doubleCastle = ( img1, img2 ) => {
    let doubleCastle = "";

    doubleCastle += singleCastle(img1);
    doubleCastle += singleCastle(img2);
    doubleCastle += delimiter();

    return doubleCastle;
}

const innerTemplate = ( ) => {
    const conqIMGS = CastleLoader.conquerables();
    const othersIMGS = CastleLoader.others();

    let template = "";

    for(let i = 0; i < conqIMGS.length; i += 2) {
        template += doubleCastle(conqIMGS[i], conqIMGS[i+1]);
    }

    othersIMGS.forEach( other => {
        template += singleCastle( other );
    })

    return template;
}

export default ( ) => {
    return `
        <div id="castle-selector">
            <div class="castle-selector__container">
                <div class="castle-selector__row">
                    ${innerTemplate()}
                </div>
            </div>
        </div>
    `;
}