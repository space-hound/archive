import CastleViewer from "modules/CastleViewer";
import GameEvents from "./_Events";

const GameCastles = {
    
    Init( castles ) {
        this.castles = castles;

        this.viewer = CastleViewer;

        this.viewer.Init();

        const that = this;

        $("#app").on("click", ".aow-castle", function( event ) {

            const id = parseInt($(this).data("id"));

            $em.emit(GameEvents.PlayerConqCheck, { id });

        });
    },

    getCastleById( id ) {
        return this.castles.find( castle => {
            return castle.id == parseInt(id);
        });
    },

    getCastleByIndex( index ) {
        return this.castles[index];
    }
}

export default GameCastles;