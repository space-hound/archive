module.exports = {
    
    PREFIXES: {
        TEMPLATE: "./../src/",
        SCRIPT: "./../src/",
        CHUNKS: ['vendor', 'common'],
        ALIAS: "./../"
    },

    POINTS: [
        {
            js: {
                name: "vendor",
                path: "scripts/vendor.js",
            }
        },

        {
            js: {
                name: "common",
                path: "scripts/common.js",
            }
        },

        {
            js: {
                name: "main-menu",
                path: "app/main-menu/main.js",
            },

            html: {
                name: "index.html",
                template: "app/main-menu/index.html",
                chunks: ['main-menu'],
            }
        },

        {
            js: {
                name: "new-game",
                path: "app/new-game/main.js",
            },

            html: {
                name: "new-game.html",
                template: "app/new-game/index.html",
                chunks: ['new-game'],
            }
        },

        {
            js: {
                name: "map-creator",
                path: "app/map-creator/main.js",
            },

            html: {
                name: "map-creator.html",
                template: "app/map-creator/index.html",
                chunks: ['map-creator'],
            }
        },

        {
            js: {
                name: "aow-game",
                path: "app/aow-game/main.js",
            },

            html: {
                name: "aow-game.html",
                template: "app/aow-game/index.html",
                chunks: ['aow-game'],
            }
        },

        {
            js: {
                name: "rules",
                path: "app/rules/main.js",
            },

            html: {
                name: "rules.html",
                template: "app/rules/index.html",
                chunks: ['rules'],
            }
        },

        {
            js: {
                name: "credits",
                path: "app/credits/main.js",
            },

            html: {
                name: "credits.html",
                template: "app/credits/index.html",
                chunks: ['credits'],
            }
        },
    ],

    SHORTCUTS: {

        // FONT AWESOME
        fawesome: "node_modules/@fortawesome/fontawesome-free/css/all.css",
        
        // APP FAVICON
        favicon: "assets/favicon.png",

        // CASTLE ASSETS PATH
        castles: "assets/castles/",

        // DICES ASSETS PATH
        dices: "assets/dices/",

        // ALL ASSETS
        assets: "assets/",

        // ALL STYLES
        styles: "src/styles/",

        // ALL SCRIPTS
        scripts: "src/scripts/",

        // ALL CUSTOM EVENTS NAMES
        events: "src/config/events.js",

        maps: "src/config/maps/",

        // CASTLE LOADER SCRIPT
        CastleLoader: "src/scripts/image-loaders/castle-loader.js",

        // DICES LOADER SCRIPT
        DicesLoader: "src/scripts/image-loaders/dices-loader.js",

        // ALL MODULES
        modules: "src/modules/",

        // APP FILES
        app: "src/app/",
        
    }
}