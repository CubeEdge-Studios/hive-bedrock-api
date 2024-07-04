import { Game, PlayerMetadata, Statistics, Timeframe } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import isGame from "../helpers/isGame";
import fetchEndpoint from "../helpers/fetchEndpoint";
import { AllTimeProcessedStatistics } from "../types/output";
import { AllTimeProcessors, PlayerProcessor } from "../processors";
import { Processed_Player_Statistics } from "../processors/player";

type AllGameStatisticsPlayer = AllTimeProcessedStatistics & {
    player: Processed_Player_Statistics;
};

export default async function getAllTimeStatistics(
    identifier: string,
    options?: Options
): Promise<APIResponse<AllGameStatisticsPlayer>>;

export default async function getAllTimeStatistics<G extends Game>(
    identifier: string,
    game_id: G,
    options?: Options
): Promise<APIResponse<AllTimeProcessedStatistics[G]>>;

export default async function getAllTimeStatistics<G extends Game>(
    identifier: string,
    game_or_options?: G | Options,
    options?: Options
) {
    let game_id: G | "all" = "all";
    let method_options: Options | undefined = game_or_options as Options;

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

    let response = await fetchEndpoint(
        `/game/all/${game_id}/${identifier}`,
        method_options?.init
    );
    if (response.error) return response;

    if (game_id === "all") {
        let response_data = Object.entries(response.data);
        let processed_data: Partial<AllGameStatisticsPlayer> =
            Object.fromEntries(
                response_data.map(([id, statistics]) => {
                    if (id === "main")
                        return ["player", PlayerProcessor(statistics)];

                    if (
                        !statistics ||
                        !isGame(id as Game) ||
                        Array.isArray(statistics)
                    )
                        return [id, null];

                    return [
                        id,
                        typeof AllTimeProcessors[id as Game] === "function"
                            ? AllTimeProcessors[id as Game](statistics)
                            : null,
                    ];
                })
            );

        return { ...response, data: processed_data };
    }

    let response_data = response.data as Statistics<G, Timeframe.AllTime>;
    if (Array.isArray(response_data))
        return {
            ...response,
            status: 404,
            data: null,
            error: { code: 404, message: "Not Found" },
        };

    let processed_data = AllTimeProcessors[game_id](response_data);

    return {
        ...response,
        data: processed_data,
        error: null,
    };
}
