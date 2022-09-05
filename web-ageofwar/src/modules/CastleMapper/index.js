import "./style.scss";
import template from "./template";
import { CastleSelectoEvents, CastleEditorEvents } from "events";
import FileSaver from "file-saver";

let idTracker = 0;

const CastlePool = [];

const CastleMapper = {
    selected: null,

    generateId( ) {
        return idTracker++;
    },

    addCastle( x, y, img ) {
        const id = this.generateId();

        const castle = {
            id,
            x,
            y,
            img,
            size: 64,

            weapons: {
                
            },

            others: [],

            isConquest: false,

            score: 0,
        }

        castle.x = castle.x - castle.size / 2;
        castle.y = castle.y - castle.size / 2;

        $("#app").append(template(castle.x, castle.y, castle.img, castle.size, castle.id));

        CastlePool.push(castle);
    },

    getCastle( id ) {
        const castle = CastlePool.find( castle => {
            return castle.id == id;
        });

        if(castle === undefined) return null;

        const element = $(".castle-container").filter(function() {
            return $(this).data("id") == id;
        });

        return {
            castle,
            element,
        }
    },

    setCastle( data ) {
        const pair = this.getCastle(data.id);

        if(pair === null) return false;

        const { castle, element } = pair;

        const prop = data.name;

        switch( prop ) {
            case "x": this.setPosition(castle, element, "x", data.value);
                break;
            case "y": this.setPosition(castle, element, "y", data.value);
                break;
            case "size": this.setSize(castle, element, data.value);
                break;
            case "weapons": this.setWeapons(castle, data.value);
                break;
            case "isConquest": castle.isConquest = data.value;
                break;
            case "others": castle.others = data.value;
                break;
            case "score": castle.score = parseInt(data.value);
                break;
            default:
                break;
        }
    },

    setPosition( castle, element, pos, ammount ) {
        castle[pos] = parseFloat(ammount);// - castle.size / 2;

        if(pos === "x") {
            element.css("left", castle[pos]);
        } else {
            element.css("top", castle[pos]);
        }
    },

    setSize( castle, element, ammount ) {
        castle.size = parseFloat(ammount);

        element.css("width", ammount);
        element.css("height", ammount);
    },

    setWeapons ( castle , weapons ) {
        const slag = {};

        $.each(weapons, function(key, value) {
            if(value > 0) {
                slag[key] = value;
            }
        });

        castle.weapons = slag;
    },

    deleteCastle ( id ) {
        const pair = this.getCastle(id);

        if(pair === null) return false;

        const { castle, element } = pair;

        const index = CastlePool.indexOf(castle);

        if(index === -1) return false;

        CastlePool.splice(index, 1);
        element.remove();

        return {
            castle,
            element
        }
    },

    events( ) {

        // WHEN A CASTLE IS SELCETED AND DESELECTED FROM CASTLE SELECTOR
        $em.on(CastleSelectoEvents.castleSelected, ( event, data ) => {
            this.selected = data.castle
        });

        // WHEN A CASTLE IS EDITED BY CASTLE EDITOR
        $em.on(CastleEditorEvents.castleEdited, ( event, data ) => {
            this.setCastle(data);
        });

        // WHEN A CASTLE IS EDITED BY CASTLE EDITOR
        $em.on(CastleEditorEvents.castleDeleted, ( event, data ) => {
            this.deleteCastle(data.id);
        });

        $em.on(CastleEditorEvents.mapSave, ( event ) => {
            
            const W = window.innerWidth, H = window.innerHeight;

            CastlePool.forEach( castle => {

                castle.W = W; castle.H = H;
                // castle.x = ((castle.x / W) * 100).toFixed(4);
                // castle.y = ((castle.y / H) * 100).toFixed(4);

            })

            const blob = new Blob([JSON.stringify(CastlePool)], {type: "application/json"});

            FileSaver.saveAs(blob, "map.json");
        });

        // WHEN A CASTLE IS ADDED ON THE MAP
        $("#app").on("click", function( e ) {

            if(CastleMapper.selected === null) {
                return;
            }

            const canClick = $(e.target);

            if(!canClick[0].isSameNode($(this)[0])) return;

            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;

            CastleMapper.addCastle(x, y, CastleMapper.selected)
        });

        // WHEN A CASTLE IS DOUBLE CLICKED FOR EDTION
        $("#app").on("dblclick", ".castle-container", ( event ) => {
            const target = $(event.target).closest(".castle-container");

            if(target.length === 0) return;

            const { castle, element } = CastleMapper.getCastle(target.data("id"));
            
            $em.emit(CastleEditorEvents.castleSelected, {
                castle, element
            })
        })
    }
}

export default ( ) => {
    
    CastleMapper.events();
}