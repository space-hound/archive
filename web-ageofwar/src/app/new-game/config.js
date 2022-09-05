export const PLAYER_NAMES = [
    "Leopold", "Ludovic", "Alan", "Gregorian", "Slushy", "Victor", "Drakx", "Percival", "Vladislav", "Radagast", "Roland", "Serana", "Veronica", "Cici", "Lillyth", "Meredith", "Dorian", "Shara", "Fatwa", "Keos", "Rob", "Olynth", "Luna", "Martzipan", "Stalin", "Rodrigo", "Caesare", "Lyudmilla", "Dvorax", "Glen", "Dovleac", "Elon Musk", "Melon Musk"
];

export const PLAYER_ICONS = [
    "fas fa-ankh", "far fa-angry", "fab fa-atlassian", "fas fa-atom", "fas fa-baby",
    "fas fa-bacon", "fas fa-band-aid", "fas fa-biohazard", "fab fa-bity", "fas fa-blind",
    "fas fa-bone", "fas fa-bomb", "fas fa-bolt", "fas fa-book-dead", "fas fa-broom",
    "fas fa-candy-cane", "fas fa-carrot", "fas fa-chess-knight", "fas fa-chess-queen",
    "fas fa-cogs", "fas fa-crow", "fab fa-earlybirds", "fab fa-galactic-senate", 
    "fab fa-gg", "fas fa-hammer", "fas fa-guitar", "fab fa-hornbill", "fas fa-infinity",
    "fab fa-mandalorian", "fas fa-paper-plane", "fas fa-poo", "fas fa-snowman", 
    "fab fa-superpowers", "fab fa-studiovinari", "fas fa-spider", "fas fa-quran",
    "fas fa-spa", "fas fa-torah", "fas fa-skull", "fab fa-phoenix-framework"
];

export const PLAYER_COLORS = [
    "#FD0E35", "#FF355E", "#FF6037", "#FF9933", "#FFCC33", "#FF9966", "#FFFF66", "#CCFF00", "#50BFE6", "#66FF66", "#2243B6", "#FF00CC", "#EE34D2", "#FF3855", "#299617", "#5DADEC", "#FF5470", "#0048BA", "#E936A7", "#AFE313", "#FFEB00", "#9C2542", "#319177", "#00CCCC", "#00CC99", "#2E2D88", "#8A496B", "#DA2647", "#FFFF31", "#DB91EF", "#FF85CF", "#45A27D", "#933709", "#E6BC5C", "#A0E6FF", "#837050", "#832A0D", "#DA8A67", "#84DE02", "#C53151", "#FF4466", "#436CB9", "#3AA8C1", "#6CDAE7", "#63B76C", 
];

export const PLAYER_NUMBERS = {
    type: "interval",
    items: [2, 4],
    current: 3,
    emit: "player.numbers:change"
}

export const MAP_TYPES = {
    type: "list",
    items: [
        {
            display: "Short Game",
            value: "short"
        },
        {
            display: "Medium Game",
            value: "medium"
        },
        {
            display: "Long Game",
            value: "long"
        },
        {
            display: "Custom Game",
            value: "custom"
        }
    ],
    current: "medium",
}