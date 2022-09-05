export const DEF_OPT = {
    nickname: "Player",
    difficulty: 1,
    difference: 100,
    interval: {
        value: [0, 500],
        options: {
            min: {
                allowNegatives: true,
                increment: 1,
                min: -9999,
                max: 9999
            },
            max: {
                allowNegatives: true,
                increment: 1,
                min: -9999,
                max: 9999
            }
        }
    }
}