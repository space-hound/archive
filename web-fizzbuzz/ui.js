APP.UI = {

    TEMPLATES: {
        box( {number, string, color} ) {

            const context = string === "" ? number : `${string} - (${number})`;
            const fontColor = string === "" ? "#313131" : "#FFFFFF";

            return `
                <div class="box" style="background-color: #${color}">
                    <p style="color: ${fontColor}">${context}</p>
                </div>
            `;
        },
        
        rule( number = "", keyword = "", color = null ) {

            const bgColor = color || APP.UTILS.randomColor();

            return `
                <div class="rule">
                    <input class="rule__number" type="text" value="${number}" placeholder="number" data-validation="number">
                    -
                    <input class="rule__keyword" type="text" value="${keyword}" placeholder="keyword" data-validation="length" data-length="5">
                    -
                    <span>#</span><input class="rule__color" type="text" value="${bgColor}" placeholder="hex color" data-validation="color">
                    -
                    <div class="rule__color-preview" style="background-color: #${bgColor}"></div>

                    <button class="delete">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            `;
        }
    },

    /* ======================================================================== */

    onMinChange( event ) {
        APP.FIZZBUZZ.min = parseInt(this.value);
    },

    onMaxChange( event ) {
        APP.FIZZBUZZ.max = parseInt(this.value);
    },

    onDelayChange( event ) {

        if(this.value === "") {
            APP.FIZZBUZZ.delay = 500;
        } else {
            APP.FIZZBUZZ.delay = parseInt(this.value);
        }
    },

    onShowRules( event ) {

        if(APP.FIZZBUZZ.running) {
            return;
        }
        
        APP.DOM.query("#rules-cover").classList.remove("d-none");
        APP.DOM.query("#rules").classList.remove("d-none");
    },

    onStart( event ) {
        
        if(!APP.FIZZBUZZ.running) {

            APP.UI.toggleStartButton(false);

            APP.FIZZBUZZ.running = true;

            APP.DOM.clear(APP.DOM.query("#display"));

            APP.FIZZBUZZ.fizzBuzz( 
                result => {
                    APP.DOM.add(APP.DOM.query("#display"), APP.UI.TEMPLATES.box(result));
                },
    
                finish => {
                    APP.FIZZBUZZ.running = false;
                    APP.UI.toggleStartButton(true);
                }
            );

        } else {

            APP.UI.toggleStartButton(true);

            APP.FIZZBUZZ.running = false;
        }

    },

    onCloseRules( event ) {
        APP.DOM.query("#rules-cover").classList.add("d-none");
        APP.DOM.query("#rules").classList.add("d-none");

        APP.UI.setRules();
    },

    onAddRule( event ) {
        APP.UI.addRule();
    },

    onDeleteRule( event ) {

        const target = event.target;

        if(!target.closest("button.delete")) {
            return;
        }

        const rule = event.target.closest(".rule");

        if(rule === null) return;

        const keys = Object.keys(APP.FIZZBUZZ.LOOKUP_TABLE);

        if(keys.length <= 2 + 1) return;

        APP.UI.deleteRule(rule);
    },

    /* ======================================================================== */

    setRules ( ) {
        const domRules = APP.DOM.queryAll("#rules .rules__rules .rule");

        const rules = {
            0: ["", "#FFFFFF"],
        }

        domRules.forEach( domRule => {

            const number = APP.DOM.query(domRule, ".rule__number").value;
            const keyword = APP.DOM.query(domRule, ".rule__keyword").value;
            const color = APP.DOM.query(domRule, ".rule__color").value;

            if(APP.VALIDATION.numberValidate(number) && APP.VALIDATION.colorValidate(color)) {
                rules[number] = [keyword, color];
            } else {
                APP.DOM.delete(domRule);
            }

        });

        APP.FIZZBUZZ.LOOKUP_TABLE = rules;
    },

    addRule( number, keyword, color ) {
        APP.DOM.add(APP.DOM.query("#rules .rules__rules"), APP.UI.TEMPLATES.rule(number, keyword, color));
    },

    deleteRule( rule ) {
        const key = APP.DOM.query(rule, ".rule__number").value;

        delete APP.FIZZBUZZ.LOOKUP_TABLE[key];

        APP.DOM.delete(rule);
    },

    toggleStartButton( state ) {
        if(!state) {
            APP.DOM.query("#controls .start").classList.add("stop");
            APP.DOM.query("#controls .start").textContent = "Stop";
        } else {
            APP.DOM.query("#controls .start").classList.remove("stop");
            APP.DOM.query("#controls .start").textContent = "Start";
        }
    },

    /* ======================================================================== */

    addInitialRules( ) {
        
        const obj = APP.FIZZBUZZ.LOOKUP_TABLE;

        Object.keys(obj).forEach( key => {
            
            if(key !== "0") {
                this.addRule(key, obj[key][0], obj[key][1]);
            }

        });

        const rules = APP.DOM.queryAll("#rules .rule");

        [0, 1].forEach( index => {
            APP.DOM.query(rules[index], ".delete").classList.add("d-none");
        });
    },

    /* ======================================================================== */

    Init( ) {
        this.addInitialRules();

        APP.DOM.query("#controls .rules").addEventListener("click", this.onShowRules);
        APP.DOM.query("#controls .start").addEventListener("click", this.onStart);
        APP.DOM.query("#controls .min input").addEventListener("input", this.onMinChange);
        APP.DOM.query("#controls .max input").addEventListener("input", this.onMaxChange);
        APP.DOM.query("#controls .delay input").addEventListener("input", this.onDelayChange);
        APP.DOM.query("#rules .close").addEventListener("click", this.onCloseRules);
        APP.DOM.query("#rules .add").addEventListener("click", this.onAddRule);
        APP.DOM.query("#rules").addEventListener("click", this.onDeleteRule);

        APP.VALIDATION.setValidation();
    }
    
}
