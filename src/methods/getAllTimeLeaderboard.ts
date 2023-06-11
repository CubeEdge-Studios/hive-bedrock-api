import { gameFormatArray } from "../format/gameFormat";
import { LB_STATS, REQUEST_LB } from "../types/GAMES";
import { GAME } from "../types/GAME_INFO";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

export default async function getAllTimeLeaderboard<G extends GAME>(
    game: G
): Promise<MethodResponse<LB_STATS<G>>>;

export default async function getAllTimeLeaderboard<G extends GAME>(
    game: G
): Promise<MethodResponse<REQUEST_LB<G>>> {
    try {
        const { data, error } = await fetchData(`/game/all/${game}`);
        if (error || !data)
            return {
                data: null,
                error: { message: "Failed to fetch data.", ...error },
            };

        const gameData = gameFormatArray(game, data) as REQUEST_LB<G>;

        return { data: gameData, error: null };
    } catch (err) {
        return { data: null, error: { message: "Failed to fetch data." } };
    }
}
