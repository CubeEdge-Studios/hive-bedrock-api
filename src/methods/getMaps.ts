import { API_MAP, Options } from "../types/API";
import { GAME } from "../types/GAME_INFO";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

const INVALID_GAMES = [GAME.BlockParty, GAME.JustBuild, GAME.TheBridge];

export default async function getMaps(
    game: GAME,
    options?: Options
): Promise<MethodResponse<API_MAP[]>>;

export default async function getMaps(
    game: GAME,
    options?: Options
): Promise<MethodResponse<API_MAP[]>> {
    if (INVALID_GAMES.includes(game))
        return {
            data: null,
            error: {
                message:
                    "This game does not support this endpoint as it only has one map.",
            },
        };

    try {
        const { data, error } = await fetchData(
            `/game/map/${game}`,
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
