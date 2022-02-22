import { API_GAMES, Game, Mode } from "./config";

export default async function getStats(
    playerIdentifier: string,
    game: Game,
    mode: Mode
) {
    if (!Array.isArray(game)) {
        return "hi";
    }
}
