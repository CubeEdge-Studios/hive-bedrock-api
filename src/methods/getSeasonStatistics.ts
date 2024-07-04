import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import isGame from "../helpers/isGame";
import fetchEndpoint from "../helpers/fetchEndpoint";
import { MonthlyProcessedStatistics } from "../types/output";
import { MonthlyProcessors } from "../processors";

interface SeasonOptions extends Options {
    season: number;
    month: number;
    year: number;
}

export default async function getSeasonStatistics<G extends Game>(
    identifier: string,
    game_id: G,
    options?: SeasonOptions
): Promise<APIResponse<MonthlyProcessedStatistics[G]>>;

export default async function getSeasonStatistics<G extends Game>(
    identifier: string,
    game_id: G,
    options?: SeasonOptions
) {
    if (!isGame(game_id as G))
        return {
            status: 404,
            error: {
                code: 404,
                message: "Game not found.",
            },
            data: null,
        };

    let endpoint = `/game/season/player/${game_id}/${identifier}/${options?.season ?? 1}`;

    let response = await fetchEndpoint(endpoint, options?.init);
    if (response.error) return response;

    let response_data = response.data as Statistics<G, Timeframe.Monthly>;
    if (Array.isArray(response_data))
        return {
            ...response,
            status: 404,
            data: null,
            error: { code: 404, message: "Not Found" },
        };

    let processed_data = MonthlyProcessors[game_id](response_data as any);

    return {
        ...response,
        data: processed_data,
        error: null,
    };
}
