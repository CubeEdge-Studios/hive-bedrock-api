import { Game, MapMetadata } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import fetchEndpoint from "../helpers/fetchEndpoint";
import isGame from "../helpers/isGame";

export default function getMaps<G extends Game>(
    game_id: G,
    options?: Options
): Promise<APIResponse<MapMetadata[]>>;

export default async function getMaps<G extends Game>(
    game_id: G,
    options?: Options
): Promise<APIResponse<MapMetadata[]>> {
    if (!isGame(game_id))
        return {
            status: 404,
            error: {
                code: 404,
                message: "Game not found.",
            },
            data: null,
        };

    let response = await fetchEndpoint(`/game/map/${game_id}`, options?.init);
    if (response.error) return response;

    let data = response.data as MapMetadata[];
    return {
        ...response,
        data,
    };
}
