export const getEl = (selector) => {
    return document.querySelector(selector);
}

export const getEls = (selector) => {
    return [...document.querySelectorAll(selector)];
}

/*================================================================================================*/

export const hasCls = (el, cls) => {
    return [...el.classList].includes(cls);
}

export const addCls = (el, cls) => {
    if(!hasCls(el, cls)) {
        el.classList.add(cls);
    }
}

export const remCls = (el, cls) => {
    el.classList.remove(cls);
}

export const size = (el, sizeW, sizeH) => {
    const computedStyle = getComputedStyle(el);
    
    let elH = el.clientHeight, elW = el.clientWidth;

    elH -= ( parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom) );
    elW -= ( parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight) );

    return {
        width: elW - sizeW,
        height: elH - sizeH
    }
}

/*=============================================================================================*/