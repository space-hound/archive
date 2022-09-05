import GiveConfig from './GiveConfiguration/GiveConfiguration';
import ItemSelector from './ItemSelector/ItemSelector';
import Enchantment from './Enchantment/Enchantment';
import FlagHide from './FlagHide/FlagHide';
import { ItemsObject } from './../items-table/items-table';
import STATE from './State';

const isEmpty = (obj) => {
    for(const key in obj) {
        if(obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

export const enchList = {
    list: [],

    enchUpdateList(type) {
        const domList = document.querySelector("#mc-encantments .mc-ench-list");

        if(this.list.length > 0) {
            this.list.forEach( ench => {
                ench.destroy();
            });

            this.list = [];

            while (domList.firstElementChild) {
                domList.removeChild(domList.firstElementChild);
            }
        }

        const availableEnch = ItemsObject[type].enchantments;

        for(const key of Object.keys(availableEnch)){
            const name = key;
            const maxVal = availableEnch[key].maxLevel;
            const id = availableEnch[key].id;

            this.list.push(new Enchantment(domList, name, id, maxVal));
        }
    }
}

export const output = {
    command: "",

    template(name, item, attr) {
        return `/give ${name} minecraft:${item}{${attr}} 1`;
    },

    update(state) {
        const name = state.name;
        const item = state.item;
        const attrArray = [];
        let index = 0;

        if(state.unbreaking === 1) {
            attrArray[index++] = `Unbreakable:1`;
        }

        if(state.lore !== "") {
            attrArray[index++] = `display:{Lore:["${state.lore}"]}`;
        }

        if(!isEmpty(state.ench)) {
            let enchArray = [];
            for(const key of Object.keys(state.ench)) {
                enchArray.push(`{id:"minecraft:${state.ench[key].name}",lvl:${state.ench[key].value}}`);
            }

            attrArray[index++] = `Enchantments:[${enchArray.join(",")}]`;
        }

        if(state.flags !== 0) {
            attrArray[index++] = `HideFlags: ${state.flags}`
        }

        let attr = "";

        if(attrArray.length > 0) {
            attr = attrArray.join(",");
        }

        this.command = this.template(name, item, attr);

        document.querySelector("#mc-output textarea").value = this.command;
    }
}

export const mcGive = () => {
    const domConfig = document.querySelector("#mc-configuration");
    const giveConfig = new GiveConfig(domConfig);
    
    const domItemsList = document.querySelector("#mc-items .mc-items-list");
    const itemsSelector = new ItemSelector(domItemsList);

    const domFLags = document.querySelector("#mc-flags");
    const flagHide = new FlagHide(domFLags);
    
    enchList.enchUpdateList("sword");
    output.update(STATE.getState());

    document.querySelector("#mc-output button").addEventListener("click", evt => {
        document.querySelector("#mc-output textarea").select();
        document.execCommand('copy');
    });
}