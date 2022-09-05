import STATE from './../State';

export const SELECTORS = {
    name: ".mc-player-name input",
    lore: ".mc-item-lore input",
    unbreakable: ".mc-item-unbreakable input"
}

export const EVENTS = {
    onFoucsOutName ( event ) {
        STATE.setName( this.name.value );
    },

    onFocusOutLore ( event ) {
        STATE.setLore( this.lore.value );
    },

    onClickUnbreakable ( event ) {
        let value = this.unbreakable.checked ? 1 : 0;
        STATE.setUnbreaking( value );
    }
}

