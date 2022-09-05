import { PLAYER_NAMES as DEFAULT_OPTIONS} from "./../../app/new-game/config";

export const SELECTORS = {
    displayContainer: ".aow-name__display",
    editorContainer: ".aow-name__editor",

    display: ".aow-name__display p",
    input: ".aow-name__editor input",

    edit: ".aow-name__display .aow-name__edit",
    clear: ".aow-name__editor .aow-name__clear",
    random: ".aow-name__editor .aow-name__random",
    save: ".aow-name__editor .aow-name__save",

    error: ".aow-name__editor .aow-name__err",
    errorText: ".aow-name__editor .aow-name__err p",
}

export const CLASSES = {
    container: "aow-namebox",
    hidden: "hidden"
}

export const EVENTS = {
    onClear( event ) {
        this.$input.val("");
    },

    onEdit( event ) {
        this.$input.val(this.name);

        this.$displayContainer.addClass(CLASSES.hidden);
        this.$editorContainer.removeClass(CLASSES.hidden);
    },

    onRandom( event ) {
        const name = NAMER.get(this.name);

        this.name = name;
        this.$input.val(name);
        this.$display.text(name);
    },

    onSave( event ) {
        if(!this.validate()) {
            return;
        }

        this.value(this.$input.val());

        this.$editorContainer.addClass(CLASSES.hidden);
        this.$displayContainer.removeClass(CLASSES.hidden);
    }
}

export const TEMPLATE = ( name ) => {

    return `
            <div class="aow-name__display aow-name__container">
                <p>${name}</p>
                <div class="aow-name__edit aow-name__button">
                    <i class="far fa-edit"></i>
                </div>
            </div>
            <div class="aow-name__editor aow-name__container hidden">
                <input type="text" value="${name}">
                <div class="aow-name__clear aow-name__button">
                    <i class="fas fa-trash-alt"></i>
                </div>
                <div class="aow-name__random aow-name__button">
                    <i class="fas fa-random"></i>
                </div>
                <div class="aow-name__save aow-name__button">
                    <i class="far fa-save"></i>
                </div>
                <div class="aow-name__err">
                    <p></p>
                </div>
            </div>
    `;
}

export const NAMER = {
    originalNames: null,
    names: null,

    hasNames( ) {
        return this.originalNames !== null && this.names !== null;
    },

    setNames( array ) {
        this.names = [...array];
        this.originalNames = [...array];
    },

    defaultNames( ) {
        this.setNames(DEFAULT_OPTIONS);
    },

    get( name ) {
        const { index, value} = $.randomArray(this.names);
        
        this.removeAt(index);

        if(this.originalNames.includes(name)) {
            if(!this.names.includes(name)) {
                this.names.push(name);
            }
        }

        return value;
    },

    sendBack( name ) {
        if(this.originalNames.includes(name)) {
            if(!this.names.includes(name)) {
                this.names.push(name);
            }
        }
    },

    removeAt( index ) {
        if(index < -1) {
            return;
        }

        this.names.splice(index, 1);
    }
}

export const VALIDATOR = {
    // tyep of errors and their messages
    errors: {
        short: "* name is too short...",
        long: "* name is too long...",
        letters: "* name must contain letters",
        only: "* only letters and numbers are allowed..."
    },

    // the validation logic
    validate( name ) {
        // if lenght is smaller than 3
        // name is too short
        if(name.length < 3) {
            return this.errors.short;
        }
        // if lenght is bigger than 13
        // name is too short
        if(name.length > 13) {
            return this.errors.long;
        }
        // if name contains only numbers
        // it must have letters too
        // or only letters
        // regex: /^[0-9]+$/
        if(/^[0-9]+$/.test(name)) {
            return this.errors.letters;
        }
        // if name contains only numbers
        // and letters and no other symbols
        // regex: /^[0-9a-zA-Z]+$/
        if(!/^[0-9a-zA-Z]+$/.test(name)) {
            return this.errors.only;
        }

        // if every test is passed return "okay"
        // if a test will fail will return its
        // error message concerning that test
        return "okay";
    }
}

export const UTILS = {

}