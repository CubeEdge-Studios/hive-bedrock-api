import {
    API_BASE_GAME_ALL,
    API_BASE_GAME_MONTHLY,
    API_GAME_STATS,
    API_GLOBAL_STATISTICS,
    API_MAP,
    API_METADATA,
    API_REQUEST_ALL,
    API_REQUEST_LB,
} from "../types/API";
import {
    ENDPOINTS,
    GAME_LB_ALLTIME_ENDPOINT,
    GAME_LB_MONTHLY_ENDPOINT,
    GAME_LB_SPECIFIC_MONTHLY_ENDPOINT,
    GAME_MAPS_ENDPOINT,
    GAME_METADATA_ENDPOINT,
    GLOBAL_STATISTICS_ENDPOINT,
    PLAYER_ALLTIME_ENDPOINT,
    PLAYER_LB_SPECIFIC_MONTHLY_ENDPOINT,
    PLAYER_MONTHLY_ENDPOINT,
} from "../types/ENDPOINTS";
import { USER_MAIN } from "../types/GAMES";
import { GAME } from "../types/GAME_INFO";
import { MethodResponse } from "../types/METHODS";

export interface FetchOptions {
    headers: {
        [key: string]: string;
    };
}

export const API_ROOT = "https://api.playhive.com/v0";

export default async function fetchData(
    endpoint: PLAYER_ALLTIME_ENDPOINT<"all", string>,
    options?: FetchOptions
): Promise<MethodResponse<API_REQUEST_ALL>>;

export default async function fetchData(
    endpoint: PLAYER_ALLTIME_ENDPOINT<"main", string>,
    options?: FetchOptions
): Promise<
    MethodResponse<{
        main: USER_MAIN;
    }>
>;

export default async function fetchData<G extends GAME>(
    endpoint: PLAYER_ALLTIME_ENDPOINT<G, string>,
    options?: FetchOptions
): Promise<MethodResponse<API_GAME_STATS<API_BASE_GAME_ALL>[G]>>;

export default async function fetchData(
    endpoint: PLAYER_MONTHLY_ENDPOINT<"all", string>,
    options?: FetchOptions
): Promise<MethodResponse<API_GAME_STATS<API_BASE_GAME_MONTHLY>>>;

export default async function fetchData<G extends GAME>(
    endpoint: PLAYER_MONTHLY_ENDPOINT<G, string>,
    options?: FetchOptions
): Promise<MethodResponse<API_GAME_STATS<API_BASE_GAME_MONTHLY>[G]>>;

export default async function fetchData<G extends GAME>(
    endpoint: GAME_LB_ALLTIME_ENDPOINT<G>,
    options?: FetchOptions
): Promise<MethodResponse<API_REQUEST_LB<G>>>;

export default async function fetchData<G extends GAME>(
    endpoint: GAME_LB_MONTHLY_ENDPOINT<G>,
    options?: FetchOptions
): Promise<MethodResponse<API_REQUEST_LB<G>>>;

export default async function fetchData<G extends GAME>(
    endpoint: PLAYER_LB_SPECIFIC_MONTHLY_ENDPOINT<
        G,
        string,
        number,
        number,
        number,
        number
    >,
    options?: FetchOptions
): Promise<MethodResponse<API_REQUEST_LB<G>>>;

export default async function fetchData<G extends GAME>(
    endpoint: GAME_LB_SPECIFIC_MONTHLY_ENDPOINT<
        G,
        number,
        number,
        number,
        number
    >,
    options?: FetchOptions
): Promise<MethodResponse<API_REQUEST_LB<G>>>;

export default async function fetchData(
    endpoint: GLOBAL_STATISTICS_ENDPOINT,
    options?: FetchOptions
): Promise<MethodResponse<API_GLOBAL_STATISTICS>>;

export default async function fetchData<G extends GAME>(
    endpoint: GAME_MAPS_ENDPOINT<G>,
    options?: FetchOptions
): Promise<MethodResponse<API_MAP[]>>;

export default async function fetchData<G extends GAME>(
    endpoint: GAME_METADATA_ENDPOINT<G>,
    options?: FetchOptions
): Promise<MethodResponse<API_METADATA>>;

export default async function fetchData<G extends GAME>(
    endpoint: ENDPOINTS<G>,
    options?: FetchOptions
): Promise<
    MethodResponse<
        | API_GLOBAL_STATISTICS
        | API_GAME_STATS<API_BASE_GAME_ALL>
        | API_GAME_STATS<API_BASE_GAME_ALL>[G]
        | API_GAME_STATS<API_BASE_GAME_MONTHLY>
        | API_GAME_STATS<API_BASE_GAME_MONTHLY>[G]
        | API_REQUEST_LB<G>
        | PLAYER_LB_SPECIFIC_MONTHLY_ENDPOINT<
              G,
              string,
              number,
              number,
              number,
              number
          >
        | GAME_LB_SPECIFIC_MONTHLY_ENDPOINT<G, number, number, number, number>
        | API_MAP[]
        | API_METADATA
    >
> {
    try {
        const request = await fetch(API_ROOT + endpoint, {
            headers: options?.headers
                ? new Headers(options?.headers)
                : undefined,
        });

        if (!request.ok)
            return {
                data: null,
                error: {
                    message: request.statusText,
                    status: request.status,
                    endpoint: API_ROOT + endpoint,
                },
            };

        const response = await request.json();

        return {
            data: response,
            error: null,
        };
    } catch (err) {
        console.error(err);
        return {
            data: null,
            error: { message: "Failed to fetch data." },
        };
    }
}
