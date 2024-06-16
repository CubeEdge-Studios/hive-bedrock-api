import { Game, Timeframe } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import fetchEndpoint from "../helpers/fetchEndpoint";
import isGame from "../helpers/isGame";
import { LeaderboardResponse } from "../types/output";
import getProcessors from "../processors";

interface MonthlyOptions extends Options {
    month: number;
    year: number;
    amount: number;
    skip: number;
}
export default function getMonthlyLeaderboard<G extends Game>(
    game_id: G,
    options?: Partial<MonthlyOptions>
): Promise<APIResponse<LeaderboardResponse<G, Timeframe.Monthly>>>;

export default async function getMonthlyLeaderboard<G extends Game>(
    game_id: G,
    options?: Partial<MonthlyOptions>
): Promise<APIResponse<LeaderboardResponse<G, Timeframe.Monthly>>> {
    if (!isGame(game_id))
        return {
            status: 404,
            error: {
                code: 404,
                message: "Game not found.",
            },
            data: null,
        };

    let current_date = new Date();
    let endpoint = `/game/monthly/${game_id}/${options?.year ?? current_date.getFullYear()}/${
        options?.month ?? current_date.getMonth() + 1
    }/${options?.amount ?? 100}/${options?.skip ?? 0}` as const;

    let response = await fetchEndpoint(endpoint, options?.init);
    if (response.error) return response;
    let response_data = Object.values(response.data as LeaderboardResponse<G, Timeframe.Monthly>[]);

    let processors = getProcessors(game_id, Timeframe.Monthly);
    response_data.forEach((statistics) =>
        processors.forEach((processor) => processor(statistics as { [key: string]: number }))
    );

    return {
        ...response,
        data: response_data as unknown as LeaderboardResponse<G, Timeframe.Monthly>,
        error: null,
    };
}
