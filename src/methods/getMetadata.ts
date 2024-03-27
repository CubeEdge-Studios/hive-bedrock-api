import { Game, GameMetadata } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import fetchEndpoint from "../helpers/fetchEndpoint";
import isGame from "../helpers/isGame";

export default function getMetdata<G extends Game>(
    game_id: G,
    options?: Options
): Promise<APIResponse<GameMetadata>>;

export default async function getMetdata<G extends Game>(
    game_id: G,
    options?: Options
): Promise<APIResponse<GameMetadata>> {
    if (!isGame(game_id))
        return {
            status: 404,
            error: {
                code: 404,
                message: "Game not found.",
            },
            data: null,
        };

    let response = await fetchEndpoint(`/game/meta/${game_id}`, options?.init);
    if (response.error) return response;

    let data = response.data as GameMetadata;
    return {
        ...response,
        data,
    };
}
