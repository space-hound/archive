import STATE from '../State';
import TEMPLATE from './template';
import { ItemsArray } from '../../items-table/items-table';

export const CLASSES = {
    globalContainer: "mc-items-selector",
    singleItem: "mc-item"
}

export const SELECTORS = {
    globalContainer: ".mc-items-selector",
    singleItem: ".mc-item"
}

export const EVENTS = {
    onClick ( event ) {
        if(!event.target.closest(SELECTORS.singleItem)) {
            return;
        }

        this.__unSelect();
        this.__select(event.target.closest(SELECTORS.singleItem));
        
        STATE.setItem(this.getSelectedName(), this.getSelectedType());
    }
}


export const buildComponent = element => {
    element.insertAdjacentHTML('afterbegin', TEMPLATE.containerTemplate(CLASSES.globalContainer));
    /*===============================================================================================*/
    let items = "";
    for(let i = 0; i < 4; i++) {
        items += `<div class="mc-row">`;
        for(let j = 0; j < 5; j++) {
            items += TEMPLATE.singleItemTemplate(CLASSES.singleItem, ItemsArray[i].type, ItemsArray[i].materials[j]);
        }
        items += `</div>`;
    }
    element.querySelector(".items-tools").insertAdjacentHTML('afterbegin', items);
    /*===============================================================================================*/
    items = "";
    for(let i = 4; i < 8; i++) {
        items += `<div class="mc-row">`;
        for(let j = 0; j < 5; j++) {
            items += TEMPLATE.singleItemTemplate(CLASSES.singleItem, ItemsArray[i].type, ItemsArray[i].materials[j]);
        }
        items += `</div>`;
    }
    element.querySelector(".items-armors").insertAdjacentHTML('afterbegin', items);
    /*===============================================================================================*/
    items = `<div class="mc-row">`;
    for(let i = 8; i < 11; i++) {
        items += TEMPLATE.singleItemTemplate(CLASSES.singleItem, ItemsArray[i].type, null);
    }
    items += `</div>`;
    element.querySelector(".items-others").insertAdjacentHTML('afterbegin', items);
    /*===============================================================================================*/

    element.querySelector(SELECTORS.singleItem).classList.add("active");
}