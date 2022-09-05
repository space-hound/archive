export const REGISTER_CONF = {
    head: {
        label: "Pick a color for your snake's <strong>head</strong>!",
        colors: [
           '#FFEB28', '#FFD800', '#FFB310', '#FF8F00', '#7d7a15', '#5B6A27'
        ]
    },

    body: {
        label: "Pick a color for your snake's <strong>body</strong>!",
        colors: [
           '#63b931', '#97C30A', '#7BB31A', '#005502', '#FFE74C', '#e2b400'
        ]
    },

    food: {
        label: "Pick a color for your snake's <strong>food</strong>!",
        colors: [
           '#FF0000', '#c50000', '#b11a21', '#e0474c', '#334d8f', '#9C0063'
        ]
    }
}

export const SNAKE_CONF = {
    direction: "RIGHT",
    directions: {
        ArrowUp: "UP",
        ArrowDown: "DOWN",
        ArrowLeft: "LEFT",
        ArrowRight: "RIGHT"
    },
    length: 5,
    speed: 7,
    size: 22,
    food: {
        min: 2,
        max: 8
    }
}