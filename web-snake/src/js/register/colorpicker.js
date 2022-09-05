import * as DOM from '../utils/dom';

function onSelect (event) {
    const target = event.target.closest('div.option');
    const parent = target.closest('div.colorpicker');
    if(!target) { return; }
    if(!target.matches('div.option')) { return; }
    if(target.matches('div.option.selected')) { return; }


    const allOptions = [...target.parentElement.children];

    allOptions.forEach( opt => {
        DOM.remCls(opt, "selected");
    });

    DOM.addCls(target, "selected");
}

export default class ColorPicker {
    constructor (options) {
        this.el = DOM.getEl(options.selector);
        this.label = options.label;
        this.options = options.colors;

        //insert the string template as html into this element
        this.el.insertAdjacentHTML(
            'afterbegin', 
            ColorPicker.template(this.label, this.options)
        );

        this.__randomSelect();

        this.__addEvent();
    }

    destroy() {
        this.__remEvent();
        this.el.innerHTML = "";
    }

/*==========================================================================================================*/

    length () {
        return this.options.length;
    }

    value () {
        const selected = this.__optionsHolderDOM().querySelector("div.option.selected");

        return selected.dataset.color;
    }

    selectedIndex (value) {
        if(typeof value === 'number') {
            this.__optionsDOM().forEach( opt => {
                DOM.remCls(opt, "selected");
            });

            DOM.addCls(this.__optionsDOM()[value], "selected");
        } else {
            return this.__optionsDOM().findIndex( opt => {
                return opt.matches("div.option.selected");
            })
        }
    }
    
/*==========================================================================================================*/

    __addEvent () {
        this.el.addEventListener("click", onSelect);
    }

    __remEvent () {
        this.el.removeEventListener("click", onSelect);
    }

    __randomSelect() {
        const index = Math.floor(Math.random() * this.length());
        this.selectedIndex(index);
    }

/*==========================================================================================================*/

    __optionsHolderDOM () {
        // get the DOM element holding all the options
        return this.el.querySelector('div.cp-options');
    }

    __optionsDOM () {
        // get all the options as DOM elements
        return [...this.__optionsHolderDOM().querySelectorAll('div.option')];
    }

/*==========================================================================================================*/

    static template (label, colors) {
        let template = `
            <div class="cp-label">
                <p>${label}</p>
            </div>

            <div class="cp-options">
        `;

        colors.forEach( color => {
            template += `
                <div class="option" data-color="${color}">
                    <span style="background-color:${color};"></span>
                </div>
            `;
        });

        template += `</div>`;

        return template;
    }
}