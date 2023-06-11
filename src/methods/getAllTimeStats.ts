import gameFormat from "../format/gameFormat";
import {
    API_BASE_GAME_ALL,
    API_GAME_STATS,
    API_GAME_STATS_ALL,
} from "../types/API";
import {
    BASE_GAME_ALL,
    GAME,
    GAME_STATS,
    GAME_STATS_ALL,
    REQUEST_ALL,
} from "../types/GAMES";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

export default async function getAllTimeStats(
    playerIndentifier: string
): Promise<MethodResponse<Omit<REQUEST_ALL, "main">>>;

export default async function getAllTimeStats<G extends GAME>(
    playerIdentifier: string,
    game: G
): Promise<MethodResponse<GAME_STATS<BASE_GAME_ALL>[G]>>;

export default async function getAllTimeStats<G extends GAME>(
    playerIdentifier: string,
    game: G[]
): Promise<MethodResponse<{ [M in G]: GAME_STATS_ALL<M> }>>;

export default async function getAllTimeStats<G extends GAME>(
    playerIdentifier: string,
    game?: G | G[]
): Promise<
    MethodResponse<
        | GAME_STATS<BASE_GAME_ALL>
        | GAME_STATS<BASE_GAME_ALL>[G]
        | { [M in G]: GAME_STATS_ALL<M> }
    >
> {
    if (!game) {
        try {
            const { data, error } = await fetchData(
                `/game/all/all/${playerIdentifier}`
            );
            if (error || !data)
                return {
                    data: null,
                    error: error ?? "Failed to fetch data.",
                };

            const gameData = gameFormat(data) as REQUEST_ALL;

            let filteredGamesEntries = Object.entries(gameData).filter(
                ([key]) => Object.values(GAME).includes(key as GAME)
            );

            let filteredGames = Object.fromEntries(
                filteredGamesEntries
            ) as GAME_STATS<BASE_GAME_ALL>;

            return { data: filteredGames, error: null };
        } catch (err) {
            return { data: null, error: err as any };
        }
    }

    if (typeof game === "string") {
        try {
            const { data, error } = await fetchData<G>(
                `/game/all/${game}/${playerIdentifier}`
            );
            if (error || !data)
                return {
                    data: null,
                    error: error ?? "Failed to fetch data.",
                };
            const gameData = gameFormat({ [game]: data }) as REQUEST_ALL;
            return { data: gameData[game], error: null };
        } catch (err) {
            return { data: null, error: err as any };
        }
    }

    if (Array.isArray(game)) {
        try {
            const { data, error } = await fetchData(
                `/game/all/all/${playerIdentifier}`
            );
            if (error || !data)
                return {
                    data: null,
                    error: error ?? "Failed to fetch data.",
                };

            const gameData = gameFormat(data) as REQUEST_ALL;
            const FILTER_GAMES = game as GAME[];

            let filteredGamesEntries = Object.entries(gameData).filter(
                ([key]) => FILTER_GAMES.includes(key as GAME)
            );

            let filteredGames = Object.fromEntries(filteredGamesEntries) as {
                [M in G]: GAME_STATS_ALL<M>;
            };

            return { data: filteredGames, error: null };
        } catch (err) {
            return { data: null, error: err as any };
        }
    }

    return { data: null, error: "Failed to detect game type." };
}
