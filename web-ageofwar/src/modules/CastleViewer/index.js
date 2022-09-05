
import "./styles.scss";
import * as template from "./template";

const selectors = {
    el: "#castle-viewer",
    close: "#castle-viewer .castle-viewer__close",
    image: "#castle-viewer .castle-viewer__image img",
    info: "#castle-viewer .castle-viewer__info",
    button: ".castle-viewer__unconq button"
}

const CastleViewer = {

    Init( $container ) {

        this.$container = $("#app");

        this.$container.append(template.castleViewerTemplate());
        
        this.$el = this.$container.find(selectors.el);

        this.$close = $(selectors.close);

        this.$close.on("click", ( event ) => {

            this.hide();

        });

        this.$info = $(selectors.info);
        this.$image = $(selectors.image);

        this.currentCastle = null;

        this.$info.on("click", selectors.button, ( event => {

            if(this.conquerCallback) {
                this.conquerCallback( this.currentCastle );
            }

        }));
    },

    clearViewer( ) {
        this.$info.empty();
    },

    hide( ) {
        this.$el.addClass("d-none");
        this.currentCastle = null;
    },

    show( castle, player, enabled = undefined ) {

        this.currentCastle = castle;

        this.clearViewer();

        this.$image.attr("src", castle.img);

        if(castle.isConquest && !castle.isOwned) {
            this.$info.append(template.specialCastleTemplate(castle));
        } else {

            if(enabled === undefined) {

                this.$info.append(template.conqCastleTemplate(castle, player));
                
            } else {

                this.$info.append(template.unconqCastleTemplate(castle, enabled));
            }
        }

        this.$el.removeClass("d-none");
    },

    registerConquerCallback( conquerCallback ) {
        this.conquerCallback = conquerCallback;
    }
}

export default CastleViewer;