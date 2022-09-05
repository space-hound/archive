import "./style.scss";
import { CastleSelectoEvents } from "events";
import template from "./template";

const CastleSelector = {
    selected: null,

    $el( ) {
        return $('#castle-selector');
    },

    render( ) {
        $("#app").prepend(template());
    },

    events( ) {

        // TOGGLE VISIBILITY BY KEY PRESS -> T
        $(document).on("keyup", function( event ) {
            if(event.keyCode === 84) {
                CastleSelector.$el().toggleClass("hidden");
            }
        });

        // TOGGLE VISIBILITY BY EVENT
        $em.on(CastleSelectoEvents.visibilityToggle, function( event ) {
            CastleSelector.$el().toggleClass("hidden");
        });


        this.$el().on("click", function( event ) {
            const target = $(event.target).closest(".castle-selector__castle");

            if(target.length === 0) return;

            if(CastleSelector.selected !== null) {
                CastleSelector.selected.removeClass('selected');

                if(CastleSelector.selected[0].isSameNode(target[0])) {
                    CastleSelector.selected = null;

                    $em.emit(CastleSelectoEvents.castleSelected, {
                        castle: null
                    });

                    return;
                }
            }

            CastleSelector.selected = target;
            CastleSelector.selected.addClass('selected');

            $em.emit(CastleSelectoEvents.castleSelected, {
                castle: CastleSelector.selected.find("img").attr("src")
            });

        });
    }
}

export default ( ) => {
    CastleSelector.render();
    CastleSelector.events();
} 