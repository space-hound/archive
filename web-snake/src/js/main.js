import "styles/main.scss";

import Register from './register/register';
import * as Interface from './interface/interface';

const TestMe = ( ) => {
    document.querySelector(".register__name input").value = "Marian";
    //document.querySelector(".game-mode__hardcore").click();
    document.querySelector(".register__finish button").click();
    setTimeout( () => {
        document.querySelector(".game__replay button").click();
    }, 500)
}

document.addEventListener('DOMContentLoaded', () => {

    Register.Build(Interface.Build);

    //TestMe();

}, false);