import V2d from './../vector/Vector';

export const snakeBody = (conf) => {
    const body = [];

    let
    X = Math.round((conf.map.width / conf.size) / 2) * conf.size,
    Y = Math.round((conf.map.height / conf.size) / 2) * conf.size;

    body.push(new V2d(X, Y));

    for(let i = 1; i < conf.length; i++) {
        X = body[0].X + (-1 * i * conf.size);

        body.push(new V2d(X, Y));
    }
    
    return body;
}