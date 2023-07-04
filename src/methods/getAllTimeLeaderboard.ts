import { gameFormatArray } from "../format/gameFormat";
import { Options } from "../types/API";
import { LB_STATS, REQUEST_LB } from "../types/GAMES";
import { GAME } from "../types/GAME_INFO";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

export default async function getAllTimeLeaderboard<G extends GAME>(
    game: G,
    options?: Options
): Promise<MethodResponse<LB_STATS<G>[]>>;

export default async function getAllTimeLeaderboard<G extends GAME>(
    game: G,
    options?: Options
): Promise<MethodResponse<REQUEST_LB<G>>> {
    try {
        const { data, error } = await fetchData(
            `/game/all/${game}`,
            options?.fetch
        );
        if (error || !data)
            return {
                data: null,
                error: { message: "Failed to fetch data.", ...error },
            };

        const gameData = gameFormatArray(game, data) as REQUEST_LB<G>;

        return { data: gameData, error: null };
    } catch (err) {
        console.error(err);
        return { data: null, error: { message: "Failed to fetch data." } };
    }
}
