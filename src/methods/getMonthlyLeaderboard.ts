import { gameFormatArray } from "../format/gameFormat";
import { Options } from "../types/API";
import { LB_STATS, REQUEST_LB } from "../types/GAMES";
import { GAME } from "../types/GAME_INFO";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

interface OptionsType extends Options {
    year?: number;
    month?: number;
    date?: Date;
    skip?: number;
    amount?: number;
}

export default async function getMonthlyLeaderboard<G extends GAME>(
    game: G,
    options?: Options
): Promise<MethodResponse<LB_STATS<G>[]>>;

export default async function getMonthlyLeaderboard<G extends GAME>(
    game: G,
    options: OptionsType
): Promise<MethodResponse<LB_STATS<G>[]>>;

export default async function getMonthlyLeaderboard<G extends GAME>(
    game: G,
    options?: OptionsType
): Promise<MethodResponse<REQUEST_LB<G>>> {
    if (
        !options?.year &&
        !options?.amount &&
        !options?.month &&
        !options?.skip &&
        !options?.date
    ) {
        try {
            const { data, error } = await fetchData(
                `/game/monthly/${game}`,
                options?.fetch
            );
            if (error || !data)
                return {
                    data: null,
                    error: { message: "Failed to fetch data.", ...error },
                };

            const gameData = gameFormatArray(game, data) as REQUEST_LB<G>;

            return { data: gameData, error: null };
        } catch (err) {
            console.error(err);
            return { data: null, error: { message: "Failed to fetch data." } };
        }
    } else {
        let year = options.year ?? new Date().getFullYear();
        let month = options.month ?? new Date().getMonth() + 1;
        let amount = options.amount ?? 100;
        let skip = options.skip ?? 0;

        if (options.date) {
            year = options.date.getFullYear();
            month = options.date.getMonth() + 1;
        }

        try {
            let { data, error } = await fetchData(
                `/game/monthly/${game}/${year}/${month}/${amount}/${skip}`,
                options?.fetch
            );
            if (error || !data)
                return {
                    data: null,
                    error: { message: "Failed to fetch data.", ...error },
                };

            if (!Array.isArray(data)) data = Object.values(data);

            const gameData = gameFormatArray(game, data) as REQUEST_LB<G>;

            return { data: gameData, error: null };
        } catch (err) {
            console.error(err);
            return { data: null, error: { message: "Failed to fetch data." } };
        }
    }
}
