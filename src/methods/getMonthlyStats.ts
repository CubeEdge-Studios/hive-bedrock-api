import gameFormat from "../format/gameFormat";
import {
    BASE_GAME_MONTHLY,
    GAME_STATS,
    GAME_STATS_ALL,
    GAME_STATS_MONTHLY,
    REQUEST_MONTHLY,
} from "../types/GAMES";
import { GAME } from "../types/GAME_INFO";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

export default async function getMonthlyStats(
    playerIndentifier: string
): Promise<MethodResponse<Omit<REQUEST_MONTHLY, "main">>>;

export default async function getMonthlyStats<G extends GAME>(
    playerIdentifier: string,
    game: G
): Promise<MethodResponse<GAME_STATS<BASE_GAME_MONTHLY>[G]>>;

export default async function getMonthlyStats<G extends GAME>(
    playerIdentifier: string,
    game: G,
    options: {
        year?: number;
        month?: number;
        date?: Date;
    }
): Promise<MethodResponse<GAME_STATS<BASE_GAME_MONTHLY>[G]>>;

export default async function getMonthlyStats<G extends GAME>(
    playerIdentifier: string,
    game: G[]
): Promise<MethodResponse<{ [M in G]: GAME_STATS_ALL<M> }>>;

export default async function getMonthlyStats<G extends GAME>(
    playerIdentifier: string,
    game?: G | G[],
    options?: {
        year?: number;
        month?: number;
        date?: Date;
        skip?: number;
        amount?: number;
    }
): Promise<
    MethodResponse<
        | GAME_STATS<BASE_GAME_MONTHLY>
        | GAME_STATS<BASE_GAME_MONTHLY>[G]
        | { [M in G]: GAME_STATS_MONTHLY<M> }
    >
> {
    if (!game) {
        try {
            const { data, error } = await fetchData(
                `/game/monthly/player/all/${playerIdentifier}`
            );
            if (error || !data)
                return {
                    data: null,
                    error: { message: "Failed to fetch data.", ...error },
                };

            const gameData = gameFormat(data) as REQUEST_MONTHLY;

            let filteredGamesEntries = Object.entries(gameData).filter(
                ([key]) => Object.values(GAME).includes(key as GAME)
            );

            let filteredGames = Object.fromEntries(
                filteredGamesEntries
            ) as GAME_STATS<BASE_GAME_MONTHLY>;

            return { data: filteredGames, error: null };
        } catch (err) {
            console.error(err);
            return { data: null, error: { message: "Failed to fetch data." } };
        }
    }

    if (options && typeof game === "string") {
        let year = options.year ?? new Date().getFullYear();
        let month = options.month ?? new Date().getMonth() + 1;

        if (options.date) {
            year = options.date.getFullYear();
            month = options.date.getMonth() + 1;
        }

        try {
            const { data, error } = await fetchData<G>(
                `/game/monthly/player/${game}/${playerIdentifier}/${year}/${month}`
            );
            if (error || !data)
                return {
                    data: null,
                    error: { message: "Failed to fetch data.", ...error },
                };

            const gameData = gameFormat(
                {
                    [game]: data,
                },
                true
            ) as GAME_STATS<BASE_GAME_MONTHLY>[G];

            return {
                data: gameData as GAME_STATS<BASE_GAME_MONTHLY>[G],
                error: null,
            };
        } catch (err) {
            console.error(err);
            return { data: null, error: { message: "Failed to fetch data." } };
        }
    }

    if (typeof game === "string") {
        try {
            const { data, error } = await fetchData<G>(
                `/game/monthly/player/${game}/${playerIdentifier}`
            );
            if (error || !data)
                return {
                    data: null,
                    error: { message: "Failed to fetch data.", ...error },
                };

            const gameData = gameFormat(
                {
                    [game]: data,
                },
                true
            ) as GAME_STATS<BASE_GAME_MONTHLY>[G];

            return {
                data: gameData as GAME_STATS<BASE_GAME_MONTHLY>[G],
                error: null,
            };
        } catch (err) {
            console.error(err);
            return { data: null, error: { message: "Failed to fetch data." } };
        }
    }

    if (Array.isArray(game)) {
        try {
            const { data, error } = await fetchData(
                `/game/monthly/player/all/${playerIdentifier}`
            );
            if (error || !data)
                return {
                    data: null,
                    error: { message: "Failed to fetch data.", ...error },
                };

            const FILTER_GAMES = game as GAME[];

            let filteredGamesEntries = Object.entries(data).filter(([key]) =>
                FILTER_GAMES.includes(key as GAME)
            );

            let filteredGames = Object.fromEntries(filteredGamesEntries) as {
                [M in G]: GAME_STATS_MONTHLY<M>;
            };

            const gameData = gameFormat(filteredGames) as {
                [M in G]: GAME_STATS_MONTHLY<M>;
            };

            return { data: gameData, error: null };
        } catch (err) {
            console.error(err);
            return { data: null, error: { message: "Failed to fetch data." } };
        }
    }

    return { data: null, error: { message: "Failed to detect game type." } };
}
