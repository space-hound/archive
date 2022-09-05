import STATE from './../State';

export const EVENTS = {
    onClickUnbreak ( event ) {
        const val = this.unbreakFlag.checked ? +this.unbreakFlag.value : -this.unbreakFlag.value;
        STATE.setFlags(val);

    },

    onClickEnch ( event ) {
        const val = this.enchFlag.checked ? +this.enchFlag.value : -this.enchFlag.value;
        STATE.setFlags(val);
    }
}