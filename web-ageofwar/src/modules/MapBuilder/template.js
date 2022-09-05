export default ( castle ) => {
    // id, x, y, size, img, conquered, W, H
    //castle.id, castle.x, castle.y, castle.size, castle.img, castle.isConquered, castle.W, castle.H
    
    const cls = castle.isConquered === true ? "conquered" : "";

    const WW = window.innerWidth, HH = window.innerHeight;
    
    if(castle.W !== undefined) {

        const dW = castle.W / WW;

        castle.x /= dW;

        castle.W = WW;
    }

    if(castle.H !== undefined) {

        const dH = castle.H / HH;

        castle.y /= dH;

        castle.H = HH;
    }

    return `
        <div class="aow-castle ${cls}" data-id="${castle.id}" style="top: ${castle.y}px; left: ${castle.x}px; width: ${castle.size}px; height: ${castle.size}px;">
            <img src="${castle.img}">

            <div class="mark" style="width: ${castle.size}px; height: ${castle.size}px;">
            </div>
        </div>
    `;
}

/* 

<div class="mark" style="width: ${size}px; height: ${size}px;">
    <div class="outer-mark">
        <div class="inner-mark"></div>
    </div>
</div> 

*/