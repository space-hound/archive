import { enchList, output } from './mcgive';

const state = {
    name: "@p",
    lore: "",
    unbreaking: 0,
    item: "wooden_sword",
    type: "sword",
    ench: {
        
    },
    flags: 0,
}

export default {
    setName(val) {
        state.name = val;
        output.update(state);
    },

    setLore(val) {
        state.lore = val;
        output.update(state);
    },

    setUnbreaking(val) {
        state.unbreaking = val;
        output.update(state);
    },

    setItem(item, type) {
        state.item = item;
        state.type = type;
        state.ench = {};
        enchList.enchUpdateList(state.type);
        output.update(state);
    },

    addEnch(name, id, value) {
        state.ench[name] = {
            "name": name,
            "id": id,
            "value": value
        }
        output.update(state);
    },

    removeEnch(name) {
        state.ench[name] = null;
        delete state.ench[name];
        output.update(state);
    },

    setEnchVal(name, val) {
        if(state.ench[name]) {
            state.ench[name].value = val;
            output.update(state);
        }
    },

    setFlags(val) {
        state.flags += val;
        output.update(state);
    },

    initalEnch() {
        enchList.enchUpdateList(state.type);
    },

    getState() {
        return state;
    }

}