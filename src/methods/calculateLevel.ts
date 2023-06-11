import { GAME } from "../types/GAMES";
import { GAME_INFO } from "./GAME_INFO";

export default function calculateLevel(xp: number, game: GAME): number {
    let gameInfo = GAME_INFO[game];

    function boundLevel(level: number) {
        if (level < 0) return 0;
        if (level > gameInfo.maxLevel) return gameInfo.maxLevel;
        return parseFloat(level.toFixed(2));
    }

    const INCREMENT = gameInfo.increment / 2;
    const INCREMENT_CAP = gameInfo.incrementCap;

    let level =
        (INCREMENT + Math.sqrt(INCREMENT * (INCREMENT + 4 * xp))) /
        (2 * INCREMENT);

    if (!INCREMENT_CAP || level <= INCREMENT_CAP) return boundLevel(level);
    level =
        INCREMENT_CAP +
        (xp -
            (INCREMENT * Math.pow(INCREMENT_CAP - 1, 2) +
                (INCREMENT_CAP - 1) * INCREMENT)) /
            ((INCREMENT_CAP - 1) * INCREMENT * 2);

    return boundLevel(level);
}
