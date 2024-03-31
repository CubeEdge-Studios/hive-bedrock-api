import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import { AllGameStatistics, StatisticsResponse } from "../types/output";
import isGame from "../helpers/isGame";
import fetchEndpoint from "../helpers/fetchEndpoint";
import getProcessors from "../processors";

interface MonthlyOptions extends Options {
    month: number;
    year: number;
}

export default async function getMonthlyStatistics(
    identifier: string,
    options?: MonthlyOptions
): Promise<APIResponse<AllGameStatistics<Timeframe.Monthly>>>;

export default async function getMonthlyStatistics<G extends Game>(
    identifier: string,
    game_id: G,
    options?: MonthlyOptions
): Promise<APIResponse<StatisticsResponse<G, Timeframe.Monthly>>>;

export default async function getMonthlyStatistics<G extends Game>(
    identifier: string,
    game_or_options?: G | MonthlyOptions,
    options?: MonthlyOptions
) {
    let game_id: G | "all" = "all";
    let method_options: MonthlyOptions | undefined =
        game_or_options as MonthlyOptions;

    if (typeof game_or_options === "string") {
        game_id = game_or_options as G;
        method_options = options;
    }

    if (!isGame(game_id as G) && game_id !== "all")
        return {
            status: 404,
            error: {
                code: 404,
                message: "Game not found.",
            },
            data: null,
        };

    let current_date = new Date();
    let endpoint = `/game/monthly/player/${game_id}/${identifier}/${
        options?.year ?? current_date.getFullYear()
    }/${options?.month ?? current_date.getMonth() + 1}` as const;

    let response = await fetchEndpoint(endpoint, method_options?.init);
    if (response.error) return response;

    if (game_id === "all") {
        let games = Object.entries(response.data);
        let output: Partial<AllGameStatistics<Timeframe.Monthly>> = {};

        for (let [g, stats] of games) {
            if (isGame(g as Game)) {
                if (
                    Array.isArray(stats) ||
                    typeof stats.played === "undefined"
                ) {
                    output[g as Game] = null;
                    continue;
                }

                const processors = getProcessors(g as Game, Timeframe.Monthly);
                processors.forEach((processor) => processor(stats));
                output[g as Game] = stats;
            }
        }

        return {
            ...response,
            data: output,
        };
    }

    let response_data = response.data as unknown as Statistics<
        G,
        Timeframe.Monthly
    >;

    if (Array.isArray(response_data))
        return {
            ...response,
            status: 404,
            data: null,
            error: { code: 404, message: "Not Found" },
        };

    let processors = getProcessors(game_id, Timeframe.Monthly);
    processors.forEach((processor) => processor(response_data));

    return {
        ...response,
        data: response_data,
        error: null,
    };
}
