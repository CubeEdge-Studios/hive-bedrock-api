import { Game, PlayerMetadata, Statistics, Timeframe } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import {
    AllGameStatistics,
    AllStatistics,
    StatisticsResponse,
} from "../types/output";
import isGame from "../helpers/isGame";
import fetchEndpoint from "../helpers/fetchEndpoint";
import processors from "../processors";

type AllGameStatisticsPlayer = AllGameStatistics<Timeframe.AllTime> & {
    player: PlayerMetadata;
};

export default async function getAllTimeStatistics(
    identifier: string,
    options?: Options
): Promise<APIResponse<AllGameStatisticsPlayer>>;

export default async function getAllTimeStatistics<G extends Game>(
    identifier: string,
    game_id: G,
    options?: Options
): Promise<APIResponse<StatisticsResponse<G, Timeframe.AllTime>>>;

export default async function getAllTimeStatistics<G extends Game>(
    identifier: string,
    game_or_options?: G | Options,
    options?: Options
) {
    let game_id: G | "all" = "all";
    let method_options: Options | undefined = game_or_options as Options;

    if (!isGame(game_id as G) && game_id !== "all")
        return {
            status: 404,
            error: {
                code: 404,
                message: "Game not found.",
            },
            data: null,
        };

    if (isGame(game_or_options as G)) {
        game_id = game_or_options as G;
        method_options = options;
    }

    let response = await fetchEndpoint(
        `/game/all/${game_id}/${identifier}`,
        method_options?.init
    );
    if (response.error) return response;

    if (game_id === "all") {
        let games = Object.entries(response.data);
        let output: Partial<AllGameStatisticsPlayer> = {};

        for (let [g, stats] of games) {
            if (isGame(g as Game)) {
                if (Array.isArray(stats)) {
                    output[g as Game] = null;
                    continue;
                }

                processors.statistics.all[g as Game].forEach((processor) =>
                    processor(
                        stats as StatisticsResponse<Game, Timeframe.AllTime>
                    )
                );
                output[g as Game] = stats;
            }
        }

        return {
            ...response,
            data: {
                ...output,
                player: games.find(([g]) => g === "main")?.at(1),
            },
        };
    }

    let response_data = response.data as unknown as Statistics<
        G,
        Timeframe.AllTime
    >;

    if (Array.isArray(response_data))
        return {
            ...response,
            status: 404,
            data: null,
            error: { code: 404, message: "Not Found" },
        };

    processors.statistics.all[game_id].forEach((processor) =>
        processor(response_data as StatisticsResponse<G, Timeframe.AllTime>)
    );

    return {
        ...response,
        data: response_data,
        error: null,
    };
}
