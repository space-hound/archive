import { PLAYER_ICONS, PLAYER_COLORS } from "./../../app/new-game/config";

export const SELECTORS = {
    container: ".aow-itemslist__container",
    list: ".aow-itemslist__list",
    cancel: ".aow-itemslist__actions-cancel",
    save: ".aow-itemslist__actions-save"
}

export const CLASSES = {
    container: "aow-itemslist",
    item: "aow-itemslist__list-item",
    disabled: "disabled",
    selected: "selected",
    obstacle: "aow-itemlist__obstacle",
}

export const TEMPLATE = ( ) => {

    return `
            <div class="aow-itemslist__container">
                <div class="aow-itemslist__list">
                </div>
                <div class="aow-itemslist__actions">
                    <button class="btn btn-lg btn-danger aow-itemslist__actions-cancel">
                        Cancel
                    </button>
                    <button class="btn btn-lg btn-success aow-itemslist__actions-save">
                        Save
                    </button>
                </div>
            </div>
    `;
}

export const ICON_TYPE = {
    options: {
        items: chance.shuffle(PLAYER_ICONS),
        $obstacle: $(".aow-itemlist__obstacle"),
        itemTemplate(value) {
            return `
                    <div class="aow-itemslist__list-item aow-player__icon-item" data-value="${value}">
                        <div class="aow-player__icon-item__icon">
                            <i class="${value}"></i>
                        </div>
                    </div>
            `;
        },
    },

    triggerTemplate( value ) {
        return `
                <div class="player-icon__icon" data-value="${value}">
                    <div class="icon-icon">
                        <i class="${value}"></i>
                    </div>
                </div>
        `;
    }
}

export const COLOR_TYPE = {
    options: {
        items: chance.shuffle(PLAYER_COLORS),
        $obstacle: $(".aow-itemlist__obstacle"),
        itemTemplate(value) {
            return `
                    <div class="aow-itemslist__list-item aow-player__color-item" data-value="${value}">
                        <div class="aow-player__color-item__color">
                            <div style="background-color: ${value}"></div>
                        </div>
                    </div>
            `;
        },
    },

    triggerTemplate( value ) {
        return `
            <div class="color-color" data-value="${value}">
                <div style="background-color: ${value};"></div>
            </div>
        `;
    }
}