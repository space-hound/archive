
export default ( x, y, img, size, id) => {
    return `
        <div data-id="${id}" class="castle-container" style="top: ${y}px; left:${x}px; width: ${size}px; height: ${size}px;">
            <img src=${img}>
            
            <div class="castle-active">
                <div></div>
            </div>
        </div>
    `;
}