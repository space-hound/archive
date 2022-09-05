export default {
    containerTemplate(globalContainerClass) {
        return `
            <div class="${globalContainerClass}">
                <div class="mc-col">
                    <div class="mc-row">
                        <div class="mc-col items-tools"></div>
                        <div class="mc-col items-armors"></div>
                    </div>
                    <div class="mc-row mc-justify-center">
                        <div class="mc-col items-others"></div>
                    </div>
                </div>
            </div>
        `;
    },

    singleItemTemplate(itemClass, type, material) {
        let name;

        if(material === null) {
            name = type;
        } else {
            name = material + "_" + type;
        }

        return `
            <div class="${itemClass}" data-type="${type}" date-material="${material}" data-name="${name}">
                <img src="./assets/${name}.png" alt="${name}">
            </div>
        `;
    }
}