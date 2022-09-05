import "./style.scss";
import DicesLoader from "DicesLoader";
import template from "./template";
import { CastleEditorEvents } from "events";
import ConditionalRenderer from "modules/ConditionalRenderer";


const CastleEditor = {

    selected: null,

    inputs ( ) {
        const raw = $("#castle-editor input");

        const slag = {};

        raw.each( function() {

            let id = this.id.replace(/castle-editor-/g, "");

            if(id.includes("weapon-")) {

                id = id.replace(/weapon-/g, "");

                if(!slag.weapons) {
                    slag.weapons = {};
                }

                slag.weapons[id] = $(this);

            } else {
                slag[id] = $(this);
            }

        });

        return slag;
    },

    fillInputs( castle ) {
        const inputs = this.inputs();

        $("#castle-img img").attr("src", castle.img);

        Object.keys(inputs).forEach( key => {
            if( key === "weapons" ) {

                Object.keys(inputs.weapons).forEach( key => {
                    inputs.weapons[key].val(castle.weapons[key] || 0);
                });

            } else if( key === "isConquest" ) {
                inputs[key][0].checked = castle[key];
            } else if( key === "others" ) {
                inputs[key].val(castle[key].join(","));
            } else {
                if(inputs[key]) {
                    inputs[key].val(castle[key]);
                }
            }
        });
    },

    weaponsValue() {
        const inputs = this.inputs();

        const slag = {};

        Object.keys(inputs.weapons).forEach( key => {
            slag[key] = parseFloat(inputs.weapons[key].val());
        })

        return slag;
    },

    render( ) {
        $("#app").append( template( DicesLoader.weapons() ) );
    },

    events( ) {
        $("#castle-editor input[type=text]").on("input", function( event ) {

            if(CastleEditor.selected === null) return;

            let target = $(this)[0].id.replace(/castle-editor-/g, "");

            if(target.includes("weapon-")) {
                
                $em.emit(CastleEditorEvents.castleEdited, {
                    id: CastleEditor.selected.id,
                    name: "weapons",
                    value: CastleEditor.weaponsValue()
                });

            } else {
                
                if( target === "others" ) {
                    $em.emit(CastleEditorEvents.castleEdited, {
                        id: CastleEditor.selected.id,
                        name: target,
                        value: $(this).val().split(",").map( el => {
                            return parseFloat(el);
                        }),
                    });
                } else {
                    $em.emit(CastleEditorEvents.castleEdited, {
                        id: CastleEditor.selected.id,
                        name: target,
                        value: $(this).val(),
                    });
                }
            }


        });


        $("#castle-editor input[type=checkbox]").on("change", function( event ) {

            if(CastleEditor.selected === null) return;

            $em.emit(CastleEditorEvents.castleEdited, {
                id: CastleEditor.selected.id,
                name: "isConquest",
                value: this.checked,
            });
        });

        $("#castle-editor #castle-editor-delete").on("click", function( event ) {
            event.preventDefault();

            if(CastleEditor.selected === null) return;

            $em.emit(CastleEditorEvents.castleDeleted, {
                id: CastleEditor.selected.id
            });

            CastleEditor.selected = null;

            $("#castle-editor").addClass("d-none");
        });

        $em.on(CastleEditorEvents.castleSelected, function( event, data ) {

            CastleEditor.fillInputs(data.castle);

            CastleEditor.selected = data.castle;

            $("#castle-editor").removeClass("d-none");

        });

        $("#castle-editor .castle-editor-close").on("click", function( event ) {

            event.preventDefault();

            CastleEditor.selected = null;

            $("#castle-editor").addClass("d-none");

        });

        $(document).on("keydown", function( event ) {
            const active = $("#castle-editor input[type=text]").filter( function () {
                return $(this).is(':focus');
            });

            if(active.length === 0) return;

            const test = [
                "castle-editor-x",
                "castle-editor-y",
                "castle-editor-size",
            ];

            if(!test.includes(active[0].id)) return;

            if(event.keyCode === 38) {
                active.val( parseFloat(active.val()) + 1 );
            }

            if(event.keyCode === 40) {
                active.val( parseFloat(active.val()) - 1 );
            }

            $em.emit(CastleEditorEvents.castleEdited, {
                id: CastleEditor.selected.id,
                name: active[0].id.replace(/castle-editor-/g, ""),
                value: active.val(),
            });

        });
    }
}

export default ( ) => {
    CastleEditor.render();
    ConditionalRenderer($("#castle-editor .castle-editor-tabs a"));
    CastleEditor.events();
}