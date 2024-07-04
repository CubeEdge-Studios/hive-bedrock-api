import { Game, Leaderboards, Timeframe } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import fetchEndpoint from "../helpers/fetchEndpoint";
import isGame from "../helpers/isGame";
import { MonthlyProcessedLeaderboard } from "../types/output";
import { LeaderboardProcessors } from "../processors";

interface SeasonOptions extends Options {
    season: number;
    amount: number;
    skip: number;
}
export default function getSeasonLeaderboard<G extends Game>(
    game_id: G,
    options?: Partial<SeasonOptions>
): Promise<APIResponse<MonthlyProcessedLeaderboard<G>>>;

export default async function getSeasonLeaderboard<G extends Game>(
    game_id: G,
    options?: Partial<SeasonOptions>
) {
    if (!isGame(game_id))
        return {
            status: 404,
            error: {
                code: 404,
                message: "Game not found.",
            },
            data: null,
        };

    let endpoint = `/game/season/${game_id}/${options?.season ?? 1}/${options?.amount ?? 100}/${
        options?.skip ?? 0
    }` as const;

    let response = await fetchEndpoint(endpoint, options?.init);
    if (response.error) return response;

    let response_data = response.data as Leaderboards<G, Timeframe.Monthly>[];
    let processed_data = Array.from(response_data).map((statistics) =>
        LeaderboardProcessors[game_id](statistics as any)
    );

    return {
        ...response,
        data: processed_data,
        error: null,
    };
}
