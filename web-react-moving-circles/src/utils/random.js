export const getRndInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRndBinary = () => {
    return getRndInt(1, 100) <= 50 ? 1 : -1;
}

export const getRndColor = () => {
    const parts = "0123456789ABCDEF";
    return [...new Array(6)].map(() => {
        return parts[
            getRndInt(0, parts.length - 1)
        ];
    }).join("");
}