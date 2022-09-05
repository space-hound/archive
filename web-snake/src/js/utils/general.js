export const Error = (message, ...args) => {
    if(args.length > 0) {
        args.forEach( arg => {
            console.log(arg);
        });
    }
    alert(message);
    throw new Error(message);
}

export const RandomInt = (min, max) => {
    const _min = Math.ceil(min), _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min)) + _min;
}

export async function sleep(callback, time, ...args) {
    const wait = () => new Promise(resolve => setTimeout(resolve, time));
    await wait();
    callback(...args);
}