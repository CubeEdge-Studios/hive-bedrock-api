import { calculateLevelFromXP, Game } from "hive-bedrock-data";

export default function processGameAndXP<G extends Game>(
    game: G,
    xp?: number
): { id: G; xp: number; level: number } {
    xp ??= 0;
    let level = calculateLevelFromXP(xp, game) ?? 1;
    return { id: game, xp, level };
}
