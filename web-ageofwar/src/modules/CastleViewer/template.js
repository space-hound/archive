export const castleViewerTemplate = ( ) => {

    return `
        <div id="castle-viewer" class="d-none">
            <div class="castle-viewer__close">
                <i class="fas fa-times"></i>
            </div>
            <div class="castle-viewer__content">
                <div class="castle-viewer__image">
                    <img src="./../../../assets/castles/main3.png">
                </div>
                <div class="castle-viewer__info"></div>
            </div>
        </div>
    `;
}

export const singleWeaponTemplate = ( key, value ) => {

    const resolveSword = ( key ) => {
        
        if( key === "sword" ) {
            return "1sword";
        }

        return key;
    }

    const resolvePath = ( key ) => {

        return `./assets/dices/${key}.png`;

    }

    return `
        <div class="unconq-weapons__weapon">
            <div class="weapon-image">
                <img src="${resolvePath(resolveSword(key))}">
            </div>
            <div class="weapon-value">
                <p>${value}</p>
            </div>
        </div>
    `;
}

export const groupWeaponTemplate = ( weapons ) => {
    
    const group = [];

    

    $.each(weapons, function(key, value){

        group.push( singleWeaponTemplate(key, value));
    });

    return group.join("");
}


export const unconqCastleTemplate = ( castle, able ) => {

    const state = able === true ? "" : "disabled";
    const button = able === true ? "btn btn-outline-success" : "btn btn-outline-danger";

    return `
        <div class="castle-viewer__unconq">
            <div class="unconq-weapons">
                ${groupWeaponTemplate(castle.weapons)}
            </div>

            <div class="unconq-others">
                <div class="unconq-score">
                    <p> Score: <span> ${castle.score} </span> </p>
                </div>
                <div class="unconq-action">
                    <button class="${button}" ${state}> Conquer </button>
                </div>
            </div>
        </div>
    `;
}

export const conqCastleTemplate = ( castle, player ) => {
    return `
        <div class="castle-viewer__conq">
            <div class="conq-info">
                <p> This castle is owned by: </p>
            </div>
            <div class="conq-banner">
                <div class="conq-banner__color">
                    <i class="${player.icon}" style="color: ${player.color};"></i>
                </div>
            </div>
            <div class="conq-name">
                <p> ${player.name} </p>
            </div>                    
        </div>
    `;  
}

export const specialCastleTemplate = ( ) => {
    return `
        <div class="castle-viewer__special">
            <p> This castle can be conquered only in special turns ! </p>                   
        </div>
    `;
}