import './style.scss';

const TEMPLATE = ( ) => {
    return `
        <div class="aow-cover">
            <div class="aow-mask"></div>
        </div>
    `
}

export default ( imagePath ) => {
    $("#app").prepend(TEMPLATE());
}