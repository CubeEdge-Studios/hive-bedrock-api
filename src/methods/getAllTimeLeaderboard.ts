import { Game, Timeframe } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import fetchEndpoint from "../helpers/fetchEndpoint";
import isGame from "../helpers/isGame";
import { LeaderboardResponse } from "../types/output";
import processors from "../processors";

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

    processors.leaderboard[Timeframe.AllTime][game_id].forEach((processor) =>
        processor(response.data)
    );

    let data = response.data as unknown as LeaderboardResponse<
        G,
        Timeframe.AllTime
    >;

    return {
        ...response,
        data,
        error: null,
    };
}
