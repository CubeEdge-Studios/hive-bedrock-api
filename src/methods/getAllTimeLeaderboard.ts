import gameFormat, { gameFormatArray } from "../format/gameFormat";
import {
    API_BASE_GAME_ALL,
    API_GAME_STATS,
    API_GAME_STATS_ALL,
} from "../types/API";
import {
    BASE_GAME_ALL,
    GAME,
    GAME_STATS,
    GAME_STATS_ALL,
    LB_STATS,
    REQUEST_ALL,
    REQUEST_LB,
} from "../types/GAMES";
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
                error: error ?? "Failed to fetch data.",
            };

        const gameData = gameFormatArray(game, data) as REQUEST_LB<G>;

        return { data: gameData, error: null };
    } catch (err) {
        return { data: null, error: err as any };
    }
}
