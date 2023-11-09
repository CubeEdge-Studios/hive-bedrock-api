import { API_METADATA, Options } from "../types/API";
import { GAME } from "../types/GAME_INFO";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

export default async function getGameMetadata(
    game: GAME,
    options?: Options
): Promise<MethodResponse<API_METADATA>>;

export default async function getGameMetadata(
    game: GAME,
    options?: Options
): Promise<MethodResponse<API_METADATA>> {
    try {
        const { data, error } = await fetchData(
            `/game/meta/${game}`,
            options?.fetch
        );
        if (error || !data)
            return {
                data: null,
                error: { message: "Failed to fetch data.", ...error },
            };

        return { data: data, error: null };
    } catch (err) {
        console.error(err);
        return { data: null, error: { message: "Failed to fetch data." } };
    }
}
