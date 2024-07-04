import { Game, Statistics, Timeframe } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import isGame from "../helpers/isGame";
import fetchEndpoint from "../helpers/fetchEndpoint";
import { MonthlyProcessedStatistics } from "../types/output";
import { MonthlyProcessors } from "../processors";

interface MonthlyOptions extends Options {
    month: number;
    year: number;
}

export default async function getMonthlyStatistics(
    identifier: string,
    options?: MonthlyOptions
): Promise<APIResponse<MonthlyProcessedStatistics>>;

export default async function getMonthlyStatistics<G extends Game>(
    identifier: string,
    game_id: G,
    options?: MonthlyOptions
): Promise<APIResponse<MonthlyProcessedStatistics[G]>>;

export default async function getMonthlyStatistics<G extends Game>(
    identifier: string,
    game_or_options?: G | MonthlyOptions,
    options?: MonthlyOptions
) {
    let game_id: G | "all" = "all";
    let method_options: MonthlyOptions | undefined = game_or_options as MonthlyOptions;

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
        let response_data = Object.entries(response.data);
        let processed_data: Partial<MonthlyProcessedStatistics> = Object.fromEntries(
            response_data.map(([id, statistics]) => {
                if (!statistics || !isGame(id as Game) || Array.isArray(statistics))
                    return [id, null];

                let e = MonthlyProcessors[Game.ParkourWorlds];

                return [
                    id,
                    typeof MonthlyProcessors[id as Game] === "function"
                        ? MonthlyProcessors[id as Game](statistics)
                        : null,
                ];
            })
        );

        return { ...response, data: processed_data };
    }

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
