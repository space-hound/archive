import STATE from './../State';

export const CLASSES = {
    
}

export const SELECTORS = {
    enchantment: ".mc-ench",
    value: ".mc-ench input[type=text]",
    valid: ".mc-ench input[type=checkbox]"

}

export const EVENTS = {
    onClickValid( event ) {
        if(this.validElement.checked) {
            STATE.addEnch(this.name, this.id, this.value);
        } else {
            STATE.removeEnch(this.name);
        }
    },

    onFocusOutValue( event ) {
        this.value = this.valueElement.value;
        STATE.setEnchVal(this.name, this.value);
    }
}

export const TEMPLATE = (name, id, val) => {
    let displayName = getDisplayName(name);
    return `<div class="mc-ench has-check-input inverted">
                <label class="custom-check">
                    <span>${displayName}:</span>
                    <input type="checkbox" value="1">
                    <div class="checkmark">
                        <div class="checker"></div>
                    </div>
                </label>
                <input type="text" value="${val}">
            </div>`;
}

const getDisplayName = (name) => {
    let words = name.split("_")

    return words.map( word => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
}