import { Game, Leaderboards, Statistics, Timeframe } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import fetchEndpoint from "../helpers/fetchEndpoint";
import isGame from "../helpers/isGame";
import { AllTimeProcessedLeaderboard } from "../types/output";
import { LeaderboardProcessors } from "../processors";

export default function getAllTimeLeaderboard<G extends Game>(
    game_id: G,
    options?: Options
): Promise<APIResponse<AllTimeProcessedLeaderboard<G>>>;

export default async function getAllTimeLeaderboard<G extends Game>(game_id: G, options?: Options) {
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

    let response_data = response.data as Leaderboards<G, Timeframe.AllTime>[];
    let processed_data = Array.from(response_data).map((statistics) =>
        LeaderboardProcessors[game_id](statistics as any)
    );

    return {
        ...response,
        data: processed_data,
        error: null,
    };
}
