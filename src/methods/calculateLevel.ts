import { GAME, GAME_INFO } from "../types/GAME_INFO";

export default function calculateLevel(xp: number, game: GAME): number {
    if (game === GAME.TheBridge) {
        let lastXp = 0;
        let currentXp = 300;
        let increment = 300;
        let additionalIncrement = 300;

        let i = 2;
        while (true) {
            if (xp === currentXp) return i;
            else if (xp < currentXp)
                return i + (xp - lastXp) / (currentXp - lastXp) - 1;

            additionalIncrement = Math.floor(additionalIncrement * 1.08);
            increment += additionalIncrement;
            lastXp = currentXp;
            currentXp += increment;
            i++;
        }
    }

    let gameInfo = GAME_INFO[game];

    const INCREMENT = gameInfo.increment / 2;
    const INCREMENT_CAP = gameInfo.incrementCap;

    let level =
        (INCREMENT + Math.sqrt(INCREMENT * (INCREMENT + 4 * xp))) /
        (2 * INCREMENT);

    if (!INCREMENT_CAP || level <= INCREMENT_CAP)
        return boundLevel(level, gameInfo.maxLevel);
    level =
        INCREMENT_CAP +
        (xp -
            (INCREMENT * Math.pow(INCREMENT_CAP - 1, 2) +
                (INCREMENT_CAP - 1) * INCREMENT)) /
            ((INCREMENT_CAP - 1) * INCREMENT * 2);

    return boundLevel(level, gameInfo.maxLevel);
}

function boundLevel(level: number, maxLevel: number) {
    if (level < 0) return 0;
    if (level > maxLevel) return maxLevel;
    return parseFloat(level.toFixed(2));
}
