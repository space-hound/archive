import { CastleSelectoEvents, CastleEditorEvents } from "events";

const MapCreatorMenu = {
    $modal( ) {
        return $("#map-menu");
    },

    $btn( no ) {
        return $(`#map-menu #btn${no}`);
    },

    onToggleCastlePool( event ) {
        $em.emit(CastleSelectoEvents.visibilityToggle);
    },
    
    onResetMap( event ) {
        window.location.reload();
    },

    onGoBack( event ) {
        window.location.href = "./index.html";
    },

    onMenu( event ) {
        this.$modal().modal('toggle');
    },

    onSaveMap( event ) {
        $em.emit(CastleEditorEvents.mapSave);
    },

    init( ) {

        this.$btn(1).on("click", ( event ) => {
            this.onToggleCastlePool();
        });

        this.$btn(2).on("click", ( event ) => {
            this.onSaveMap();
        });

        this.$btn(3).on("click", ( event ) => {
            this.onResetMap();
        });

        this.$btn(4).on("click", ( event ) => {
            this.onGoBack();
        });

        this.$btn(5).on("click", ( event ) => {
            this.onMenu();
        });

        $(document).on("keyup", ( event ) => {
            // y
            if(event.keyCode === 89) {
                this.onSaveMap();
            }

            // u
            if(event.keyCode === 85) {
                this.onResetMap();
            }

            // m
            if(event.keyCode === 77) {
                this.onMenu();
            }

        });
    }
}

export default ( ) => {
    MapCreatorMenu.init();
};