import "./style.scss";

import CoverModule from "modules/CoverModule";

$( function( event ) {
    
    CoverModule();

    if(!GameStorage.isSavedEmpty()) {
        $("#main-menu__load").removeClass("disabled");
    }
    
});
