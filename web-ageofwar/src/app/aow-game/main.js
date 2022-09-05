import "./style.scss";

import CoverModule from "modules/CoverModule";

import CastleLoader from "CastleLoader";
import DicesLoader from "DicesLoader";

import START from "./GameActions";

$( function ( event ) {

    CoverModule();
    
    START();

})