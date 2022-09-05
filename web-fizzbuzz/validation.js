// https://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer
// https://www.regextester.com/93840

APP.VALIDATION = {
    numberValidate( value ) {
        return /^\+?(0|[1-9]\d*)$/.test(value);
    },

    colorValidate( value ) {
        return /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/igm.test(value);
    },

    lengthValidate( value, length ) {
        return value.length <= length;
    },

    setNumberValidation( ) {
        APP.DOM.query("body").addEventListener("input", function( event ) {

            const target = event.target;

            const validation = target.dataset['validation'] === "number";

            if(validation) {
                if(!APP.VALIDATION.numberValidate(target.value)) {
                    target.value = "";
                }
            }


        });
    },

    setLengthValidation( ) {
        APP.DOM.query("body").addEventListener("input", function( event ) {

            const target = event.target;

            const validation = target.dataset['validation'] === "length";

            if(validation) {

                const length = parseInt(target.dataset['length']);

                if(!APP.VALIDATION.lengthValidate(target.value)) {
                    target.value = target.value.slice(0, length);
                }
            }


        });
    },

    setValidation( ) {
        this.setNumberValidation();
        this.setLengthValidation();
    }
}