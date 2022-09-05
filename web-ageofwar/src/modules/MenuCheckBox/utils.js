export const SELECTORS = {
    labelContainer: ".aow-checkbox .aow-checkbox__label",
    labelText: ".aow-checkbox .aow-checkbox__label span",
    markContainer: ".aow-checkbox .aow-checkbox__mark",
    markHolder: ".aow-checkbox .aow-checkbox__mark span",
    mark: ".aow-checkbox .aow-checkbox__mark span i",
}

export const CLASSES = {
    container: "aow-checkbox",
    checked: "checked",
}

export const EVENTS = {
    onClick ( event ) {
        this.value( !this.checked );
    }
}

export const TEMPLATE = (text) => {
    return `
            <div class="aow-checkbox__label">
                <span>${text}</span>
            </div>
            <div class="aow-checkbox__mark">
                <span>
                    <i class="fas fa-check"></i>
                </span>
            </div>
        `;
}

export const DEFAULT_OPTIONS = {
    text: "I'm computer!",
    checked: false,
    emit: "aowcheckbox:change"
};