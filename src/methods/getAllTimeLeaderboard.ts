import { Game, Leaderboards, Timeframe } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import fetchEndpoint from "../helpers/fetchEndpoint";
import isGame from "../helpers/isGame";
import { LeaderboardResponse } from "../types/output";
import getProcessors from "../processors";

export default function getAllTimeLeaderboard<G extends Game>(
    game_id: G,
    options?: Options
): Promise<APIResponse<LeaderboardResponse<G, Timeframe.AllTime>>>;

export default async function getAllTimeLeaderboard<G extends Game>(
    game_id: G,
    options?: Options
): Promise<APIResponse<LeaderboardResponse<G, Timeframe.AllTime>>> {
    if (!isGame(game_id))
        return {
            status: 404,
            error: {
                code: 404,
                message: "Game not found.",
            },
            data: null,
        };

    let response = await fetchEndpoint(`/game/all/${game_id}`, options?.init);
    if (response.error) return response;
    let response_data = response.data as unknown as Leaderboards<G, Timeframe.AllTime>[];

    let processors = getProcessors(game_id, Timeframe.AllTime);
    response_data.forEach((statistics) =>
        processors.forEach((processor) => processor(statistics as { [key: string]: number }))
    );

    return {
        ...response,
        data: response_data as unknown as LeaderboardResponse<G, Timeframe.AllTime>,
        error: null,
    };
}
