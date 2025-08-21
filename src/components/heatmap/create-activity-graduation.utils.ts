export function createActivityGraduation(): Record<number, string> {
    const map: Record<number, string> = {};

    for (let i = 1; i <= 5; i++) {
        map[i] = "#414141";
    }

    for (let i = 6; i <= 10; i++) {
        map[i] = "#767675";
    }

    for (let i = 11; i <= 20; i++) {
        map[i] = "#ADADAD";
    }

    for (let i = 21; i <= 25; i++) {
        map[i] = "#FFFFFF";
    }
    return map;
}
