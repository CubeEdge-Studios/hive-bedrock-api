import { gameFormatArray } from "../format/gameFormat";
import { GAME, LB_STATS, REQUEST_LB } from "../types/GAMES";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

export default async function getMonthlyLeaderboard<G extends GAME>(
    game: G
): Promise<MethodResponse<LB_STATS<G>>>;

export default async function getMonthlyLeaderboard<G extends GAME>(
    game: G,
    options: {
        year?: number;
        month?: number;
        skip?: number;
        amount?: number;
    }
): Promise<MethodResponse<LB_STATS<G>>>;

export default async function getMonthlyLeaderboard<G extends GAME>(
    game: G,
    options?: {
        year?: number;
        month?: number;
        skip?: number;
        amount?: number;
    }
): Promise<MethodResponse<REQUEST_LB<G>>> {
    if (!options) {
        try {
            const { data, error } = await fetchData(`/game/monthly/${game}`);
            if (error || !data)
                return {
                    data: null,
                    error: error ?? "Failed to fetch data.",
                };

            const gameData = gameFormatArray(game, data) as REQUEST_LB<G>;

            return { data: gameData, error: null };
        } catch (err) {
            return { data: null, error: err as any };
        }
    } else {
        let year = options.year ?? new Date().getFullYear();
        let month = options.month ?? new Date().getMonth() + 1;
        let amount = options.amount ?? 100;
        let skip = options.skip ?? 0;

        try {
            const { data, error } = await fetchData(
                `/game/monthly/${game}/${year}/${month}/${amount}/${skip}`
            );
            if (error || !data)
                return {
                    data: null,
                    error: error ?? "Failed to fetch data.",
                };

            const gameData = gameFormatArray(game, data) as REQUEST_LB<G>;

            return { data: gameData, error: null };
        } catch (err) {
            return { data: null, error: err as any };
        }
    }
}
