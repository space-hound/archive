export const SELECTORS = {
    number: ".player-number",
    name: ".aow-namebox",
    icon: ".player-icon__icon",
    color: ".player-color__color",
    isComputer: ".aow-checkbox",
}

export const CLASSES = {
    container: "player-pool__player",
    enabled: "enabled",
    disabled: "disabled",
}

export const TEMPLATE = ( number ) => {

    return `
            <div class="player-pool__player justify-content-between disabled">
                <div class="player-number player-col">
                    <h3>#${ number }</h3>
                </div>
                <div class="player-name player-col">
                    <div class="aow-namebox"></div>
                </div>
                <div class="player-icon player-col">
                    <div class="player-icon__icon">
                    </div>
                </div>
                <div class="player-color player-col">
                    <div class="player-color__color">
                    </div>
                </div>
                <div class="player-computer player-col">
                    <div class="aow-checkbox"></div>
                </div>
            </div>
    `;
}

export const UTILS = {

}
