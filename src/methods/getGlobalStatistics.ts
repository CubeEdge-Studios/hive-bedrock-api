import gameFormat, { gameFormatArray } from "../format/gameFormat";
import {
    API_BASE_GAME_ALL,
    API_GAME_STATS,
    API_GAME_STATS_ALL,
    API_GLOBAL_STATISTICS,
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

export default async function getGlobalStatistics(): Promise<
    MethodResponse<API_GLOBAL_STATISTICS>
>;

export default async function getGlobalStatistics(): Promise<
    MethodResponse<API_GLOBAL_STATISTICS>
> {
    try {
        const { data, error } = await fetchData(`/global/statistics`);
        if (error || !data)
            return {
                data: null,
                error: error ?? "Failed to fetch data.",
            };

        return { data, error: null };
    } catch (err) {
        return { data: null, error: err as any };
    }
}
