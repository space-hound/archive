import "./style.scss";

import CoverModule from "modules/CoverModule";
import CastleSelector from "modules/CastleSelector";
import CastleMapper from "modules/CastleMapper";
import CastleEditor from "modules/CastleEditor";
import MapCreatorMenu from "./menu";

$( function( event ) {
    
    CoverModule();
    CastleSelector();
    CastleMapper();
    CastleEditor();
    MapCreatorMenu();
    
});
